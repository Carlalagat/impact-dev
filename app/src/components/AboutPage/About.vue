<template>
  <div class="about-us-page">
    <!-- A. Hero Section -->
    <section id="about-hero" class="about-hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1 class="hero-headline fade-in-section">
          Empowering Africa’s Innovators.<br />Building Kingdom-driven Impact.
        </h1>
        <p class="hero-subtext fade-in-section">
          Impact360 Africa is not just an events organizer; we are builders of
          ecosystems. Our hybrid events combine the energy of in-person
          gatherings with the inclusivity of virtual participation, enabling
          innovators from every corner of Africa to engage and contribute.
          Through workshops, showcases, and networking opportunities, we bring
          together entrepreneurs, technologists, investors, and thought leaders
          to spark transformation..
        </p>
      </div>
    </section>

    <!-- B. Mission, Vision & Story -->
    <section id="mission" class="mission-section section-padding">
      <div class="container grid-layout">
        <div class="text-content fade-in-section">
          <h2>Our Mission & Vision</h2>
          <p class="mission-text">
            <strong>Mission:</strong> Our mission is to host transformative
            events that bring together Africa’s brightest minds to share
            insights, solve challenges, and scale solutions. We strive to
            empower both established and emerging innovators through mentorship,
            funding opportunities, and actionable knowledge.
          </p>
          <p class="vision-text">
            <strong>Vision:</strong> Our vision is to become Africa’s premier
            events platform for showcasing innovation and enabling
            cross-regional collaboration. We aim to connect capital cities and
            regional towns to build a united ecosystem where entrepreneurial and
            technological talent flourishes, fueling the continent’s ascent on
            the global stage.
          </p>
          <!-- <h3>Our Story</h3>
          <p>
            Impact360 began with a simple belief: that faith and innovation are
            not separate worlds, but two sides of the same coin. From a small
            gathering of dreamers in 2018, we have grown into a continental
            movement, launching startups, training leaders, and fostering a
            community dedicated to building a better future, together.
          </p> -->
        </div>
        <div class="image-content fade-in-section">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2071"
            alt="Team collaborating at an event"
          />
        </div>
      </div>
    </section>

    <!-- C. Our Core Focus Areas -->
    <section class="values-section section-padding">
      <div class="container">
        <h2 class="section-title fade-in-section">Our Core Focus Areas</h2>
        <div class="values-grid">
          <div
            v-for="value in values"
            :key="value.title"
            class="value-card fade-in-section"
          >
            <div class="value-icon" v-html="value.icon"></div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- D. Our Approach -->
    <section class="approach-section section-padding">
      <div class="container">
        <h2 class="section-title fade-in-section">What Makes Us Different</h2>
        <div class="approach-steps">
          <div class="approach-step fade-in-section">
            <div class="step-number">1</div>
            <h3>Ignite Purpose</h3>
            <p>
              We start with the 'why', helping innovators identify their calling
              and build a strong faith foundation for their journey.
            </p>
          </div>
          <div class="approach-connector"></div>
          <div class="approach-step fade-in-section">
            <div class="step-number">2</div>
            <h3>Innovate Solutions</h3>
            <p>
              We provide the tools, mentorship, and ecosystem to build
              real-world tech ventures that solve tangible problems.
            </p>
          </div>
          <div class="approach-connector"></div>
          <div class="approach-step fade-in-section">
            <div class="step-number">3</div>
            <h3>Influence Culture</h3>
            <p>
              We deploy and scale ventures designed for community
              transformation, creating a ripple effect of positive change.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- E. Meet the Team -->
    <section class="team-section section-padding">
      <div class="container">
        <h2 class="section-title fade-in-section">Meet the Team</h2>
        <div class="team-grid">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="team-card fade-in-section"
          >
            <img :src="member.image" :alt="member.name" class="team-photo" />
            <h3>{{ member.name }}</h3>
            <p class="team-title">{{ member.title }}</p>
            <p class="team-desc">{{ member.desc }}</p>
          </div>
          <!-- Join Our Team Card -->
          <div class="team-card join-us-card fade-in-section">
            <h3>Join Our Team</h3>
            <p>
              Ready to make an impact? We're looking for passionate individuals
              to join our mission.
            </p>
            <a href="#" class="btn btn-secondary">View Openings</a>
          </div>
        </div>
      </div>
    </section>

    <!-- F. Our Impact in Numbers -->
    <section id="impact-stats" class="impact-section section-padding">
      <div class="container">
        <div class="impact-grid">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat-item fade-in-section"
          >
            <span class="stat-number"
              >{{ Math.floor(stat.currentValue) }}+</span
            >
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- G. Partner & Collaborators -->
    <section class="partners-section section-padding">
      <div class="container">
        <h2 class="section-title fade-in-section">
          Our Partners & Collaborators
        </h2>
        <div class="logos-grid">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="logo-item fade-in-section"
          >
            <img :src="partner.logo" :alt="partner.name" />
          </div>
        </div>
        <div class="partner-cta fade-in-section">
          <a href="#" class="btn btn-secondary">Partner With Us</a>
        </div>
      </div>
    </section>

    <!-- H. Final Call to Action -->
    <section class="final-cta-section">
      <div class="hero-overlay"></div>
      <div class="container cta-content">
        <h2 class="fade-in-section">Let’s Build Africa’s Future Together.</h2>
        <div class="cta-buttons fade-in-section">
          <a href="#" class="btn btn-primary">Partner with Us</a>
          <a href="#" class="btn btn-secondary">Join an i3 Program</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// C. Data for Core Values
const values = ref([
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75c-.622 0-1.125.504-1.125 1.125V18.75m9 0h-9" /></svg>`,
    title: "Entrepreneurship Development",
    text: "We pursue the highest standard in everything we do, honoring God with our work and effort.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`,
    title: "Technology Development",
    text: "Our faith is the compass that guides our mission, our decisions, and our relationships.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.056 15.056 0 01-4.5 0m3.75-2.354a15.056 15.056 0 014.5 0" /></svg>`,
    title: "Capital Cities and Regional Hubs",
    text: "We focus on creating sustainable solutions that address real-world needs and create lasting value.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.056 15.056 0 01-4.5 0m3.75-2.354a15.056 15.056 0 014.5 0" /></svg>`,
    title: "Event-Driven Ecosystem Building",
    text: "We focus on creating sustainable solutions that address real-world needs and create lasting value.",
  },
]);

// E. Data for Team Members
const teamMembers = ref([
  {
    name: " O Maxwell Gad",
    title: "Founder & CEO",
    desc: "Visionary leader bridging faith, tech, and sustainable development in Africa.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Carla Cheruto Lagat",
    title: "COO",
    desc: "Expert in curriculum design and startup acceleration for social impact.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Joy Charity",
    title: "CFO",
    desc: "Passionate about building ecosystems where innovators can thrive and connect.",
    image: "https://i.pravatar.cc/150?img=32",
  },
]);

// F. Data for Impact Stats
const stats = ref([
  { label: "Innovators Trained", targetValue: 500, currentValue: 0 },
  { label: "Transformative Events Hosted", targetValue: 20, currentValue: 8 },
  { label: "Strategic Partnerships", targetValue: 15, currentValue: 3 },
]);

// G. Data for Partners
const partners = ref([
  {
    name: "CKC Cares",
    logo: "https://via.placeholder.com/150x60/ffffff/cccccc?text=TechCorp",
  },
  {
    name: "Women In AI Africa",
    logo: "https://via.placeholder.com/150x60/ffffff/cccccc?text=UniInnovate",
  },
  {
    name: "Partner 3",
    logo: "https://via.placeholder.com/150x60/ffffff/cccccc?text=Faith+Foundation",
  },
  {
    name: "Partner 4",
    logo: "https://via.placeholder.com/150x60/ffffff/cccccc?text=Impact Ventures",
  },
  {
    name: "Partner 5",
    logo: "https://via.placeholder.com/150x60/ffffff/cccccc?text=Africa Rising",
  },
]);

// Animation Logic
let observer = null;
const countersStarted = ref(false);

const startCounters = () => {
  if (countersStarted.value) return;
  countersStarted.value = true;

  stats.value.forEach((stat) => {
    const duration = 2000; // 2 seconds
    const stepTime = 20; // update every 20ms
    const totalSteps = duration / stepTime;
    const increment = stat.targetValue / totalSteps;

    const timer = setInterval(() => {
      if (stat.currentValue < stat.targetValue) {
        stat.currentValue += increment;
      } else {
        stat.currentValue = stat.targetValue; // Ensure it ends exactly on the target
        clearInterval(timer);
      }
    }, stepTime);
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Trigger counters when the stats section is visible
          if (entry.target.id === "impact-stats") {
            startCounters();
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in-section").forEach((el) => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* --- 1. Global Setup & Design Tokens --- */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap");

:root {
  --color-primary: #00aeef;
  --color-secondary: #ffffff;
  --color-accent: #1a1a1a;
  --color-text: #f0f4f8;
  --color-text-darker: #aeb9c5;
  --color-background: #0f172a; /* A dark slate for the base */
}

.about-us-page {
  background-color: var(--color-background);
  color: white;
  font-family: "Poppins", sans-serif;
}

/* --- 2. Typography & Layout --- */
h1,
h2,
h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  /* color: white; */
}
.text-content.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: 0.2s;
  color: black;
}
.text-content.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.container {
  max-width: 1152px; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.approach-section {
  color: black;
}
.impact-section {
  color: black;
}
.partners-section {
  color: black;
}
.section-padding {
  padding-top: 4rem; /* py-16 */
  padding-bottom: 4rem; /* py-16 */
}
@media (min-width: 640px) {
  .section-padding {
    padding-top: 5rem; /* sm:py-20 */
    padding-bottom: 5rem; /* sm:py-20 */
  }
}

.section-title {
  text-align: center;
  font-size: 2.25rem; /* text-4xl */
  margin-bottom: 3rem;
  position: relative;
}
.section-title::after {
  content: "";
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--color-primary);
  border-radius: 2px;
}

p {
  line-height: 1.7;
  color: var(--color-text-darker);
  max-width: 65ch;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr 1fr;
  }
}

/* --- 3. Buttons --- */
.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-accent);
}
.btn-primary:hover {
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-3px);
}
.btn-secondary {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}
.btn-secondary:hover {
  background-color: var(--color-secondary);
  color: var(--color-accent);
  transform: translateY(-3px);
}

/* --- 4. Scroll Animation --- */
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: 0.2s;
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* --- 5. Section Specific Styling --- */

/* A. Hero Section */
.about-hero,
.final-cta-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70vh;
  padding: 4rem 0;
  background-image: url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(15, 23, 42, 0.9),
    rgba(0, 174, 239, 0.5)
  );
  z-index: 1;
}
.hero-content,
.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.hero-headline {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  line-height: 1.2;
}
.hero-subtext {
  font-size: 1.125rem;
  max-width: 60ch;
  color: var(--color-text);
  opacity: 0.9;
}

/* B. Mission, Vision & Story */
.mission-section .image-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
.mission-section h2 {
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
}
.mission-section h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}
.mission-text,
.vision-text {
  margin-bottom: 1rem;
}

/* C. Core Values */
.values-section {
  background-color: #162033;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.value-card {
  background-color: var(--color-background);
  padding: 2.5rem 2rem;
  border-radius: 8px;
  text-align: center;
  border-top: 4px solid transparent;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.value-card:hover {
  transform: translateY(-10px);
  border-top-color: var(--color-primary);
}
.value-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
}
.value-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

/* D. Our Approach */
.approach-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
@media (min-width: 768px) {
  .approach-steps {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}
.approach-step {
  text-align: center;
  max-width: 300px;
  position: relative;
}
.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1rem;
}
.approach-step h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.approach-connector {
  width: 4px;
  height: 50px;
  background-color: #334155;
  border-radius: 2px;
}
@media (min-width: 768px) {
  .approach-connector {
    width: 100px;
    height: 4px;
    margin-top: 25px;
  }
}

/* E. Meet the Team */
.team-section {
  background-color: #162033;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.team-card {
  text-align: center;
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.team-card:hover {
  transform: scale(1.05);
}
.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 4px solid var(--color-primary);
}
.team-card h3 {
  font-size: 1.25rem;
}
.team-title {
  color: var(--color-primary);
  font-weight: 600;
  margin: 0.25rem 0 0.5rem;
}
.team-desc {
  font-size: 0.875rem;
}
.join-us-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #334155;
  background: transparent;
}
.join-us-card:hover {
  border-color: var(--color-primary);
}
.join-us-card .btn {
  margin-top: 1rem;
}

/* F. Impact Section */
.impact-section {
  background: linear-gradient(to right, var(--color-primary), #007bb5);
}
.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}
.stat-item {
  display: flex;
  flex-direction: column;
}
.stat-number {
  font-size: 3.75rem; /* text-6xl */
  font-weight: 700;
  color: var(--color-secondary);
}
.stat-label {
  font-size: 1.125rem;
  color: var(--color-text);
  opacity: 0.9;
}

/* G. Partners Section */
.logos-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
.logo-item img {
  height: 40px;
  max-width: 150px;
  object-fit: contain;
  filter: brightness(0) invert(1) opacity(0.7);
  transition: filter 0.3s ease;
}
.logo-item:hover img {
  filter: brightness(0) invert(1) opacity(1);
}
.partner-cta {
  text-align: center;
  margin-top: 4rem;
}

/* H. Final CTA Section */
.final-cta-section {
  min-height: 50vh;
}
.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
.cta-content h2 {
  font-size: 2.5rem;
  max-width: 20ch;
}
</style>
