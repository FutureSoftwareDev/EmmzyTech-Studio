document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    if(a.getAttribute('href').startsWith('#')){
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
    }
  })
})
