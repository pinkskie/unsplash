<template>
  <div class="navbar">
    <nav class="nav container">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </router-link>
      <ul class="nav-links">
        <li>
          <router-link to="/search" class="link"
            ><SearchIcon /><span class="link-text">Поиск</span></router-link
          >
        </li>
        <li>
          <router-link to="/favourites" class="link"
            ><FavouritesIcon /><span class="link-text"
              >Избранное</span
            ></router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import FavouritesIcon from "@/assets/icons/FavouritesIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";

export default {
  name: "Navbar-o",
  components: {
    FavouritesIcon,
    SearchIcon,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.navbar {
  background-color: black;
  padding: 1rem 0;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 3rem;
  font-size: 1.25rem;
}
.link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.2s ease;
}
.link:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 762px) {
  .navbar {
    padding: 1.5rem;
  }
  .logo {
    width: 7rem;
    height: 2.5rem;
  }
  .link-text {
    display: none;
  }
}
</style>
