import React, {Fragment} from "react";
import { selectAllNotes } from "../notesSlice";
import { useSelector } from "react-redux";
import "./NotesCount.css";

export const NotesCount = () => {
    const allNotes = useSelector(selectAllNotes);

    return(
        <Fragment>
            <h1 className="countHeader">All notes</h1>
            <p>{`${allNotes.length} ${allNotes.length === 1 ? "Note": "Notes"}`}</p>
        </Fragment>
    );
};