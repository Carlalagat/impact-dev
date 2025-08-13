<template>
  <section class="impact-hero">
    <!-- Decorative background blobs -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

   <AdvancedImage :cldImg="image" class="custom-style" />

    <main class="hero-main-content">
      <div class="title-container">
        <h1 class="title-impact">Impact</h1>
        <span class="title-360">360</span>
      </div>
      <h2 class="subtitle">
        Tech & Innovation <span class="subtitle-highlight">for All</span>
      </h2>
      <p class="description">
        Building Africa's Entrepreneurial Future Together through education, acceleration, and community. We decentralize access to world-class events, knowledge, and opportunities—bringing innovation to everyone, everywhere.
      </p>
      <div class="cta-buttons">
        <button class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          Start Your Journey
        </button>
        <button class="btn btn-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          View Events
        </button>
      </div>
    </main>

    <footer class="hero-footer">
      <div class="stats-container">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
      <div class="scroll-indicator">
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="white" stroke-width="2"/>
          <line x1="12" y1="8" x2="12" y2="14" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </footer>
    <EventPopup :show="showEventPopup" @close="closePopup" />
  </section>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue';
import { AdvancedImage } from '@cloudinary/vue';
import { fill } from '@cloudinary/url-gen/actions/resize';
import EventPopup from './EventPopup.vue'; 

const cld = inject('cloudinary');
const image = cld.image('logo_p5lufs').resize(fill().width(200).height(200));

const stats = ref([
  { value: '500+', label: 'Founders Trained' },
  { value: '45+', label: 'Startups Launched' },
  { value: '12+', label: 'Countries Reached' },
]);

// 1. Create a reactive variable to control the popup's visibility
const showEventPopup = ref(false); // Set to `false` initially

// 2. Create functions to open and close the popup
const openPopup = () => {
  showEventPopup.value = true;
};

const closePopup = () => {
  showEventPopup.value = false;
};
// Optional: Show the popup automatically after a delay when the page loads
onMounted(() => {
  setTimeout(() => {
    openPopup();
  }, 2000); // Show popup after 2 seconds
});
</script>

<style scoped>
/* You can add this to your global CSS or here if you don't have it already */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* --- Keyframe Animations --- */
@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes scroll-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* --- Main Hero Section --- */
.impact-hero {
  margin-top: -20px;
  font-family: 'Poppins', sans-serif;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #000000, #003366, #007BFF, #000000);
  background-size: 300% 300%;
  animation: gradient-animation 18s ease-in-out infinite;
}

/* --- Decorative Blobs --- */
.blob {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.07);
  filter: blur(50px);
  z-index: 0;
}
.blob1 { width: 350px; height: 350px; top: 10%; left: 10%; }
.blob2 { width: 250px; height: 250px; bottom: 20%; right: 15%; }
.blob3 { width: 200px; height: 200px; top: 40%; right: 40%; }


/* --- Header & Logo --- */
.hero-header {
  width: 100%;
  z-index: 1;
}

.logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
}

.logo-text {
  color: #333;
  font-weight: 600;
  font-size: 0.9rem;
}

/* --- Main Content --- */
.hero-main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 800px;
  z-index: 1;
}

.title-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -1rem; /* Overlap with subtitle */
}

.title-impact {
  font-size: clamp(4rem, 10vw, 7rem);
  font-weight: 700;
  line-height: 1;
  margin: 0;
  z-index: 2;
}

.title-360 {
  position: absolute;
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 700;
  color: white;
  opacity: 0.15;
  z-index: 1;
  line-height: 1;
}

.subtitle {
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
}

.subtitle-highlight {
  opacity: 0.8;
}

.description {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 650px;
  opacity: 0.9;
  margin: 0;
}

/* --- CTA Buttons --- */
.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #34B3F1;
  color: white;
}

.btn-primary:hover {
  background-color: #2ca4e0;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* --- Footer & Stats --- */
.hero-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.scroll-indicator {
  animation: scroll-bob 2.5s ease-in-out infinite;
}

/* --- Responsive Design --- */
@media (max-width: 768px) {
  .impact-hero {
    justify-content: center;
    gap: 3rem;
  }
  .hero-header {
    position: absolute;
    top: 1.5rem;
  }
  .hero-footer {
    position: relative;
    padding-bottom: 1rem;
  }
  .stats-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  .stat-value {
    font-size: 1.75rem;
  }
  .scroll-indicator {
    display: none; /* Often hidden on mobile for space */
  }
}
</style>