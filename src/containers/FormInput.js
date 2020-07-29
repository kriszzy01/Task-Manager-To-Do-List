import React from "react";
import "./FormInput.css"

const FormInput = ({ formToggle, newDetail, newTitle, newTimeStamp, toggleForm, detail, title, timeStamp, sendNotes, totalNotes }) => {
    const handleSubmit = e => {
        e.preventDefault(); 
        const currentTime = () => `${new Date().toLocaleTimeString()}, ${new Date().toLocaleDateString()}`
        sendNotes(title, detail, currentTime(), totalNotes);
        newDetail("");
        newTitle("");
        toggleForm();
    }

    return (
        <form style={formToggle !== true ? { display: "block" } : { display: "none" }}
            onSubmit={(e) => handleSubmit(e)}>

            <input id="title"
                placeholder="Title"
                onChange={(e) => newTitle(e.target.value)}
                value={title} />

            <textarea placeholder="Notes"
                onChange={(e) => newDetail(e.target.value)}
                value={detail} />

            <button type="submit">Save Note</button>

            <button type="button"
                onClick={() => toggleForm()}>Close Form</button>
        </form>
    );
}

export default (FormInput);