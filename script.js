const lines=[
"> booting ANKITA.EXE...",
"> loading developer_profile...",
"> MCA :: SRM IST",
"> skills loaded: C++ / Python / SQL",
"> quests found: 3",
"> status: READY",
"",
"> type less. build more."
];
const el=document.getElementById("terminalText"); let i=0;
function typeLine(){if(i>=lines.length)return;let line=lines[i],j=0;const p=document.createElement("div");el.appendChild(p);
const timer=setInterval(()=>{p.textContent+=line[j++]||"";if(j>line.length){clearInterval(timer);i++;setTimeout(typeLine,120)}},22)}
setTimeout(typeLine,500);
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>window.scrollTo({behavior:"smooth"})));
