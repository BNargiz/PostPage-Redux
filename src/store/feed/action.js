import axios from "axios";
import { postFetched, startLoading } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export async function fetchPosts(dispatch, getState) {
  try {
    dispatch(startLoading()); // check on redux dev tools
    const offset = getState().feed.posts.length;

    // const token = getState().user.token;

    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=5`
      //   { headers: { authorization: `Bearer ${token}` } }
    );
    console.log("response", response);
    const posts = response.data.rows;
    dispatch(postFetched(posts)); // check on redux dev tools
  } catch (e) {
    console.log(e.message);
  }
}
