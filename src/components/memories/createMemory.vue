<template>
  <base-layout
    page-title="Create New Memory"
    page-default-back-link="/memories"
  >
    <form class="ion-padding ion-margin-top" @submit.prevent="saveMemory">
      <ion-list class="ion-margin-top">
        <ion-item>
          <ion-label position="floating">Title</ion-label>
          <ion-input type="text" required v-model="memory.title" />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image Url</ion-label>
          <ion-input type="url" required v-model="memory.image_url" />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea rows="5" v-model="memory.description"></ion-textarea>
        </ion-item>
        <ion-button type="submit" expand="block" class="ion-margin-vertical ion-padding-horizontal">Save</ion-button>
      </ion-list>
    </form>
  </base-layout>
</template>

<script>
import {
  IonList,
  IonButton,
  IonInput,
  IonTextarea,
  IonItem,
  IonLabel,
} from "@ionic/vue";
export default {
  components: {
    IonList,
    IonInput,
    IonTextarea,
    IonItem,
    IonLabel,
    IonButton,
  },
  data() {
    return {
      memory: {},
    };
  },
  methods: {
    saveMemory() {
      this.$store.dispatch("addMemory", this.memory);
      this.$router.replace("/memories");
    },
  },
};
</script>

<style></style>
