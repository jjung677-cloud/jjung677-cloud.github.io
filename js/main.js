const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min(i*.05,.3)+'s';io.observe(el);});
const _lt=document.querySelector('.lang-toggle');
if(_lt){_lt.addEventListener('click',function(){var ko=document.body.classList.toggle('ko');_lt.textContent=ko?'EN':'KO';document.documentElement.lang=ko?'ko':'en';});}
