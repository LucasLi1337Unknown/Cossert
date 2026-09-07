/*
Cossert browser compatibility-core interpreter.
This intentionally implements ONLY Cossert forms documented by the repository:
HAV A LIST, TAKITOUT, PICKARANDOM(FROM...TO...W/O...), SKIPTIS, FRGETABTIT,
FINALANSER, and integer-like comparison results.

The game pages are hosts/renderers. Game data and Cossert operations live in .cossert files.
*/
class CossertRuntime {
    constructor(source = "") {
        this.source = source;
        this.lists = new Map();
        this.parseLists();
    }
    parseValue(raw) {
        raw = raw.trim();
        if (/^-?\d+(?:\.\d+)?$/.test(raw)) return Number(raw);
        if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'")))
            return raw.slice(1, -1);
        return raw;
    }
    splitItems(raw) {
        const out = [];
        let cur = "", quote = null;
        for (let i = 0; i < raw.length; i++) {
            const c = raw[i];
            if ((c === '"' || c === "'") && raw[i - 1] !== "\\") quote = quote === c ? null : (quote || c);
            if (c === "," && !quote) { out.push(this.parseValue(cur)); cur = ""; }
            else cur += c;
        }
        if (cur.trim()) out.push(this.parseValue(cur));
        return out;
    }
    parseLists() {
        const re = /HAV\s+A\s+LIST\s+"([^"]+)"\s+LIKE\s+\[([\s\S]*?)\]\s*:/gi;
        let m;
        while ((m = re.exec(this.source))) this.lists.set(m[1], this.splitItems(m[2]));
    }
    list(name) { return [...(this.lists.get(name) || [])]; }
    takeItOut(name, id) {
        const a = this.lists.get(name);
        if (!a || id < 0 || id >= a.length) return "";
        const old = a[id];
        a[id] = "";
        return old;
    }
    pickRandom(from, to, without) {
        const pool = [];
        for (let i = Number(from); i <= Number(to); i++) if (i !== Number(without)) pool.push(i);
        return pool.length ? pool[Math.floor(Math.random() * pool.length)] : "";
    }
    evalRandom(expr) {
        const m = expr.match(/PICKARANDOM\s*\(\s*FROM\(([-\d]+)\)\s*TO\(([-\d]+)\)\s*W\/O\(([-\d]+)\)\s*\)/i);
        return m ? this.pickRandom(m[1], m[2], m[3]) : "";
    }
    compare(a, op, b) {
        if (op === "==") return Number(a === b);
        if (op === "!=") return Number(a !== b);
        if (op === ">") return Number(a > b);
        if (op === "<") return Number(a < b);
        if (op === ">=") return Number(a >= b);
        if (op === "<=") return Number(a <= b);
        return 0;
    }
}
async function loadCossert(path) {
    const source = await fetch(path).then(r => {
        if (!r.ok) throw new Error("Could not load " + path);
        return r.text();
    });
    return new CossertRuntime(source);
}
window.CossertRuntime = CossertRuntime;
window.loadCossert = loadCossert;
