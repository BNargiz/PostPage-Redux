import axios from "axios";
import { startLoading, postFullyFetched } from "./slice";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const fetchPostById = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());

    const [postResponse, commentResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    const post = postResponse.data;
    const comments = commentResponse.data.rows;
    console.log(postResponse.data);
    console.log("comment", commentResponse.data.rows);

    const payload = {
      post,
      comments,
    };

    dispatch(postFullyFetched(payload));

    // dispatch(postFullyFetched());
  } catch (e) {
    console.log(e.message);
  }
};
