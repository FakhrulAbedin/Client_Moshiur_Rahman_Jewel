const toggle=document.getElementById('menu');
const links=document.getElementById('links');
function closeMenu(){links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();toggle.focus()}});
document.getElementById('year').textContent=new Date().getFullYear();
