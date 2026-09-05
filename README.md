# Cossert 0.2 Center

A large home base for **Cossert 0.2**: rules, reference material, experiments, challenges, a browser playground, release notes, templates, tests, and deliberately ridiculous examples.

> **Status:** the full official Cossert 0.2 grammar was not available when this package was generated. The Center therefore preserves the Cossert rules we actually know and marks anything else `0.2 TODO` instead of inventing fake 0.2 syntax.

## Preserved compatibility core

- `SKIPTIS` — continue / skip current loop iteration.
- `FRGETABTIT` — break / exit the loop.
- Cossert intentionally has no `else if`.
- `PICKARANDOM(FROM(value)TO(value)W/O(value))` — random selection excluding one value.
- `FINALANSER(expression/value)` — function return.
- No separate bool type; comparison-style results are integers.
- `HAV A LIST "name" LIKE [items]:` — list declaration.
- `TAKITOUT{list name}[id]` — remove/take out an item.
- Removing a list item does not shift later IDs; the position stays as an empty slot.

## Start here

- `website/index.html` — interactive Center dashboard.
- `playground/index.html` — compatibility-core playground.
- `docs/specification/KNOWN-RULES.md` — rules currently known.
- `docs/specification/V0.2-TODO.md` — missing official 0.2 grammar.
- `challenges/` — 70 practice prompts.
- `examples/` — dozens of safe syntax fragments.
- `releases/v0.2.0-alpha.1.md` — release draft.

## First suggested GitHub Release

Tag: `v0.2.0-alpha.1`

Title: **Cossert 0.2 Center — Alpha 1**

Once the complete official 0.2 grammar is inserted and validated, promote to `v0.2.0`.

## License

MIT.
