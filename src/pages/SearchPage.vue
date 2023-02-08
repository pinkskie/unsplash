<template>
  <div class="search">
    <input placeholder="Поиск" v-model="searchText" />
  </div>
  <div class="images container">
    <router-link
      :to="`/details/${image.id}`"
      v-for="image in images"
      :key="image.id"
    >
      <img :src="image.urls.regular" :alt="image.id" />
    </router-link>
  </div>
</template>

<script>
import { api } from "@/api/api";

export default {
  name: "SearchPage",
  data() {
    return {
      searchText: "",
      loading: false,
      images: [],
    };
  },

  watch: {
    async searchText() {
      try {
        this.loading = true;
        await api
          .get(`search/photos?query=${this.searchText}&per_page=8`)
          .then((res) => (this.images = res.data.results));
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.search {
  background-image: url("../assets/background.png");
  display: flex;
  justify-content: center;
  align-content: center;
  height: 230px;
  position: relative;
}
.search input {
  position: absolute;
  top: calc(230px / 2 - 1.5rem);
  width: 50rem;
  height: 3rem;
  padding: 0 1rem;
  font-family: inherit;
  border: none;
  border-radius: 2px;
}

.search input::placeholder {
  font-family: "Roboto", sans-serif;
}

@media screen and (max-width: 762px) {
  .search input {
    width: 90%;
  }
}
</style>
