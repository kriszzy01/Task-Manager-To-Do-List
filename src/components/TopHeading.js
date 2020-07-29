import React from "react";
import "./TopHeading.css";

const TopHeading = ({titleTotal}) => {
    return(
        <section className="top-heading">
            <h1>All notes</h1>
            <p className="total-notes">{`${titleTotal} notes`}</p>
        </section>
    );
};

export default TopHeading;