# Real Cossert Game Arcade

This update changes the arcade architecture.

- `interpreter.js` is the shared browser compatibility-core interpreter.
- `.cossert` files contain the Cossert data/operations used by each game.
- HTML is only a browser host/renderer.
- CSS is optional appearance.
- No undocumented Cossert 0.2 conditional or loop syntax is invented.

Implemented preserved forms:
- `HAV A LIST "name" LIKE [items]:`
- `TAKITOUT{list name}[id]` semantics: the slot becomes empty and later IDs do not shift.
- `PICKARANDOM(FROM(value)TO(value)W/O(value))`
- integer-like comparison results in the runtime
- recognition hooks for `SKIPTIS`, `FRGETABTIT`, and `FINALANSER`

This is intentionally a small compatibility-core game runtime, not a claim that the missing full Cossert 0.2 grammar has been defined.
