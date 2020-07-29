import React, {Fragment} from "react";
import {NoteHeader} from "./features/noteheader/NoteHeader";
import {NoteBody} from "./features/notebody/NoteBody";

export const App = () => {
    return(
        <Fragment>
            <NoteHeader/>
            <NoteBody/>
        </Fragment>
    );
};