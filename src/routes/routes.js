import { createRouter, createWebHistory } from "vue-router";
import FavouritesPage from "../pages/FavouritesPage";
import ImageDetailsPage from "../pages/ImageDetailsPage";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/favourites", component: FavouritesPage },
  { path: "/details/:id", component: ImageDetailsPage },
];

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
