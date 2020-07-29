import React, { Component } from "react";
import NoteHead from "./NoteHead";
import NoteBody from "./NoteBody";
import "./App.css";

class App extends Component {
    render() {
        return (
            <section className="note-app">
                <NoteHead />
                <NoteBody />
            </section>
        );
    }
};

export default App;