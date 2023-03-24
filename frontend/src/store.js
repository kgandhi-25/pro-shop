import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk' // I still add this for my reference so I know thunk middleware is added
import { productReducer } from './reducers/productReducers.js'
const store = configureStore({
    reducer: {
        productList: productReducer,
    },
    preloadedState: {},
    middleware: [thunk],
})
 
export default store
 


