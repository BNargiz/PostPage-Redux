import axios from "axios";
import { startLoading, userData } from "./slice";

const API_URL = "https://codaisseur-coders-network.herokuapp.com";

export const login =
  (email, password, navigator) => async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      const login = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      const token = login.data.jwt;
      navigator("/");

      const user = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token} ` },
      });

      localStorage.setItem("token", token);

      console.log(token, user.data);
      dispatch(userData({ token, user: user.data }));
    } catch (e) {
      console.log(e.message);
    }
  };

export const bootstrapLoginState = () => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) return;

    const user = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token} ` },
    });

    dispatch(userData({ token, user: user.data }));
  } catch (e) {
    console.log(e.message);
  }
};
