from pathlib import Path
root=Path(__file__).resolve().parents[1]
files=[p for p in root.rglob("*") if p.is_file()]
print("Cossert 0.2 Center files:",len(files))
