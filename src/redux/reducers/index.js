import { combineReducers } from "redux";
import {notes} from "./notes";
import {toggleForm} from "./toggleForm";
import {newTitle} from "./newTitle";
import {newDetails} from "./newDetail";
import {newTimeStamp} from "./newTimestamp";

export const reducers = combineReducers({
    notes,
    toggleForm,
    newTitle,
    newDetails,
    newTimeStamp
});