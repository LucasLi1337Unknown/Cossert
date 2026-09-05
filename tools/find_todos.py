from pathlib import Path
root=Path(__file__).resolve().parents[1]
for p in root.rglob("*"):
    if p.is_file():
        try:t=p.read_text()
        except:continue
        if "0.2 TODO" in t: print(p.relative_to(root))
