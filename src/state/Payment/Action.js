import { api } from "../../config/apiConfig";
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
} from "./ActionType";

// Create Payment Link
export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const token = localStorage.getItem("jwt"); // get JWT if required

    const { data } = await api.post(
      `/api/payments/${orderId}`,
      {},
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    );

    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }

    dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
  } catch (error) {
    console.error("Create Payment Error:", error);
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};

// Update Payment Status
export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );

    console.log("Update payment response:", data);

    dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
  } catch (error) {
    console.error("Update Payment Error:", error);
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
  }
};
