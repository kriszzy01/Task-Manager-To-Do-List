import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "./features/notesSlice";

const reducer = {
    notes: notesReducer,
};

export const store = configureStore({
    reducer,
});