const reveal=()=>document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight-70)el.classList.add('show')});
addEventListener('scroll',reveal,{passive:true});addEventListener('load',reveal);
const menu=document.querySelector('.menu'),nav=document.querySelector('.topbar nav');
if(menu&&nav)menu.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');menu.setAttribute('aria-expanded',open?'true':'false')});
