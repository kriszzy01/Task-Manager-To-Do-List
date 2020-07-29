import React, {Fragment} from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./NoteBody.css";
import FormInput from "./FormInput";
import NoteControl from "../components/NoteControl";
import { toggleForm, newDetail, newTimeStamp, newTitle, sendNotes } from "../redux/action";

const NoteBody = ({ notes, toggleForm, formToggle, newTitle, newDetail, newTimeStamp, detail, title, timeStamp, sendNotes }) => {

    const noteEntries = notes.map((item, index) => {
        var value = `${item.title}${index}`;

        return (
            <div key={value} className="note-entries">
                <p>{item.title}</p>
                <p>{item.details}</p>
                <p>{item.timeStamp}</p>
            </div>
        )
    })

    return (
        <section className="note-body">
            {noteEntries}
            <NoteControl toggleForm={toggleForm} />
            <FormInput formToggle={formToggle}
                newDetail={newDetail}
                newTitle={newTitle}
                newTimeStamp={newTimeStamp}
                toggleForm={toggleForm}
                detail={detail}
                title={title}
                timeStamp={timeStamp}
                sendNotes={sendNotes}
                totalNotes={notes.length} />
        </section>
    )
};

const mapStateToProps = state => {
    const { notes } = state;
    const formToggle = state.toggleForm;
    const timeStamp = state.newTimeStamp;
    const title = state.newTitle;
    const detail = state.newDetails;

    return { notes: _.values(notes), formToggle, detail, timeStamp, title };
}

export default connect(mapStateToProps, { toggleForm, newDetail, newTimeStamp, newTitle, sendNotes})(NoteBody);