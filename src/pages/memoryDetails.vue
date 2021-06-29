<template>
  <base-layout
    :page-title="fetchedMemory ? fetchedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!fetchedMemory">The Memory doesn't found!</h2>
    <memory-over-view
      v-else
      :title="fetchedMemory.title"
      :description="fetchedMemory.description"
      :image_url="fetchedMemory.image_url"
      />
  </base-layout>
</template>

<script>
import memoryOverView from "../components/memories/memoryOverView.vue";
export default {
  components: {
    memoryOverView,
  },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    fetchedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>

<style></style>
