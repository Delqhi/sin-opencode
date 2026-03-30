#!/usr/bin/env node
import path from 'node:path';
import { parseArgs, printResult, readText, resolveAgentRoot, exists, walkFiles } from './_a2a-lib.mjs';

const args = parseArgs(process.argv.slice(2));
const agentRoot = resolveAgentRoot(args['agent-root']);
const format = args.format || 'json';
const healthUrl = args['health-url'];

const cliText = readText(path.join(agentRoot, 'src', 'cli.ts'));
const hfSyncText = readText(path.join(agentRoot, 'src', 'hf_sync.ts'));
const files = walkFiles(agentRoot, (p) => /\.(md|ts|js|mjs|py|sh|json|yaml|yml)$/.test(p));
const corpus = files.map((p) => readText(p)).join('\n');

async function probe(url, { method = 'GET' } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(url, {
      method,
      signal: controller.signal,
      headers: {
        'user-agent': 'create-a2a-hf-readiness-check',
      },
    });
    return { ok: response.ok, status: response.status };
  } catch (error) {
    return { ok: false, status: 0, error: error?.name || String(error) };
  } finally {
    clearTimeout(timer);
  }
}

function normalizeBaseUrl(url) {
  return url.replace(/\/health\/?$/, '').replace(/\/+$/, '');
}

const checks = {
  keepAliveConfigured: /startKeepAlivePing|keep.?alive/i.test(cliText + hfSyncText + corpus),
  sessionBackupConfigured: /startAutoBackup|backupAuthSession|restoreAuthSession/i.test(cliText + hfSyncText + corpus),
  restoreHookConfigured: /restoreAuthSession/i.test(cliText + hfSyncText + corpus),
  hfRuntimeCommandDeclared: exists(path.join(agentRoot, 'Dockerfile')) || /hugging face|hf vm|space/i.test(corpus),
  publicHealthUrlProvided: Boolean(healthUrl),
  publicHealthReachable: false,
  publicAgentCardReachable: false,
  publicRpcReachable: false,
};

const deploymentNotes = [];

if (healthUrl) {
  const baseUrl = normalizeBaseUrl(healthUrl);
  const health = await probe(`${baseUrl}/health`);
  const card = await probe(`${baseUrl}/.well-known/agent-card.json`);
  const rpc = await probe(`${baseUrl}/a2a/v1`);

  checks.publicHealthReachable = health.ok;
  checks.publicAgentCardReachable = card.ok;
  checks.publicRpcReachable = rpc.status !== 404 && rpc.status !== 0;

  deploymentNotes.push(`health:${health.status}`);
  deploymentNotes.push(`agent-card:${card.status}`);
  deploymentNotes.push(`rpc:${rpc.status}`);
} else {
  deploymentNotes.push('missing --health-url; live HF endpoints cannot be verified');
}

const failures = Object.entries(checks)
  .filter(([, value]) => value === false)
  .map(([key]) => `${key} failed`);

printResult({ ok: failures.length === 0, checks, failures, deploymentNotes }, format);
