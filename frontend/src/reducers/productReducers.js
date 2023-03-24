import { PRODUCT_LIST_REQUEST
    , PRODUCT_LIST_SUCCESS,
     PRODUCT_LIST_FAILURE, 
     PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
       PRODUCT_DETAILS_FAILURE } from "../constants/productConstants"



export const productReducer = (state={products: [] }, action) => {
    switch (action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products:[] }
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payLoad }
        case PRODUCT_LIST_FAILURE:
            return {loading: false, error: action.payLoad }
        default: 
            return state
    }

}


export const productDetailsReducer = (state={product: {} }, action) => {
    switch (action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payLoad }
        case PRODUCT_DETAILS_FAILURE:
            return {loading: false, error: action.payLoad }
        default: 
            return state
    }

}