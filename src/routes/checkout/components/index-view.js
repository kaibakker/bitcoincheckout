import React, { Component } from "react";

import IndexPanel from "../../../components/IndexPanel";

import getRequestObject from "utils/get-request-object"

export default class IndexView extends Component {
    render() {
        return (
            <div>
                Hallo
                <IndexPanel request={ getRequestObject() }/>
            </div>
        );
    }
}
