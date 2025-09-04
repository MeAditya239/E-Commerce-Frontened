import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "./../../config/apiConfig";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    // Send the whole object (not just address)
    const { data } = await api.post(`/api/orders/`, reqData);
    console.log("created order - ", data);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    return data; // 👈 return so Checkout can use it
  } catch (error) {
    console.log("catch error : ", error);
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    return null;
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("order by id ", data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error : ", error);
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};