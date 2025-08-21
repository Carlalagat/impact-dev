<template>
  <div class="Header">
    <div class="HeaderLogo">
      <AdvancedImage :cldImg="image" class="custom-style" />
    </div>
    <div class="nav">
      <ul class="desktop-nav">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'events' }">Events</router-link></li>
        <li class="dropdown">
          <router-link :to="{ name: 'home' }">I3 Programs</router-link>
          <div class="dropdown-content">
            <router-link :to="{ name: 'i3launchpad' }">I3 LaunchPad</router-link>
            <router-link :to="{ name: 'i3kingdomhub' }">I3 KingdomHub</router-link>
          </div>
        </li>
        <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
        <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
      </ul>
      
      <!-- Mobile hamburger menu button -->
      <button class="hamburger-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span :class="['hamburger-line', { open: mobileMenuOpen }]"></span>
        <span :class="['hamburger-line', { open: mobileMenuOpen }]"></span>
        <span :class="['hamburger-line', { open: mobileMenuOpen }]"></span>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div :class="['mobile-menu', { 'mobile-menu--open': mobileMenuOpen }]">
      <ul>
        <li><router-link :to="{ name: 'home' }" @click="closeMobileMenu">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }" @click="closeMobileMenu">About</router-link></li>
        <li><router-link :to="{ name: 'events' }" @click="closeMobileMenu">Events</router-link></li>
        <li><router-link :to="{ name: 'home' }" @click="closeMobileMenu">I3 Programs</router-link></li>
        <li class="mobile-sub-item">
          <router-link :to="{ name: 'i3launchpad' }" @click="closeMobileMenu">I3 LaunchPad</router-link>
        </li>
        <li class="mobile-sub-item">
          <router-link :to="{ name: 'i3kingdomhub' }" @click="closeMobileMenu">I3 KingdomHub</router-link>
        </li>
        <li><router-link :to="{ name: 'blog' }" @click="closeMobileMenu">Blog</router-link></li>
        <li><router-link :to="{ name: 'contact' }" @click="closeMobileMenu">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue';
import { AdvancedImage } from '@cloudinary/vue';
import { fill } from '@cloudinary/url-gen/actions/resize';

const cld = inject('cloudinary');
const image = cld.image('logo_p5lufs').resize(fill().width(100).height(80));

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // Prevent scrolling when mobile menu is open
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto';
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};

const handleResize = () => {
  if (window.innerWidth > 768 && mobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleResize);
  document.body.style.overflow = 'auto';
});
</script>

<style scoped>
.Header {
  width:100%;
  font-family:'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 0px 160px;
  background-color:transparent;
  z-index: 1000;
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
}
.main-header.scrolled {
  background-color: rgba(10, 25, 47, 0.85); /* Dark, semi-transparent background on scroll */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.nav {
  position: relative;
}

.desktop-nav {
  display: flex;
  list-style: none;
  gap: 40px;
  vertical-align: middle;
  padding-top: 20px;
}
.desktop-nav li{
  font-weight: 500;
 color:white;
}
.desktop-nav li:hover {
  color: #1d4ed8;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 80%;
  transform: translateX(-50%);
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 10;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: #3960cd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Mobile hamburger menu styles */
.hamburger-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1000;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #333;
  transition: all 0.3s ease;
}

.hamburger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.open:nth-child(2) {
  opacity: 0;
}

.hamburger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile dropdown menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: white;
  overflow-y: auto;
  transition: height 0.3s ease;
  z-index: 999;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
}

.mobile-menu--open {
  height: 100vh;
  padding-top: 150px;
  padding-bottom: 50px;
}

.mobile-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.mobile-menu li {
  font-size: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu--open li {
  opacity: 1;
  transform: translateY(0);
}

.mobile-menu a {
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 500;
}

.mobile-sub-item a {
  font-size: 16px;
  color: #555;
  font-weight: 400;
  padding-left: 20px;
}

.mobile-sub-item {
  width: 100%;
  text-align: center;
}

/* Media queries for responsive design */
@media screen and (max-width: 768px) {
  .Header {
    padding: 0px 20px;
  }

  .desktop-nav {
    display: none !important;
  }

  .hamburger-toggle {
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  .mobile-menu {
    display: block;
  }
}
</style>