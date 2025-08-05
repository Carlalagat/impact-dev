<template>
    <div>
      <!-- <AdvancedImage :cldImg="image" class="custom-style" /> -->
      <h1>Hello World</h1>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { AdvancedImage } from '@cloudinary/vue';
import { fill } from '@cloudinary/url-gen/actions/resize';

const cld = inject('cloudinary');  // <-- Access the global Cloudinary instance
const image = cld.image('Bg1_zwuil9').resize(fill().width(250).height(250));
</script>

<style >
.custom-style {
  border-radius: 12px;
  width: 100%;
  height: auto;
}
</style>