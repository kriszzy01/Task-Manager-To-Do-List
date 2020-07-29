import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNoteById, changeNoteStatus } from "../notesSlice";

export const NoteStatus = ({ id }) => {
    const dispatch = useDispatch();

    const handleStatusChange = () => dispatch(changeNoteStatus(id));

    return (
        <select onChange={handleStatusChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
        </select>
    );
};