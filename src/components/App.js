import React from "react";

import PaymentRequest from "./PaymentRequest";

import IndexPanel from "./IndexPanel";
import DevelopmentPanel from "./Panels/DevelopmentPanel";

import makeRequestFromProtocolURI from "utils/get-request-object";

var App = React.createClass({
    getInitialState(){
        return {
            panel: IndexPanel,
            request: {}
        };
    },

	// request: {
	// 	address: '124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB',
	// 	amount: 0.01,
	// 	label: 'Donate to Bitcoin Checkout',
	// 	bitcoinURI: "bitcoin:124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB?amount=0.03&message=reddit",
	//   totalTransactionsReceivedOnAddress: 0,
	//   status: "unpaid",
	// 	network: 'bitcoin'
	// },

	// from bitcoin payment request

    componentWillMount() {
        var request = makeRequestFromProtocolURI();

        if(this.requestIsValid(request)) {
            this.setState({request: request});
        }
    },

    updateRequest(request) {
        var newRequest = this.state.request;

        for (var property in request) {
            if (request.hasOwnProperty(property)) {
                newRequest[property] = request[property];
            }
        }

        this.setState({request: newRequest});
    },

    setRequest(request) {
        var newRequest = this.state.request;

        for (var property in request) {
            if (request.hasOwnProperty(property)) {
                newRequest[property] = request[property];
            }
        }

        this.setState({request: newRequest});
    },

    requestIsValid(request) {
        return request && request.address != undefined && request.amount != undefined;
    },

    setPanel(panel) {
        this.setState({ panel: panel });
    },

    goToIndex() {
        this.setPanel(IndexPanel);
    },

    request() {
        return this.state.request;
    },

    render() {
        if(this.state.request) {
            return (
				<div>
					<PaymentRequest request={this.state.request} app={this} />




					<div className="btn-group">
						<a href={ this.state.request.redirect_to_cancel } className="btn btn-info">
							cancel
						</a>

						{ this.state.request.network == "testnet" &&
							<a className="btn btn-info">more info</a>
						}
					</div>
				</div>
            );
        } else {
            return (
				<div>
					Error in payment
				</div>
            );
        }
    }
});

module.exports = App;
