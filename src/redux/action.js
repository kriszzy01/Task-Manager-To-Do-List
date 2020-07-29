import {TOGGLE_FORM, NEW_DETAIL, NEW_TIMESTAMP, NEW_TITLE, SEND_NOTE, REMOVE_NOTE} from "./actionTypes";

export const toggleForm = value => {
    return ({
        type: TOGGLE_FORM,
        payload: value
    });
};

export const newTitle = value => {
    return({
        type: NEW_TITLE,
        payload: value
    });
};

export const newDetail = value => {
    return({
        type: NEW_DETAIL,
        payload: value
    });
};

export const newTimeStamp = value => {
    return({
        type: NEW_TIMESTAMP,
        payload: value
    });
};

export const sendNotes = (title, details, timeStamp, totalNotes) => {
    return({
        type: SEND_NOTE,
        payload: {
            title,
            details,
            timeStamp,
        },
        number: totalNotes
    });
};