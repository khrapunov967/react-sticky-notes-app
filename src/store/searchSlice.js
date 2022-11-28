import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        query: "",
        isClearIconVisible: false
    },
    reducers: {
        changeQueryHandler(state, action) {
            const newQuery = action.payload.value;
            state.query = newQuery;

            if (state.query.length) state.isClearIconVisible = true;
            else state.isClearIconVisible = false;
        }
    }
});

export const { changeQueryHandler } = searchSlice.actions;

export default searchSlice.reducer;