import {noteState} from "./state";
import {NEW_DETAIL} from "../actionTypes";
const detail = noteState.newDetails;

export const newDetails = (state=detail, action) => {
    switch (action.type) {
        case NEW_DETAIL:
            return action.payload;
        default:
            return state;
    } 
};