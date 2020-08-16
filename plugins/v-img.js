import Vue from "vue";
import VueImg from "v-img";

const vueImgConfig = {
    altAsTitle: false,
    // Show thumbnails for all groups with more than 1 image
    thumbnails: true,
    sourceButton: true
};
Vue.use(VueImg, vueImgConfig);
