import {TOGGLE_FORM} from "../actionTypes";
import {noteState} from "./state";
const showForm = noteState.showForm;

export const toggleForm = (state = showForm, action) => {
    switch (action.type) {
        case TOGGLE_FORM:
            return !state;
        default:
            return state;
    }
};