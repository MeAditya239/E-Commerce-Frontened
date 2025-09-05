import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "../../config/apiConfig.js";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });

  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const queryParams = new URLSearchParams();

    if (colors?.length) queryParams.append("color", colors.join(","));
    if (sizes?.length) queryParams.append("size", sizes.join(","));
    if (minPrice && minPrice > 0) queryParams.append("minPrice", minPrice);
    if (maxPrice && maxPrice > 0) queryParams.append("maxPrice", maxPrice);
    if (minDiscount && minDiscount > 0) queryParams.append("minDiscount", minDiscount);
    if (category) queryParams.append("category", category);
    if (stock) queryParams.append("stock", stock);
    if (sort) queryParams.append("sort", sort);
    if (pageNumber != null) queryParams.append("pageNumber", pageNumber);
    if (pageSize != null) queryParams.append("pageSize", pageSize);

    const { data } = await api.get(`/api/products?${queryParams.toString()}`);
    console.log("product data:", data);

    dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);

    console.log( "data by id:", data);

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
