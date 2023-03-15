<script setup>
import { onMounted, ref } from 'vue';
 
onMounted(()=> {
  const menuToggle = document.getElementById('menu-toggle')
  menuToggle.onclick = function () {
    document.querySelector('.header').setAttribute('aria-expanded', 'true')
  }
  const closeMenu = document.getElementById('close-menu')
  closeMenu.onclick = function () {
    document.querySelector('.header').setAttribute('aria-expanded', 'false')
  }
})
</script>

<template>
  <header aria-expanded="false" class="header">
    <div class="-md:hidden uppercase text-white border-b-[0.5px] border-solid border-[rgba(250,250,250,0.5)]">
      <p class="ml-20 py-3">
        au/nz/ck
      </p>
    </div>
   <div class="container-header">
      <div class="logo" onclick="">
       <img src="./assets/images/LogoMakr-9Lsmc8.png" alt="">
      </div>
      <nav id="primary-nav" class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/buy-container">Buy Container</router-link>
        <router-link to="/careers">Careers</router-link>
        <router-link to="/contact-us">Contact Us</router-link>
        <router-link to="/about-us">About</router-link>
      </nav>
      <button class="get_quote uppercase border-0 py-3 px-8 hover:bg-accent-light bg-accent rounded-md text-white">
            get a quote
        </button>
        <button id="menu-toggle" ref="menuToggle" aria-controls="primary-nav" class="menu-open hover:bg-accent-light bg-accent relative text-white w-10 h-10 border-0">
          
          <span class="flex items-center justify-center absolute inset-0 w-full h-full">
            <i class="fas fa-bars text-2xl"></i>
          </span>
        </button>
        <span id="close-menu" aria-controls="primary-nav" class="close-icon">
            <i class="fas fa-xmark text-2xl"></i>
          </span>
    </div>
  </header>
  <router-view />
  <footer class="bg-dark-blue text-white py-8">
    <div class="w-[90vw] mx-auto flex gap-4 -md:flex-col pb-12">
      <div class="flex-1">
        <h3 class="capitalize text-3xl text-accent mb-8 pb-4">about us</h3>
        <p class="mb-8">
          With over 20 years of solidarity, we’ve been supplying containers to all AU/NZ/CK and we don’t plan on stopping anytime soon
        </p>
        <div class="flex gap-3">
          <span>
            <i class="fa-brands fa-facebook text-accent"></i>
          </span>
          <span>
            <i class="fa-brands fa-twitter text-accent"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram text-accent"></i>
          </span>
          <span>
            <i class="fa-brands fa-linkedin text-accent"></i>
          </span>
        </div>
      </div >
      <div class=" flex flex-col flex-1">
        <h3 class="capitalize text-3xl text-accent mb-8 pb-4">quick links</h3>
        <a href="" class="decoration-none hover:text-accent mb-3"> Buy a Container</a>
        <a href="" class="decoration-none hover:text-accent mb-3"> About</a>
        <a href="" class="decoration-none hover:text-accent mb-3">Contact Us</a>
        <a href="" class="decoration-none hover:text-accent mb-3">Ccareers</a>
      </div>
      <div class=" flex flex-col flex-1">
        <h3 class="capitalize text-3xl text-accent mb-8 pb-4">top pages</h3>
        <a href="" class="decoration-none hover:text-accent mb-3"> Buy a Container</a>
        <a href="" class="decoration-none hover:text-accent mb-3"> About</a>
        <a href="" class="decoration-none hover:text-accent mb-3">Contact Us</a>
        <a href="" class="decoration-none hover:text-accent mb-3">Ccareers</a>
      </div>
      <div class="flex-1">
        <h3 class="capitalize text-3xl text-accent mb-8 pb-4">free quote</h3>
        <p>Email us for a quote: </p>
        <p>info@agmcontainers.con</p>
      </div>
    </div>
    <hr class="w-full h-1 text-gray-100">
    <p class="md:ml-32 ml-12 pt-8">Copyright © 2023 AGM Containers</p>
  </footer>
</template>

<style scoped>
body {
  overflow-x: hidden;
}
.header {
  height: 100px;
  z-index: 90;
  background-color: transparent;
  position: relative;
}
/* .bg-primary {
  background-color: var(--clr-primary);
} */
.container-header {
  height: inherit;
  max-width: 1000px;
  padding-inline: 1rem;
  padding-right: 1.5rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  padding: 0 10px;
  width: 150px;
  cursor: pointer;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}


.nav a {
  color: white;
  font-size: medium;
  margin-left: 10px;
  text-decoration: none;
}
.nav a:hover {
  border-bottom: 1px solid white;
}
@media (min-width: 760px) {
  .menu-open {
    display: none;
  }
  .close-icon {
    display: none;
  }
}

@media (max-width: 760px) {
  .nav  {
  position: fixed;
  z-index: 100;
  background-color: rgb(238, 237, 237);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
 padding-top: 4rem;
  inset: 0 20% 0 0;
  z-index: 10;
  transition: tranform 100ms ease-in;
}

.get_quote {
  position: fixed;
  left: 3rem;
  bottom: 30%;
  z-index: 200;
  transition: tranform 100ms ease-in;
}
.nav a {

  text-align: center;
  padding-block: 1rem;
  color: #131d3b;
  font-size: medium;
  width: 90%;
  border-top: solid 1px #131d3b;
}
.nav a:last-child {
  border-bottom: solid 1px #131d3b;
}
.nav a:hover {
  color: #cb4154;
}
.nav a:active {
color: #de4f62;
}
.close-icon {
  position: fixed;
  top: 1rem;
  left: 70%;
  z-index: 200;
  cursor: pointer;
}
.header[aria-expanded="false"] #close-menu {
  display: none;
}
.header[aria-expanded="false"] #menu-toggle{
  display: block;
}
.header[aria-expanded="false"] .nav{
  transform: translateX(-200%);
}
.header[aria-expanded="false"] .get_quote{
  transform: translateX(-200%);
}
.header[aria-expanded="true"] .get_quote{
  transform: translateX(0);
}
.header[aria-expanded="true"] #close-menu {
  display: block;
}
.header[aria-expanded="true"] .nav{
  transform: translateX(0);
}
.header[aria-expanded="true"] #menu-toggle{
  display: none;
}
}

</style>
