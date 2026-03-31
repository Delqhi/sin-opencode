# Skills

Canonical bucket for OpenCode skills — the SIN Solver ecosystem's skill library.

## Migration Status

| Status | Details |
|--------|---------|
| Symlink | `Skills/current` → `../global-opencode-config/skills/` |
| Content | 22 skills with SKILL.md, 1 test skill, 3 catalog backups |
| Next step | Copy actual skill directories here, remove symlink |

## Skill Catalog (22 Active)

| Skill | Description |
|-------|-------------|
| [anonymous](#anonymous) | Browser automation via webauto-nodriver-mcp with stealth capabilities |
| [browser-crashtest-lab](#browser-crashtest-lab) | Full-browser crash-test and quality-audit for web projects |
| [check-plan-done](#check-plan-done) | Unified plan-and-execute workflow |
| [cloudflare-deploy](#cloudflare-deploy) | Deploy to Cloudflare Workers, Pages, and platform services |
| [create-a2a](#create-a2a) | Create/standardize SIN A2A agents with canonical template |
| [create-a2a-mcp](#create-a2a-mcp) | Scaffold MCP servers for A2A agents |
| [create-a2a-sin-coder](#create-a2a-sin-coder) | Bootstrap elite A2A Coder Agents with n8n + GitHub Issues |
| [create-a2a-team](#create-a2a-team) | Create/standardize SIN A2A Team Managers |
| [create-telegrambot](#create-telegrambot) | Create, deploy, operate, and recover Telegram bots |
| [doc](#doc) | Read/create/edit `.docx` documents with layout fidelity |
| [enterprise-deep-debug](#enterprise-deep-debug) | Enterprise debugging: facts-first RCA, parallel subagents |
| [imagegen](#imagegen) | Generate/edit images with Gemini-first workflow |
| [nvidia-3d-forge](#nvidia-3d-forge) | Build production-grade 3D assets (OpenUSD/USDZ) |
| [nvidia-video-forge](#nvidia-video-forge) | Create production-grade videos with NVIDIA NIM/Cosmos |
| [omoc-plan-swarm](#omoc-plan-swarm) | OpenCode swarm plugin for multi-agent workflows |
| [opencode-subagent-delegation](#opencode-subagent-delegation) | Persistent co-working orchestration for Codex + opencode |
| [pdf](#pdf) | Read/create/review PDFs with rendering and layout fidelity |
| [self-healer](#self-healer) | Auto-triggered healing when SIN-Solver micro-steps fail |
| [sovereign-repo-governance](#sovereign-repo-governance) | Autonomous repo management — Zeus & Hermes control plane |
| [sovereign-research](#sovereign-research) | Deep multi-source research with A2A-SIN-Research pipeline |
| [sora](#sora) | Generate/remix/poll/list/download/delete Sora videos |
| [vercel-deploy](#vercel-deploy) | Deploy applications and websites to Vercel |

## Skill Details

### anonymous
Browser automation via the `webauto-nodriver-mcp` server. Enables web interactions, UI automation, and cross-platform tasks using nodriver with stealth capabilities.

### browser-crashtest-lab
Full-browser crash-test and quality-audit workflow. Crawls pages, opens links, clicks buttons, collects console/page/network failures, runs accessibility and Lighthouse checks, and scores visual/design quality.

### check-plan-done
Unified plan-and-execute workflow. Checks whether a viable plan exists, creates and reviews one if needed, then executes task by task until done criteria pass. Synthesizes omoc-plan-swarm, biometrics-plan, and biometrics-work.

### cloudflare-deploy
Deploy applications and infrastructure to Cloudflare using Workers, Pages, and related platform services.

### create-a2a
Create, standardize, or upgrade SIN A2A agents using the canonical SIN template, private GitHub repo provisioning, team-manager registry rules, dedicated Google Docs sync, A2A card requirements, and fleet validation. Includes the mandatory Infinite Scaling Producer-Consumer Auth architecture for HF VMs.

### create-a2a-mcp
Scaffold MCP servers for A2A agents. Generates all MCP files from tool definitions. Trigger: "create MCP", "scaffold MCP server", "add MCP to agent".

### create-a2a-sin-coder
Master-level enterprise workflow to bootstrap an elite A2A Coder Agent (e.g., A2A-SIN-Frontend, A2A-SIN-Backend). Triggers an n8n workflow that sets up a new GitHub repository with 5–10 specialized architecture GitHub Issues.

### create-a2a-team
Create, standardize, or upgrade SIN A2A Team Managers using the canonical Template-A2A-SIN-Team scaffold. CLI-first execution that costs 90% fewer tokens than MCP approaches.

### create-telegrambot
Master-level workflow for creating, editing, deploying, operating, and recovering Telegram bots with API-first automation, BotFather/Desktop bootstrap, and near-zero manual user interruption.

### doc
Use when the task involves reading, creating, or editing `.docx` documents, especially when formatting or layout fidelity matters. Uses `python-docx` plus the bundled `scripts/render_docx.py` for visual checks.

### enterprise-deep-debug
Ultimate enterprise debugging workflow: facts-first RCA, cross-tool intent discovery, parallel subagents, web validation, minimal safe fix, and persistent knowledge flush.

### imagegen
Generate or edit images with a Gemini-first workflow (ad creatives, hero images, product shots, concept art, covers, image edits, batch variants). Uses the bundled Gemini router (`scripts/gemini_image_router.py`) with provider order: Nano Banana Pro → Nano Banana 2 → Imagen 4 Fast → NVIDIA NIM.

### nvidia-3d-forge
Build production-grade 3D assets as an image-to-3D or text-to-3D pipeline with OpenUSD/USDZ outputs, topology and PBR quality gates, and validation handoff.

### nvidia-video-forge
Create production-grade videos with hosted NVIDIA NIM/Cosmos APIs using a deterministic generation pipeline, multisource ingestion, chat-bridge judging, and strict QA gating.

### omoc-plan-swarm
OpenCode swarm plugin for side-by-side multi-agent workflows. Provides swarm.create, swarm.discover, swarm.status, swarm.parallel, swarm.send, swarm.max, swarm.jam, and swarm.forget tools.

### opencode-subagent-delegation
Persistent co-working orchestration for Codex and opencode CLI in the same project directory. Enables continuous collaboration, complete project context attachment, strict secret redaction, and canonical-first conflict resolution.

### pdf
Use when tasks involve reading, creating, or reviewing PDF files where rendering and layout matter. Prefers visual checks by rendering pages (Poppler) and uses Python tools such as `reportlab`, `pdfplumber`, and `pypdf` for generation and extraction.

### self-healer
Auto-triggered by the macOS Background Watcher when a SIN-Solver micro-step fails and generates a `healing_request.txt`. Receives the failure context and executes the recovery workflow.

### sovereign-repo-governance
The March 2026 gold standard for autonomous repository management. Two pillars: **Internal Governance (Zeus & Hermes Control Plane)** for autonomous task orchestration, and **External Outreach (CEO Bug-Hunter Protocol)** for building global reputation by fixing upstream anomalies.

### sovereign-research
The March 2026 gold standard for deep, multi-source research. Fuses a bounded multi-agent swarm with the A2A-SIN-Research pipeline, enabling Perplexity-killer answers, live authenticated multi-platform crawling (via A2A-SIN-Authenticator), and persistent Drive artifacts.

### sora
Generate, remix, poll, list, download, or delete Sora videos via OpenAI's video API using the bundled CLI (`scripts/sora.py`). Requires `OPENAI_API_KEY` and Sora API access.

### vercel-deploy
Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".
