import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


const initialState = {
    loading: false,
    cartItems: [],
    error: null,
    cart: null,
};     

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART_REQUEST:
            return {...state, loading: true, error: null};
            
        case ADD_ITEM_TO_CART_SUCCESS:
            return {...state, loading: false, cart: action.payload, error: null};
        case ADD_ITEM_TO_CART_FAILURE:
            return {...state, loading: false, error: action.payload};
        
        case GET_CART_REQUEST:
            return {...state, loading: true, error: null};
        case GET_CART_SUCCESS:
            return {...state, loading: false, cart: action.payload, error: null};
        case GET_CART_FAILURE:
            return {...state, loading: false, error: action.payload};
        
        case REMOVE_CART_ITEM_REQUEST:
            return {...state, loading: true, error: null};
        case REMOVE_CART_ITEM_SUCCESS:
            return {...state, loading: false, cartItems: state.cartItems.filter(item => item.id !== action.payload.id), error: null};
        case REMOVE_CART_ITEM_FAILURE:
            case UPDATE_CART_ITEM_FAILURE:
                return {...state, loading: false, error: action.payload};
        
        case UPDATE_CART_ITEM_REQUEST:
            return {...state, loading: true, error: null};
        case UPDATE_CART_ITEM_SUCCESS:
            return {...state, loading: false, cartItems: state.cartItems.map(item =>
                item.id === action.payload.id ? action.payload : item
            ), error: null};
        
        default: return state;
}
}