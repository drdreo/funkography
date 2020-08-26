<template>
  <div class="container">
    <Navbar/>

    <div class="photos-container">
      <figure ref="photo" class="photo offscreen" v-for="photo in photos">
        <img v-img:v="photo" :src="photo.thumbnail"/>
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

const observerOptions = {
  threshold: 0.25
};

export default {
  data() {
    return {
      observer: null,
      photos: [
        {
          src: photo1,
          thumbnail: photo1,
          title: "Title1",
          group: "all"
        },
        {
          src: photo2,
          title: "Title2",
          thumbnail: photo2,
          group: "all"
        },
        {
          src: photo3,
          title: "Title3",
          thumbnail: photo3,
          group: "all"
        },
        {
          src: photo4,
          title: "Title4",
          thumbnail: photo4,
          group: "all"
        },
        {
          src: photo5,
          title: "Title1",
          thumbnail: photo5,
          group: "all"
        },
        {
          src: photo6,
          title: "Title1",
          thumbnail: photo6,
          group: "all"
        },
        {
          src: photo7,
          title: "Title1",
          thumbnail: photo7,
          group: "all"
        },
        {
          src: photo8,
          title: "Title1",
          thumbnail: photo8,
          group: "all"
        },
        {
          src: photo9,
          title: "Title1",
          thumbnail: photo9,
          group: "all"
        },
        {
          src: photo10,
          title: "Title1",
          thumbnail: photo10,
          group: "all"
        },
        {
          src: photo11,
          title: "Title1",
          thumbnail: photo11,
          group: "all"
        },
        {
          src: photo12,
          title: "Title1",
          thumbnail: photo12,
          group: "all"
        }

      ]
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      for (let entry of entries) {
        if (entry.intersectionRatio > 0) {
          console.log("in the view");
          this.observer.unobserve(entry.target);
          entry.target.classList.remove("offscreen");
        } else {
          console.log("out of view");
        }
      }
    }, observerOptions);

    this.$refs.photo.forEach(img => {
      this.observer.observe(img);
    });
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    flex: 1 0 100%;
    width: 100%;

    @include tablet {
      max-height: 300px;
      flex: 1 0 29%;
    }

    &.offscreen {
      img {
        transform: translateY(300px) translateZ(0);
        opacity: 0;
      }
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transform: scale(1);
      transition: transform .3s ease-out, opacity 1s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

}
</style>
