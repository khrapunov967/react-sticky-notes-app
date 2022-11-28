import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {
        isModalVisible: false,
    },
    reducers: {
        showModal(state) {
            state.isModalVisible = true;
        },
        hideModal(state) {
            state.isModalVisible = false;
        }
    }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;