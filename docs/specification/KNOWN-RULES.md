# Known Cossert Rules

This page contains only preserved Cossert rules currently available.

## Loop control

`SKIPTIS` skips the current loop iteration.

`FRGETABTIT` exits the current loop.

Cossert intentionally has **no `else if`**.

## Random values

`PICKARANDOM(FROM(value)TO(value)W/O(value))` selects from the intended domain while excluding the value supplied to `W/O(...)`. Numbers/chars/strings may be meaningful domains where the language design allows them.

## Function returns

`FINALANSER(expression/value)` returns a result. Cossert has no separate bool type; comparison-style results are integer-like.

## Lists

Declaration: `HAV A LIST "name" LIKE [items]:`

Removal: `TAKITOUT{list name}[id]`

Removal keeps IDs stable. The selected slot becomes empty instead of shifting later items.

## Version boundary

This is not yet a complete Cossert 0.2 grammar. Unknown 0.2 behavior is deliberately not guessed.
