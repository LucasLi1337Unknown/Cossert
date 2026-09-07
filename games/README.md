# Cossert Arcade

Six replayable browser games:

1. Cossert Snake
2. Cossert Dungeon
3. Cossert Dash
4. Cossert Invaders
5. List Labyrinth
6. Cossert 2048

## Architecture

Each game has a `game.cossert` file containing its Cossert-side lists, maps, values, level data, inventory, random pools, and other game rules/configuration. `interpreter.js` implements the documented Cossert compatibility core used by the browser games. HTML/JavaScript acts as the browser host for keyboard/touch input, timing, canvas rendering, collision loops, and other browser services.

The project deliberately does **not** invent undocumented Cossert 0.2 loop or conditional grammar. As the official language grammar grows, more host-side mechanics can move into `.cossert`.

## Replace the old arcade

Delete the repository's old `games/` directory and upload this entire `games/` directory in its place.
