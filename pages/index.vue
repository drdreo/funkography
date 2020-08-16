<template>
  <div class="container">
    <Navbar/>

    <div class="photos-container">
      <figure class="photo" v-for="photo in photos">
        <img v-img:v="photo" src="https://via.placeholder.com/350" />
      </figure>
    </div>
  </div>
</template>

<script>
import * as photo1 from "~/assets/photos/7SA05051_2.jpg";
import * as photo2 from "~/assets/photos/A7S03354_2.jpg";
import * as photo3 from "~/assets/photos/A7304557_2.jpg";
import * as photo4 from "~/assets/photos/A7307431-Blend2.jpg";
import * as photo5 from "~/assets/photos/flame_raw.jpg";
import * as photo6 from "~/assets/photos/M31_2.jpg";
import * as photo7 from "~/assets/photos/M42_3.jpg";
import * as photo8 from "~/assets/photos/M45_2.jpg";
import * as photo9 from "~/assets/photos/M81_2.jpg";
import * as photo10 from "~/assets/photos/M101_2.jpg";
import * as photo11 from "~/assets/photos/NGC2024_2.jpg";
import * as photo12 from "~/assets/photos/original-2-Edit.jpg";

// https://minetta-demo-de.squarespace.com/?nochrome=true do like this

export default {
  data() {
    return {
      photos: [
        {
          src: photo1,
          title: "Title1",
          group: "all"
        },
        {
          src: photo2,
          title: "Title2",
          group: "all"
        },
        {
          src: photo3,
          title: "Title3",
          group: "all"
        },
        {
          src: photo4,
          title: "Title4",
          group: "all"
        },
        {
          src: photo5,
          title: "Title1",
          group: "all"
        },
        {
          src: photo6,
          title: "Title1",
          group: "all"
        },
        {
          src: photo7,
          title: "Title1",
          group: "all"
        },
        {
          src: photo8,
          title: "Title1",
          group: "all"
        },
        {
          src: photo9,
          title: "Title1",
          group: "all"
        },
        {
          src: photo10,
          title: "Title1",
          group: "all"
        },
        {
          src: photo11,
          title: "Title1",
          group: "all"
        },
        {
          src: photo12,
          title: "Title1",
          group: "all"
        }

      ]
    };
  }

};
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
  justify-content: center;


  .photo {
    margin: var(--spacing-xs);
    position: relative;
    max-height: 300px;

    max-width: 30%;
    width: 100%;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transform: scale(1);
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

}
</style>
