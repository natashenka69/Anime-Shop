import { createSlice } from "@reduxjs/toolkit";

import { FigureData } from "../../types/types";

const watchedSlice = createSlice({
    name: "watched",
    initialState: {
        items: [],  // Assuming FigureData type
    },
    reducers: {
        addToWatched: (state, action) => {
            // Check if item is already in watched list
            if (!state.items.find(item => item.id === action.payload.id)) {
                state.items.push(action.payload);
            }
        },
        clearWatched: (state) => {
            state.items = [];
        }
    }
});

export default watchedSlice.reducer;
export const { addToWatched, clearWatched } = watchedSlice.actions;