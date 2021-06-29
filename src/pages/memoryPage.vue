<template>
  <base-layout page-title="All Memories List">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memory-list :memories="memories" />
  </base-layout>
</template>
<script>
import MemoryList from "../components/memories/memoriesList.vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  name: "Memory",
  components: {
    MemoryList,
    IonButton,
    IonIcon,
  },
  data() {
    return { add };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
