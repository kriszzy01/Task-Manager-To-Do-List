import React from "react";
import { useDispatch } from "react-redux";
import { removeNote} from "../notesSlice";
import "./DeleteNote.css";

export const DeleteNote = ({id}) => {
    const dispatch = useDispatch();
    
    const deleteNote = () => dispatch(removeNote(id))

    return <button className="removeNote" onClick={deleteNote}>-</button>;
};