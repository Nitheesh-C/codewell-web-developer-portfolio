var menu=document.getElementById('menu');
var bar2=document.getElementById('b2');
var bar1=document.getElementById('b1');
var bar3=document.getElementById('b3');

var nav=document.getElementById('nav-menu');
let active = false;

menu.addEventListener('click', () => {
    if(!active){
      bar1.style = 'animation: mergeline1 .5s forwards;';
      bar2.style ='animation: disappear .5s forwards;';
      bar3.style = 'animation: mergeline3 .5s forwards;';
      
      openNav();
    }
    else {
      bar1.style = 'animation: mergeline1-rev .5s forwards;'
      bar2.style =' opacity: 0;animation: disappear-rev .5s .5s forwards;'
      bar3.style = 'animation: mergeline3-rev .5s forwards;'
      closeNav();

    }
    active = !active;
})
document.addEventListener('click', (ele) => {
    if(ele.target!=menu && ele.target!=bar1 && ele.target!=bar2 && ele.target!=bar3 && active==true){
        bar1.style = 'animation: mergeline1-rev .5s forwards;'
        bar2.style =' opacity: 0;animation: disappear-rev .5s .5s forwards;'
        bar3.style = 'animation: mergeline3-rev .5s forwards;'
        closeNav();
        active = !active;
      }
    
})
function openNav() {
   nav.style.width= "250px";
}
function closeNav() {
    nav.style.width = "0";
}