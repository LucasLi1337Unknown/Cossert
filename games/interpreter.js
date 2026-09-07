
class CossertRuntime{
  constructor(source=""){this.source=source;this.lists=new Map();this.parseLists()}
  parseValue(raw){raw=raw.trim();if(/^[-+]?\d+(\.\d+)?$/.test(raw))return Number(raw);if((raw[0]==='"'&&raw.at(-1)==='"')||(raw[0]==="'"&&raw.at(-1)==="'"))return raw.slice(1,-1);return raw}
  splitItems(raw){let out=[],cur="",q=null,depth=0;for(let i=0;i<raw.length;i++){let c=raw[i];if((c==='"'||c==="'")&&raw[i-1]!=="\\")q=q===c?null:(q||c);if(!q&&(c==="["||c==="("))depth++;if(!q&&(c==="]"||c===")"))depth--;if(c===","&&!q&&depth===0){out.push(this.parseValue(cur));cur=""}else cur+=c}if(cur.trim())out.push(this.parseValue(cur));return out}
  parseLists(){let re=/HAV\s+A\s+LIST\s+"([^"]+)"\s+LIKE\s+\[([\s\S]*?)\]\s*:/gi,m;while((m=re.exec(this.source)))this.lists.set(m[1],this.splitItems(m[2]))}
  list(name){return [...(this.lists.get(name)||[])]}
  value(name,index=0,fallback=""){let a=this.lists.get(name);return a&&a[index]!==undefined?a[index]:fallback}
  takeItOut(name,id){let a=this.lists.get(name);if(!a||id<0||id>=a.length)return"";let old=a[id];a[id]="";return old}
  pickRandom(from,to,without){let p=[];for(let i=Number(from);i<=Number(to);i++)if(i!==Number(without))p.push(i);return p.length?p[Math.floor(Math.random()*p.length)]:""}
  randomFromList(name){let a=this.list(name).filter(x=>x!=="");return a.length?a[Math.floor(Math.random()*a.length)]:""}
  compare(a,op,b){return Number(op==="=="?a===b:op==="!="?a!==b:op===">"?a>b:op==="<"?a<b:op===">="?a>=b:op==="<="?a<=b:false)}
}
async function loadCossert(path){let r=await fetch(path);if(!r.ok)throw Error("Could not load "+path);return new CossertRuntime(await r.text())}
window.CossertRuntime=CossertRuntime;window.loadCossert=loadCossert;
