<template>
  <!-- Use a transition for a smooth fade-in/out effect -->
  <transition name="fade">
    <!-- The main overlay, which also closes the popup when clicked -->
    <div v-if="show" class="popup-overlay" @click="$emit('close')">
      
      <!-- The content container. @click.stop prevents clicks inside from closing it -->
      <div class="popup-content" @click.stop>
        
        <!-- Close button (top right) -->
        <button class="close-btn" @click="$emit('close')">&times;</button>
        
        <!-- The main event image. Replace with your actual image path. -->
        <div class="popup-image-container">
         <AdvancedImage :cldImg="popUp" class="pop_up" />
          <!-- Laurel wreath decorations -->
          <div class="laurel-left">"THE FUTURE WITH AI"</div>
          <div class="laurel-right">"IMPACT360"</div>
        </div>

        <div class="popup-body">
          <!-- <h2 class="speaker-name">NAOMI MWELU KILUNGU <span class="speaker-title">- Speaker -</span></h2> -->
          <h1 class="event-title">
            <span>BEYOND NOW</span>
            THE FUTURE WITH AI
          </h1>

          <p class="event-description">
            Step into a world where artificial intelligence is no longer a distant dream but a present reality transforming every facet of human life. From reshaping industries to redefining creativity, from revolutionizing education to reimagining how we live and connect — AI is not just the next big thing, it's the now, and it's accelerating.
          </p>
          <div class="event-date">THIS OCTOBER 4TH</div>
        </div>

        <div class="popup-footer">
          <p class="footer-cta">Ready to join our community of innovators and thought leaders?</p>
          <div class="footer-buttons">
            <button class="btn-popup btn-join">Join this Event</button>
            <button class="btn-popup btn-follow">Follow @Impact360</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { inject, ref, onMounted, onUnmounted } from 'vue';
import { fill } from '@cloudinary/url-gen/actions/resize';

const cld = inject('cloudinary');
const popUp = cld.image('Beyond_now__20250810_210453_0000_doxn8f').resize(fill().width(700).height(300))
// This component accepts a `show` prop to control its visibility
// and emits a `close` event when the user wants to close it.
defineProps({
  show: {
    type: Boolean,
    required: true,
  }
});
defineEmits(['close']);
</script>

<style scoped>
/* Use the same Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;
}

.popup-content {
  font-family: 'Poppins', sans-serif;
  background-color: #0c1014; /* Dark background similar to the poster */
  color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 550px;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

/* Scrollbar styling for a modern look */
.popup-content::-webkit-scrollbar {
  width: 8px;
}
.popup-content::-webkit-scrollbar-track {
  background: #0c1014;
}
.popup-content::-webkit-scrollbar-thumb {
  background: #34B3F1;
  border-radius: 4px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s;
}
.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.popup-image-container {
  position: relative;
}

.popup-image {
  width: 100%;
  height: auto;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: block;
}
/* A simple pseudo-element to add the laurel wreath text */
.laurel-left, .laurel-right {
    position: absolute;
    top: 20px;
    background: rgba(0,0,0,0.4);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    border: 1px solid rgba(255,255,255,0.2);
}
.laurel-left { left: 20px; }
.laurel-right { right: 20px; }


.popup-body {
  padding: 1.5rem 2rem;
  text-align: center;
}

.speaker-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #a0c8e0;
  margin: 0 0 0.5rem;
}
.speaker-title {
  font-weight: 400;
  opacity: 0.8;
}

.event-title {
  font-size: clamp(2rem, 6vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 1rem;
  color: #FFFFFF;
}
.event-title span {
  display: block;
  font-size: 0.5em;
  font-weight: 600;
  color: #a0c8e0;
  letter-spacing: 2px;
}

.event-description {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0 auto 1.5rem;
  max-width: 90%;
}
.event-date {
    font-weight: 700;
    font-size: 1.2rem;
    color: #34B3F1;
    letter-spacing: 2px;
}


.popup-footer {
  background-color: #080b0e;
  padding: 1.5rem 2rem;
  text-align: center;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.footer-cta {
  margin: 0 0 1rem;
  font-weight: 600;
}

.footer-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-popup {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-join {
  background-color: #34B3F1;
  color: white;
}
.btn-join:hover {
  background-color: #2ca4e0;
  transform: translateY(-2px);
}

.btn-follow {
  background-color: transparent;
  color: #a0c8e0;
  border: 1px solid #a0c8e0;
}
.btn-follow:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: white;
  transform: translateY(-2px);
}

/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
    .popup-body, .popup-footer {
        padding: 1rem 1.5rem;
    }
    .footer-buttons {
        flex-direction: column;
    }
}
</style>