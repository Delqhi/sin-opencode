# 🚀 OpenSIN-Code (Enterprise Autonomous Edition)

<div align="center">
  <img src="https://raw.githubusercontent.com/anomalyco/opencode/main/assets/logo.png" alt="OpenSIN-Code" width="120" />
</div>

**OpenSIN-Code** is the heavily upgraded, enterprise-grade fork of the original OpenCode repository, tailored exclusively for the **OpenSIN-AI** autonomous agent fleet and A2A infrastructure.

---

## 🌟 Key Upgrades & OpenSIN-Exclusive Features

Unlike the upstream repository, this fork is designed to operate as a completely autonomous, synchronized hive-mind across multiple VMs, Macs, and Cloud environments.

### 1. Global SSOT Synchronization (Zero Drift)
- Includes a bulletproof background daemon that enforces a strict Single Source of Truth.
- All local development environments (Macs) and execution nodes (HF Spaces, OCI VMs) automatically pull configurations, skills, and plugins from this repository every 60 seconds.
- Local configuration drift is mathematically impossible.

### 2. Native Antigravity Model Integration
- Pre-configured to bypass standard API limitations using the `opencode-antigravity-auth` plugin.
- Natively routes and authenticates `google/antigravity-gemini-3.1-pro`, `antigravity-claude-opus-4-6-thinking`, and `antigravity-claude-sonnet-4-6` via our private OCI proxy.

### 3. OMOC Swarm Orchestration
- Built-in custom commands (`omoc-swarm-create`, `omoc-jam`, `sin-terminal-orchestrate`) for parallel, multi-agent terminal coordination directly from the CLI.

### 4. Automated Sovereign Governance
- Bundled with the `sovereign-repo-governance` skill, allowing agents to automatically clone, structure, and deploy best-practice GitHub Wikis and handle upstream bug-bounties autonomously.

---

## 🛠️ Installation & Setup (Partner Developers)

If you are onboarding as a partner developer, you **must** use this fork to ensure your local environment does not drift from the core OpenSIN-AI team.

Please follow the official Dev-Setup Guide located in our Wiki:
👉 **[OpenCode Dev Setup & SSOT Synchronization](https://github.com/OpenSIN-AI/dev-setup/wiki/Guides/OpenCode-Dev-Setup)**

---

## 🤖 Usage

Start the interactive CLI or use the standard daemon execution:
```bash
opencode
```
Or run targeted ultra-models:
```bash
opencode run "Analyze this repository" --model google/antigravity-gemini-3.1-pro
```

---
*Maintained by the OpenSIN-AI Core Engineering Team. Upstream updates from anomalyco/opencode are automatically merged via a zero-dependency background sync daemon.*
