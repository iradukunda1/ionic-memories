<template>
  <ion-img :src="image_url" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>

<script>
import { IonImg } from "@ionic/vue";
export default {
  props: ["title", "image_url", "description"],
  components: {
    IonImg,
  },
};
</script>

<style></style>
