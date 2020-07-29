import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllNotes, changeNoteStatus } from "../notesSlice";
import "./NoteList.css";
import { DeleteNote } from "./DeleteNote";

export const NotesList = () => {
    const allNotes = useSelector(selectAllNotes);

    const dispatch = useDispatch();

    const handleStatusChange = event => dispatch(changeNoteStatus(event.target.value));

    let renderedNotes;

    if (allNotes.length < 1) {
        renderedNotes = <article><h2 className="noNotes">No Notes to Display</h2></article>
    } else {
        renderedNotes = allNotes.map(note => {
            var { id, title, content, timeStamp, completed } = note;

            return (
                <article className={completed === false ? "note" : "note noteCompleted"} key={id}>
                    <section className="noteHead">
                        <h2>{title}</h2>
                        <select onChange={handleStatusChange} className="noteStatus">
                            <option value={id}>Pending</option>
                            <option value={id}>Completed</option>
                        </select>
                        <DeleteNote id={id}/>
                    </section>
                    <p>{content}</p>
                    <p><i>{timeStamp}</i></p>
                </article>
            );
        });
    }

    return <Fragment>{renderedNotes}</Fragment>;
};