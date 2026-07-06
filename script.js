document.querySelectorAll('.num').forEach(el=>{
 const target=+el.dataset.target;
 let n=0;
 const timer=setInterval(()=>{
   n++;
   el.textContent=n;
   if(n>=target) clearInterval(timer);
 },30);
});
