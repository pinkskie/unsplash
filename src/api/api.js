import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: "Q12u1oZLuB7SqBazraGLqvn_XZ6n5H--odSvpaSVP_s",
  },
});
