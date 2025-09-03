<template>
 <footer class="footer">
   <div class="footer-container">
     <div class="footer-grid">
       <!-- Brand Section -->
       <div class="footer-brand">
         <AdvancedImage :cldImg="image" class="footer-logo" />
         <p class="footer-description">
           Empowering communities in Africa through accessible tech education and entrepreneurship opportunities. Join us in building a more inclusive future.
         </p>
       </div>

       <!-- Navigation Links -->
       <div class="footer-section">
         <h3 class="footer-title">Quick Links</h3>
         <ul class="footer-links">
           <li><router-link :to="{ name: 'home' }" class="footer-link">Home</router-link></li>
           <li><router-link :to="{ name: 'about' }" class="footer-link">About</router-link></li>
           <li><router-link :to="{ name: 'events' }" class="footer-link">Events</router-link></li>
           <li><router-link :to="{ name: 'i3launchpad' }" class="footer-link">I3 Programs</router-link></li>
           <li><router-link :to="{ name: 'blog' }" class="footer-link">Blog</router-link></li>
           <li><router-link :to="{ name: 'contact' }" class="footer-link">Contact</router-link></li>
         </ul>
       </div>

       <!-- Contact Information -->
       <div class="footer-section">
         <h3 class="footer-title">Contact Info</h3>
         <div class="contact-info">
           <div class="contact-item">
             <span class="contact-icon">📍</span>
             <p>Nakuru County, Kenya</p>
           </div>
           <div class="contact-item">
             <span class="contact-icon">✉️</span>
             <a href="mailto:impact360.i3@gmail.com" class="contact-link">impact360.i3@gmail.com</a>
           </div>
           <div class="contact-item">
             <span class="contact-icon">📞</span>
             <a href="tel:+254113569079" class="contact-link">+254 113 569 079</a>
           </div>
         </div>
       </div>

       <!-- Social Media -->
       <div class="footer-section">
         <h3 class="footer-title">Follow Us</h3>
         <div class="social-links">
           <a href="https://www.linkedin.com/company/impact360%E2%80%A2/" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
              <AdvancedImage :cldImg="linkedIn" class="custom-style" />
           </a>
           <a href="https://www.instagram.com/impac_t360/?hl=en" target="_blank" rel="noopener noreferrer" class="social-link instagram">
             <AdvancedImage :cldImg="instagram" class="custom-style" />
           </a>
           <a href="https://www.tiktok.com/@impact360_" target="_blank" rel="noopener noreferrer" class="social-link tiktok">
             <AdvancedImage :cldImg="tiktok" class="tiktok-logo" />
           </a>
         </div>
         <div class="newsletter">
           <p class="newsletter-text">Stay updated with our latest news</p>
           <div class="newsletter-form">
             <input type="email" placeholder="Enter your email" class="newsletter-input">
             <button class="newsletter-btn">Subscribe</button>
           </div>
         </div>
       </div>
     </div>

     <!-- Footer Bottom -->
     <div class="footer-bottom">
       <div class="footer-bottom-content">
         <p class="copyright">
           &copy; {{ currentYear }} Impact360. All rights reserved.
         </p>
         <div class="footer-bottom-links">
           <a href="#" class="footer-bottom-link">Privacy Policy</a>
           <a href="#" class="footer-bottom-link">Terms of Service</a>
           <a href="#" class="footer-bottom-link">Cookie Policy</a>
         </div>
       </div>
     </div>
   </div>
 </footer>
</template>

<script setup>
import { inject, ref, computed } from 'vue';
import { AdvancedImage } from '@cloudinary/vue';
import { fill } from '@cloudinary/url-gen/actions/resize';

const cld = inject('cloudinary');
const image = cld.image('logo_p5lufs').resize(fill().width(120).height(96));
const linkedIn = cld.image('113a74c6-5efa-47be-a20a-785ceea1959e').resize(fill().width(120).height(96));
const instagram = cld.image('755d613a-5c4e-4b03-b1c1-5ce16efc9f9a').resize(fill().width(120).height(96));
const tiktok = cld.image('1f545f31-bdb2-4ae0-a181-5e5635bbc33f').resize(fill().width(120).height(120));
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
 font-family: 'Roboto', sans-serif;
 background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
 color: #ffffff;
 margin-top: auto;
}

.footer-container {
 max-width: 1200px;
 margin: 0 auto;
 padding: 0 2rem;
}

.footer-grid {
 display: grid;
 grid-template-columns: 2fr 1fr 1fr 1.5fr;
 gap: 3rem;
 padding: 4rem 0;
}

/* Brand Section */
.footer-brand {
 max-width: 350px;
}

.footer-logo {
 width: 120px;
 height: 96px;
 margin-bottom: 1rem;
 border-radius: 8px;
}

.footer-description {
 color: #cccccc;
 line-height: 1.6;
 font-size: 0.95rem;
 margin: 0;
}

/* Section Titles */
.footer-title {
 font-size: 1.1rem;
 font-weight: 600;
 margin-bottom: 1.5rem;
 color: #ffffff;
 position: relative;
}

.footer-title::after {
 content: '';
 position: absolute;
 left: 0;
 bottom: -8px;
 width: 30px;
 height: 2px;
 background: linear-gradient(90deg, #3b54c6, #6366f1);
 border-radius: 2px;
}

/* Footer Links */
.footer-links {
 list-style: none;
 padding: 0;
 margin: 0;
}

.footer-links li {
 margin-bottom: 0.75rem;
}

.footer-link {
 color: #cccccc;
 text-decoration: none;
 font-size: 0.9rem;
 transition: all 0.3s ease;
 display: inline-block;
}

.footer-link:hover {
 color: #3b54c6;
 transform: translateX(4px);
}

/* Contact Information */
.contact-info {
 display: flex;
 flex-direction: column;
 gap: 1rem;
}

.contact-item {
 display: flex;
 align-items: flex-start;
 gap: 0.75rem;
}

.contact-icon {
 font-size: 1rem;
 margin-top: 0.1rem;
 opacity: 0.8;
}

.contact-item p,
.contact-link {
 margin: 0;
 color: #cccccc;
 font-size: 0.9rem;
 line-height: 1.4;
}

.contact-link {
 text-decoration: none;
 transition: color 0.3s ease;
}

.contact-link:hover {
 color: #3b54c6;
}

/* Social Media */
.social-links {
 display: flex;
 gap: 1rem;
 margin-bottom: 2rem;
}

.social-link {
 display: flex;
 align-items: center;
 justify-content: center;
 width: 44px;
 height: 44px;
 border-radius: 50%;
 color: #ffffff;
 font-size: 1.2rem;
 transition: all 0.3s ease;
 text-decoration: none;
}

.social-link.linkedin {
 background: linear-gradient(135deg, #0077b5, #0a66c2);
}

.social-link.instagram {
 background: linear-gradient(135deg, #e4405f, #833ab4, #f77737);
}

.social-link.tiktok {
 /* background: linear-gradient(135deg,#ffffff ,  #ffffff); */
}
.tiktok-logo {
  border-radius: 20px;
}

.social-link:hover {
 transform: translateY(-3px);
 box-shadow: 0 8px 20px rgba(59, 84, 198, 0.3);
}

/* Newsletter */
.newsletter-text {
 color: #cccccc;
 font-size: 0.9rem;
 margin-bottom: 1rem;
}

.newsletter-form {
 display: flex;
 gap: 0.5rem;
 margin-bottom: 1rem;
}

.newsletter-input {
 flex: 1;
 padding: 0.75rem;
 border: 1px solid #444;
 border-radius: 6px;
 background: rgba(255, 255, 255, 0.05);
 color: #ffffff;
 font-size: 0.9rem;
 transition: border-color 0.3s ease;
}

.newsletter-input::placeholder {
 color: #888;
}

.newsletter-input:focus {
 outline: none;
 border-color: #3b54c6;
}

.newsletter-btn {
 padding: 0.75rem 1.2rem;
 background: linear-gradient(135deg, #3b54c6, #6366f1);
 border: none;
 border-radius: 6px;
 color: #ffffff;
 font-weight: 600;
 font-size: 0.9rem;
 cursor: pointer;
 transition: all 0.3s ease;
}

.newsletter-btn:hover {
 background: linear-gradient(135deg, #2940a3, #4f46e5);
 transform: translateY(-1px);
}

/* Footer Bottom */
.footer-bottom {
 border-top: 1px solid #404040;
 padding: 2rem 0;
}

.footer-bottom-content {
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-wrap: wrap;
 gap: 1rem;
}

.copyright {
 color: #888;
 font-size: 0.85rem;
 margin: 0;
}

.footer-bottom-links {
 display: flex;
 gap: 2rem;
}

.footer-bottom-link {
 color: #888;
 text-decoration: none;
 font-size: 0.85rem;
 transition: color 0.3s ease;
}

.footer-bottom-link:hover {
 color: #3b54c6;
}

/* Responsive Design */
@media (max-width: 1024px) {
 .footer-container {
   padding: 0 1.5rem;
 }

 .footer-grid {
   grid-template-columns: 1fr 1fr;
   gap: 2.5rem;
   padding: 3rem 0;
 }
}

@media (max-width: 768px) {
 .footer-grid {
   grid-template-columns: 1fr;
   gap: 2rem;
   padding: 2.5rem 0;
 }

 .footer-brand {
   max-width: 100%;
   text-align: center;
 }

 .footer-section {
   text-align: center;
 }

 .footer-title::after {
   left: 50%;
   transform: translateX(-50%);
 }

 .contact-item {
   justify-content: center;
 }

 .social-links {
   justify-content: center;
 }
}
</style>