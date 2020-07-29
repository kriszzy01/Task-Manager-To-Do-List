import React from "react";
import {NotesList} from "./NotesList";
import {AddNewNote} from "./AddNewNote";
import "./NoteBody.css";

export const NoteBody = () => {
    return(
        <section className="noteBody">
            <NotesList/>
            <AddNewNote/>
        </section>
    )
};