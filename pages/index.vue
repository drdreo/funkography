<template>
  <div class="container">
    <Navbar/>

    <div class="photos-container">
      <figure class="photo" v-for="photo in photos">
        <i style="padding-bottom:150%"></i>
        <img :src="photo"/>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// https://minetta-demo-de.squarespace.com/?nochrome=true do like this
export default Vue.extend({
  data() {
    return {
      photos: [
        'https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg',
        'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F765877054%2F960x0.jpg%3Ffit%3Dscale',
        'https://scitechdaily.com/images/Illustration-Photons-Galaxy.jpg',
        'https://specials-images.forbesimg.com/imageserve/1176555906/960x0.jpg?fit=scale',
        'https://orsted.com/-/media/WWW/Images/Corp/Campaign/SpaceSafari/space-safari-background.png',
        'https://spacenews.com/wp-content/uploads/2018/05/24359364107_152b0152ff_k.jpg',
        'https://scx2.b-cdn.net/gfx/news/hires/2019/4-space.jpg',
      ],
    };
  },

});
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  padding-top: var(--spacing-xl);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: black;
  color: white;
}

.photos-container {
  padding: var(--spacing-md);
  display: flex;
  flex-wrap: wrap;


  &::after {
    content: '';
    flex-grow: 999999999;
  }

  .photo {
    margin: 2px;
    background-color: violet;
    position: relative;

    i {
      display: block;
    }

    img {
      position: absolute;
      top: 0;
      width: 100%;
      vertical-align: bottom;
    }
  }

}
</style>
