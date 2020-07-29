import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewNote, showNewNoteForm } from "../notesSlice";

export const AddNewNote = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleAddTitle = event => setTitle(event.target.value);
    const handleAddContent = event => setContent(event.target.value);
    const handleSaveNote = event => {
        event.preventDefault();

        if (title && content) {
            dispatch(addNewNote(title, content));
            dispatch(showNewNoteForm())

            setTitle("");
            setContent("");
        }
    };

    const showForm = useSelector(state => state.notes.showForm);

    return (
        <section className={showForm === true ? "formContainer shown": "formContainer hidden"}>
            <form onSubmit={handleSaveNote}>
            <label htmlFor="noteTitle">Note Title:</label>
            <input
                type="text"
                id="noteTitle"
                value={title}
                onChange={handleAddTitle}
            />

            <label htmlFor="noteContent">Note Content:</label>
            <textarea
                id="noteContent"
                value={content}
                onChange={handleAddContent}
            />

            <button type="submit">Save Note</button>
        </form>
        </section>
    );
};