# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development

```bash
npm run build      # Compile TypeScript to dist/
npm run dev        # Watch mode (auto-recompile on changes)
npm link           # Install globally for local testing
```

After changes, run `npm run build && ccm <command>` to test. There are no automated tests.

## Architecture

**CLI tool (Node.js ESM + TypeScript)** that switches Claude Code custom model configurations by writing to `~/.claude/settings.json`.

### Data Flow

```
User command → Commander.js → resolveProfile() (alias + fuzzy match) → DataStore → applyProfile() → settings.json
```

### Key Files

- **`src/index.ts`** — All CLI commands in one file (~750 lines). Contains helpers: `ask()`, `resolveProfile()`, `openEditor()`, `saveAndSwitch()`, `levenshtein()`, `findSuggestions()`.
- **`src/types.ts`** — `Profile`, `DataStore` interface, `RcConfig`.
- **`src/store/cc-switch.ts`** — Reads/writes cc-switch's SQLite DB (`~/.cc-switch/cc-switch.db`, `providers` table where `app_type='claude'`).
- **`src/store/standalone.ts`** — Reads/writes `~/.ccm/config.json`.
- **`src/utils.ts`** — `readRc()`/`writeRc()` for `~/.ccm/rc.json`, `getStore()` factory that returns the correct DataStore based on mode.
- **`src/claude.ts`** — `applyProfile()` merges profile config into settings.json while preserving `language` and `permissions` fields.
- **`src/i18n/`** — `zh.ts` defines all keys (source of truth for `TranslationKey` type), `en.ts` implements same keys, `index.ts` exports `t()` with `{var}` interpolation. Locale priority: rc.json > `$LANG` > default `zh`.

### Storage Modes

Two `DataStore` implementations behind a common interface. Mode stored in `~/.ccm/rc.json`. The `getStore()` factory in `utils.ts` returns the right one.

### Name Resolution

`resolveProfile()` is async and handles: alias lookup → alias/config name conflict disambiguation → direct match → fuzzy match (case-insensitive → substring → Levenshtein ≤ 3).

### Interactive Selection

Uses `@clack/prompts` for TTY environments, falls back to numbered list + readline for non-TTY (e.g., inside Claude Code).

## Conventions

- All user-facing strings go through `t()` — add keys to `zh.ts` first (it defines `TranslationKey`), then `en.ts`.
- Commands use `ensureStore()` which exits if not initialized.
- Token display is always masked: first 8 + `...` + last 4 chars.
- `applyProfile()` preserves `USER_FIELDS = ["language", "permissions"]`.
