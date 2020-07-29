import React from "react";
import TopHeading from "../components/TopHeading";
import "./NoteHead.css";
import {connect} from "react-redux";
import _ from "lodash"

const NoteHead = ({titles})=> {
    return (
        <div className="note-head">
            <TopHeading titleTotal = {titles.length}/>
        </div>
    );
};

const mapStateToProps = state => {
    const {notes} = state;
    return {titles: _.values(notes)};
}

export default connect(mapStateToProps)(NoteHead);