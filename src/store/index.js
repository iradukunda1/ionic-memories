import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image_url:
            "https://images.unsplash.com/photo-1614845372050-3f6a1c94293c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80",
          title: "Good evening",
          description: "A trip to Mount",
        },
        {
          id: "m2",
          image_url:
            "https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
          title: "Good Morning",
          description: "A trip to Lake",
        },
        {
          id: "m3",
          image_url:
            "https://media.istockphoto.com/photos/platter-of-fresh-organic-raw-oysters-on-ice-at-restaurant-oysters-on-picture-id1325000182?b=1&k=6&m=1325000182&s=170667a&w=0&h=bVEiSJeBUZcmgO3R8Jzzp1olMfJElJU_HMuGhBf9WZs=",
          title: "Good After noon",
          description: "A trip to Resto",
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image_url: memoryData.image_url,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});
export default store;
