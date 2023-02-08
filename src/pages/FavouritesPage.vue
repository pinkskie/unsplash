<template>
  <div class="favourites">
    <h1 class="title">Избранное</h1>
    <div class="images container">
      <img
        v-for="favourite in favourites"
        :key="favourite.id"
        :src="favourite.url"
      />
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "FavouritesPage",
  data() {
    return {
      favourites: [],
    };
  },
  created() {
    this.favourites = JSON.parse(localStorage.getItem("favourites"));
  },
  methods: {},
};
</script>

<style>
.title {
  text-align: center;
  margin-top: 3rem;
}
</style>
