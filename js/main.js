const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min(i*.05,.3)+'s';io.observe(el);});
(function(){
  var saved=null; try{saved=localStorage.getItem('lang')}catch(e){}
  if(saved==='ko'){document.body.classList.add('ko');document.documentElement.lang='ko';}
  var lt=document.querySelector('.lang-toggle');
  if(lt){
    lt.textContent=document.body.classList.contains('ko')?'EN':'KO';
    lt.addEventListener('click',function(){
      var ko=document.body.classList.toggle('ko');
      lt.textContent=ko?'EN':'KO';
      document.documentElement.lang=ko?'ko':'en';
      try{localStorage.setItem('lang',ko?'ko':'en')}catch(e){}
    });
  }
})();
