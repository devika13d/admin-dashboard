import { configureStore } from "@reduxjs/toolkit";
import dashSlice from "./dashSlice";

const store=configureStore({
    reducer:{
        dashSlice:dashSlice
    }

})

export default store;