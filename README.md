# 🚀 SIN-OpenCode (Enterprise A2A Edition)

<div align="center">
  <img src="https://raw.githubusercontent.com/anomalyco/opencode/main/assets/logo.png" alt="SIN-OpenCode" width="120" />
</div>

**SIN-OpenCode** is the heavily upgraded, enterprise-grade fork of the original OpenCode repository, tailored exclusively for the **OpenSIN-AI** autonomous agent fleet and A2A infrastructure.

---

## 🌟 Key Upgrades & SIN-Exclusive Features

Unlike the upstream repository, this fork is designed to operate as a completely autonomous, synchronized hive-mind across multiple VMs, Macs, and Cloud environments.

1. **Global SSOT Synchronization (Zero Drift)**
   - Includes the `ssot-daemon.sh` which enforces a strict Single Source of Truth.
   - All local development environments (Macs) and execution nodes (HF Spaces, OCI VMs) automatically pull configurations, skills, and plugins from this repository every 60 seconds.
2. **Native Antigravity Model Integration**
   - Pre-configured to bypass standard API limitations using the `opencode-antigravity-auth` plugin.
   - Natively supports `google/antigravity-gemini-3.1-pro`, `antigravity-claude-opus-4-6-thinking`, and `antigravity-claude-sonnet-4-6`.
3. **OMOC Swarm Orchestration**
   - Built-in custom commands (`omoc-swarm-create`, `omoc-jam`, `sin-terminal-orchestrate`) for parallel, multi-agent terminal coordination.
4. **Automated Sovereign Governance**
   - Bundled with the `sovereign-repo-governance` skill, allowing agents to automatically clone, structure, and deploy best-practice GitHub Wikis and handle bug-bounties autonomously.

## 🛠️ Installation & Setup (Partner Developers)

If you are onboarding as a partner developer, you **must** use this fork to ensure your local environment does not drift from the core OpenSIN-AI team.

Please follow the official Dev-Setup Guide located in our Wiki:
👉 **[OpenCode Dev Setup & SSOT Synchronization](https://github.com/OpenSIN-AI/dev-setup/wiki/Guides/OpenCode-Dev-Setup)**

## 🤖 Usage

Start the interactive CLI or use the standard daemon execution:
```bash
opencode
```
Or run targeted models:
```bash
opencode run "Analyze this repository" --model google/antigravity-gemini-3.1-pro
```

---
*Forked and maintained by the OpenSIN-AI Core Engineering Team. Upstream updates from anomalyco/opencode are automatically merged via GitHub Actions.*
