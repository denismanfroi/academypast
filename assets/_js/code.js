// Calcula a largura de um elemento.
function width (width) {return width.innerWidth || width.clientWidth || document.documentElement.clientWidth;}
// Calcula a altura de um elemento.
function height (height) {return height.innerHeight || height.clientHeight || document.documentElement.clientHeight;}
// Recupera a distância do topo ao fazer scroll.
function scrollTopPosition (scrollTopPosition) {return scrollTopPosition.scrollTop || document.documentElement.scrollTop;}
// Recupera a distância de um elemento para o topo.
function distTop (distTop) {return distTop.offsetTop;}
// Recupera uma contagem X
function length (length) {return length.length;}
// Recupera uma nova data
function newDate () {return new Date();}
// Recupera um seletor
function selectorTarget (target) {return document.querySelector(target);}
// Recupera vários seletores
function selectorsTarget (target) {return document.querySelectorAll(target);}
// Set Local Storage
function setLocalStorage (key, value){return localStorage.setItem(key, value);}
// Get Local Storage
function getLocalStorage (key){return localStorage.getItem(key);}
// Remove Local Storage
function removeLocalStorage (key){return localStorage.removeItem(key);}
// Set Session Storage
function setSessionStorage (key, value){return sessionStorage.setItem(key, value);}
// Get Session Storage
function getSessionStorage (key){return sessionStorage.getItem(key);}
// Remove Session Storage
function removeSessionStorage (key){return sessionStorage.removeItem(key);}
// Remove All Session Storage
function removeAllSessionStorage (){return sessionStorage.clear();}
// Notification
function notifyMe(title, icon, body, link) {
  if (Notification.permission !== "granted")
      Notification.requestPermission();
  else {
    let notification = new Notification(title, {icon: icon, body: body,});
    notification.addEventListener('click', () => {window.open(link);});
  }
};
// Fechar com a tecla ESQ
function esqClose (target, classTarget = "close-default"){
  window.addEventListener('keypress', (event) => {
    let key = event.keyCode || event.which;
    if(key === 27) {target.classList.add(classTarget)}
  });
};
/*
	Função que recupera o ano atual
	Para funcionar basta aplicar a classe _current-year onde quiser
*/
(function currentYear (){
	let _currentYear = selectorsTarget("._current-year");
	for(let i = 0; i < length(_currentYear); i++){_currentYear[i].innerText = newDate().getFullYear();}
}());
// Main
(function mainDefault (){
  let burgAction, main, mask;

  burgAction = selectorTarget('.burg');
  main = selectorTarget('.main');
  mask = selectorTarget('.mask');

  burgAction.addEventListener('click', () => {
    main.classList.remove('_hide');
    mask.classList.remove('_hide');
  });

  mask.addEventListener('click', () => {
    main.classList.add('_hide');
    mask.classList.add('_hide');
  });
}());
// Banner Home
$('._banner-home').owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    autoplay: true,
    autoplaySpeed: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:450
})
// OWL
$('._itens-destaque').owlCarousel({
    loop: false,
    rewind: true,
    margin: 20,
    nav:false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})