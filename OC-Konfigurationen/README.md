# OC-Konfigurationen

Canonical SSOT bucket for the OpenCode configuration set.

Current source: `global-opencode-config/`

Contains:
- `opencode.json`
- `package.json`
- `bun.lock`
- `opencode.json.patch`

Quickstart:
1. Edit the files here, not in ad-hoc local copies.
2. Run `sin-sync` after changes.
3. Let the SSOT daemon flatten this bucket back into `~/.config/opencode/`.

Status: scaffolded, legacy path still mirrors the same content.
