import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice";

export default configureStore({
    reducer: {
        noteReducer,
        modalReducer,
        searchReducer,
    }
});