import { SET_LOADING, SET_PRODUCTS } from "./actionTypes";
import axios from "axios";

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}

export function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload,
  };
}

export function getProducts() {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios({
        url: "https://my-json-server.typicode.com/megasuartika/fe-assignment/db",
        method: "GET",
      });
      dispatch(setProducts(data.shoes));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };
}
