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
const redirect = document.querySelector('.redirec');
const headTr = document.getElementById('hl-ts');

// --- Text Transition Logic ---
const words = document.querySelectorAll('.word-container .word'); // Select words within the specific container
let currentIndex = 0;
const intervalTime = 3000; // 3 seconds for each word

function changeWord() {
  const currentWord = words[currentIndex];

  // 1. Current word leaves (moves up and fades out)
  currentWord.classList.add('leaving'); // Start the upward movement
  currentWord.classList.remove('active'); // Remove active status

  // Set a timeout to allow the 'leaving' animation to complete
  // before resetting the word and preparing the next one.
  // This delay should match your CSS transition duration (0.3s = 300ms)
  setTimeout(() => {
    // Reset the 'leaving' word to its starting position (below the container)
    currentWord.classList.remove('leaving');
    currentWord.style.transform = 'translateY(100%)'; // Visually move it back down
    currentWord.style.opacity = '0'; // Keep it invisible

    // 2. Determine the next word
    currentIndex = (currentIndex + 1) % words.length; // Loop back to the first word if at the end

    const nextWord = words[currentIndex];

    // 3. Next word enters (slides up and fades in)
    nextWord.style.transform = 'translateY(-100%)'; // Ensure it starts from its "entering" position relative to its height
    nextWord.style.opacity = '1'; // Make it visible
    nextWord.classList.add('active'); // Apply active class to trigger its entry animation

  }, 300); // This delay is crucial: wait for the CSS transition of the outgoing word
}

// Initialize the first word to be active when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (words.length > 0) {
        words[currentIndex].classList.add('active');
        words[currentIndex].style.transform = 'translateY(-100%)'; // Position it correctly
        words[currentIndex].style.opacity = '1'; // Make it visible
    }
    // Start the interval after the initial word is displayed
    setInterval(changeWord, intervalTime);
});
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

function redirec() {
  console.log('clicked');
}

redirect.addEventListener('click', redirec);

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

