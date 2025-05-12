const hamburgerMenu = document.querySelector('.hamburger');
const sidebar = document.querySelector('.info');
const backdrop = document.querySelector('.menu-scroll')
let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const closex = document.getElementById('close-x'); 
const closey = document.getElementById('close-y');
const remove = document.getElementById('remove');
const nav = document.querySelector('.info a')
const navbar = document.querySelector('.navbar');

hamburgerMenu.style.height = header.offsetHeight + 'px';

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;

  cursor.style.left = `${e.pageX - cursorWidth / 2}px`;
  cursor.style.top = `${e.pageY - cursorHeight / 2}px`;
});

function handleClick() {
  sidebar.classList.toggle('open');
  backdrop.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
  closex.classList.toggle('animation');
  closey.classList.toggle('animation');
  remove.classList.toggle('remove');
}

function handleClose() {
sidebar.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.classList.toggle('no-scroll');
  closex.classList.remove('animation');
  closey.classList.remove('animation');
  remove.classList.remove('remove');
}

hamburgerMenu.addEventListener('click', handleClick);
const navLinks = document.querySelectorAll('.info a');

navLinks.forEach(link => {
  link.addEventListener('click', handleClose);
});

window.addEventListener('scroll', () => {
  if(window.scrollY > lastScrollY) {
    header.classList.add('hide');
    hamburgerMenu.classList.add('hide');
  } else {
    header.classList.remove('hide');
    hamburgerMenu.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
})
