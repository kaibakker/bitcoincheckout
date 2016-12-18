import React, { Component } from "react";

import IndexPanel from '../../../components/IndexPanel'


export default class IndexView extends Component {
    render() {
        return (
            <div>
                <IndexPanel request={{ amount: '0.03', address: 'xyz', label: 'test', network: 'bitcoin' }}/>
            </div>
        );
    }
}
