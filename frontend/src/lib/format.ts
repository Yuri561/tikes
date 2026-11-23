export const money=(amount:number,currency:'HTG'|'USD'='HTG')=>new Intl.NumberFormat('fr-HT',{maximumFractionDigits:0}).format(amount)+(currency==='HTG'?' G':' $');
export const fmtDate=(date:string)=>{const d=new Date(`${date}T12:00:00`);return new Intl.DateTimeFormat('fr-FR',{day:'2-digit',month:'short',year:'numeric'}).format(d)};
export const today=()=>new Date().toISOString().slice(0,10);
export const uid=()=>typeof crypto!=='undefined'&&'randomUUID'in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;
export const sum=(values:number[])=>values.reduce((a,b)=>a+b,0);
export const pct=(value:number,total:number)=>total>0?Math.round((value/total)*100):0;
export const downloadCSV=(name:string,rows:(string|number)[][])=>{const csv='\uFEFF'+rows.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)};
