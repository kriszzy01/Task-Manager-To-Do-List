import {noteState} from "./state";
import {NEW_TITLE} from "../actionTypes"
const title = noteState.newTitle;

export const newTitle = (state=title, action) => {
    switch (action.type) {
        case NEW_TITLE:
            return action.payload;
        default:
            return state;
    }
};