import {SEND_NOTE} from "../actionTypes";
import {noteState} from "./state";
import _ from "lodash";
const noteEntries = noteState.notes;

export const notes = (state = noteEntries, action) => {
    switch (action.type) {
        case SEND_NOTE:
            const totalNotes = action.number + 1 || 0;
            
            return {
                ...state,
                [totalNotes]: action.payload
            };
        default:
            return state;
    }
};