import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {App} from "./App";
import {store} from "./store";
import "./index.css"

const destination = document.querySelector("#root");

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    destination
);