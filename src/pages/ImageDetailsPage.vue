<template>
  <div class="details">
    <p v-if="loading" class="loading"><LoadingSpinner /></p>
    <div class="details-content" v-else>
      <div class="details-header container">
        <div class="details-user">
          <img
            :src="data.user.profile_image.medium"
            alt="user"
            class="user-image"
          />
          <div class="details-user-info">
            <span>{{ data.user.first_name }} {{ data.user.last_name }}</span>
            <span
              >@{{
                data.user.social.twitter_username ??
                data.user.social.instagram_username
              }}</span
            >
          </div>
        </div>
        <div class="details-buttons">
          <button class="favourites-btn" @click="addToFavourites(data)">
            <FavouritesIcon :isBlack="true" />
          </button>
          <button class="download-btn">
            <a :href="data.links.download" target="_blank">
              <DownloadIcon />
              <span class="btn-text"> Download </span>
            </a>
          </button>
        </div>
      </div>
      <div class="image container">
        <img :src="data.urls.full" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>
import FavouritesIcon from "@/assets/icons/FavouritesIcon.vue";
import DownloadIcon from "@/assets/icons/DownloadIcon.vue";
import LoadingSpinner from "../assets/icons/LoadingSpinner.vue";
import { api } from "@/api/api";

export default {
  name: "ImageDetailsPage",
  data() {
    return {
      data: {},
      loading: true,
      favourites: [],
    };
  },
  components: {
    FavouritesIcon,
    DownloadIcon,
    LoadingSpinner,
  },
  methods: {
    addToFavourites(image) {
      this.favourites.push({ id: image.id, url: image.urls.full });
      localStorage.setItem("favourites", JSON.stringify(this.favourites));
      alert("Добавлено в избранное");
    },
  },
  async created() {
    try {
      this.loading = true;
      await api
        .get(`photos/${this.$route.params.id}`)
        .then((res) => (this.data = res.data));
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.loading {
  font-size: 5rem;
  color: white;
  text-align: center;
  padding-top: 3rem;
}
.details {
  background-image: url("../assets/rec.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  position: relative;

  backdrop-filter: blur(4px);
}
.details-content {
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
}
.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.details-user {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.details-user-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: white;
}
.user-image {
  border-radius: 0.2rem;
  width: 3rem;
}

.details-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.favourites-btn {
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease;
  cursor: pointer;
}

.favourites-btn:hover {
  transform: scale(1.03);
}

.download-btn {
  background-color: #fff200;
  border-radius: 4px;
  border: none;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  letter-spacing: 0.44px;
  transition: 0.2s ease;
  cursor: pointer;
}
.download-btn a {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.download-btn:hover {
  transform: scale(1.03);
}

.image img {
  width: 100%;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
  height: 65vh;
  border-radius: 8px;
  object-fit: cover;
}

@media screen and (max-width: 762px) {
  .details {
    background-image: none;
  }
  .details-content {
    position: initial;
    margin-top: 2rem;
    padding: 0 1rem;
  }
  .download-btn {
    padding: 0.5rem;
  }
  .btn-text {
    display: none;
  }
  .image {
    margin-top: 1rem;
  }
  .details-user-info {
    color: black;
  }
  .image img {
    height: 15rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
