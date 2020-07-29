import React from "react";
import {AddNoteButton} from "./AddNoteButton";
import {NotesCount} from "./NotesCount";
import "./NoteHeader.css";

export const NoteHeader = () => {
    return(
        <section className="noteHeader">
            <NotesCount/>
            <AddNoteButton/>
        </section>
    );
};