import axios from "axios";

const KEY = "AIzaSyDZgF6PCXJFVZ1W_jaw71kGnvA - HA1ofW0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
