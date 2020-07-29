import React from "react";
import "./NoteControl.css";

const NoteControl = ({toggleForm}) => {
    return (
        <section className="note-control">
            <button onClick={()=>toggleForm()}>+</button>
        </section>
    );
};

export default NoteControl;