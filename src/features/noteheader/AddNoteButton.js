import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./AddNoteButton.css";
import {showNewNoteForm} from "../notesSlice";

export const AddNoteButton = () => {
    const dispatch = useDispatch();

    const showForm = useSelector(state => state.notes.showForm);
    
    const toggleNewNoteForm = () => dispatch(showNewNoteForm());

    return(
        <button className="addNoteButton" onClick={toggleNewNoteForm}>{showForm === true ? "-": "+"}</button>
    );
};