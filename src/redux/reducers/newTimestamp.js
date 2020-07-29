import {noteState} from "./state";
const timeStamp = noteState.newTimeStamp;

export const newTimeStamp = (state=timeStamp, action) => {
    return state;
};