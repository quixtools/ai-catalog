const menuOpen = document.getElementById('demo-menuopen');
const menuClose = document.getElementById('demo-menuclose');
const bodyElement = document.getElementsByTagName('body')[0];

menuOpen.addEventListener('click', () => {
  bodyElement.classList.add('menu-active');
});
menuClose.addEventListener('click', () => {
  bodyElement.classList.remove('menu-active');
});