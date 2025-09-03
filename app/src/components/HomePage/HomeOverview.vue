<template>
  <section class="impact-overview py-20 px-6 md:px-12 bg-blue text-grey">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">About Impact360</h2>
      <p class="max-w-3xl mx-auto text-lg leading-relaxed text-black-200">
        Impact360 empowers <span class="font-semibold">young innovators, entrepreneurs, and leaders</span> to create meaningful change. 
        Through <span class="font-semibold">high-impact events, leadership programs, business incubation, and networking</span>, 
        we connect people, ideas, and opportunities to turn visions into reality.
      </p>
    </div>

    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
  <!-- Entrepreneurship & Innovation Programs -->
  <div class="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition text-center">
   <AdvancedImage :cldImg="i3launch" class="i3_launch rounded-xl" />
    <h3 class="text-2xl font-bold mb-3 mt-3">Entrepreneurship & Innovation Programs</h3>
    <p class="text-black-200 mb-4">We equip young innovators with the skills, mentorship, and resources to launch impactful ventures.</p>
    <a href="/i3launchpad" class="inline-block px-5 py-2 bg-[#00AEEF] text-white font-medium rounded-lg hover:bg-[#008ec7] transition">Learn More</a>
  </div>

  <!-- Events & Conferences -->
  <div class="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition text-center">
     <AdvancedImage :cldImg="i3events" class="i3_events rounded-xl" />
    <h3 class="text-2xl font-bold mb-3 mt-3">Events & Conferences</h3>
    <p class="text-black-200 mb-4">We host summits, workshops, and networking events that bring together thought leaders, startups, and changemakers.</p>
    <a href="/events" class="inline-block px-5 py-2 bg-[#00AEEF] text-white font-medium rounded-lg hover:bg-[#008ec7] transition">View Events</a>
  </div>

  <!-- Faith-Driven Programs -->
  <div class="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition text-center">
    <AdvancedImage :cldImg="i3kingdom" class="i3_kingdom rounded-xl" />
    <h3 class="text-2xl font-bold mb-3 mt-3">Faith-Driven Programs</h3>
    <p class="text-black-200 mb-4 pb-5 ">Through i3KingdomHub, we integrate faith, leadership, and innovation to inspire purpose-driven impact.</p>
    <a href="/i3kingdomhub" class="inline-block px-5 py-2 bg-[#00AEEF] text-white font-medium rounded-lg hover:bg-[#008ec7] transition">Join Us</a>
  </div>
</div>
    <!-- Call to Action -->
    <div class="text-center">
      <a 
        href="/about" 
        class="inline-block px-8 py-3 bg-[#00AEEF] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#003366] transition"
      >
        Learn More About Us
      </a>
    </div>
  </section>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue';
import { AdvancedImage } from '@cloudinary/vue';
import { fill } from '@cloudinary/url-gen/actions/resize';

const cld = inject('cloudinary');
const i3events = cld.image('Bg1_zwuil9').resize(fill().width(500).height(300));
const i3launch = cld.image('DSC_3902_1_fnxeol').resize(fill().width(500).height(300));
const i3kingdom = cld.image('Bg3_drmblh').resize(fill().width(500).height(300));
</script>
