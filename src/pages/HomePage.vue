<template>
  <p v-if="loading" class="loading"><LoadingBlack /></p>

  <div class="images container" v-else>
    <router-link
      v-for="image in images"
      :key="image.id"
      :to="`/details/${image.id}`"
    >
      <img :src="image.urls.regular" :alt="image.id" />
    </router-link>
  </div>
</template>

<script>
import { api } from "@/api/api";
import LoadingBlack from "../assets/icons/LoadingBlack.vue";

export default {
  name: "HomePage",
  data() {
    return {
      images: [],
      favourites: [],
      loading: false,
    };
  },
  components: {
    LoadingBlack,
  },
  methods: {
    addToFavourites(image) {
      this.favourites.push({ id: image.id, url: image.urls.full });
      localStorage.setItem("favourites", JSON.stringify(this.favourites));
    },
    async fetchImages() {
      try {
        this.loading = true;
        await api
          .get("photos?per_page=8")
          .then((res) => (this.images = res.data));
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.add-btn {
  border: none;
  background-color: black;
  padding: 1rem 2rem;
  color: white;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  letter-spacing: 0.64px;
}
.add-btn:hover {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>
