var React = require("react");

import makeRequestFromProtocolURI from "utils/get-request-object";

var Rate = React.createClass({
    getInitialState() {
        return { selectedSymbol: "EUR" };
    },

    componentWillMount() {
        this.updateRates();
    },

    updateRates() {
        var self = this;

        fetch("https://bitpay.com/rates")
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            self.setRates(json.data);
        })
    },

    setRates(rates) {
        var request = makeRequestFromProtocolURI();
        var selectedRate;

        for (var index in rates) {
            var rate = rates[index];

            if (rate.code == this.state.selectedSymbol) {
                selectedRate = rate.rate * request.amount;
                break;
            }
        }

        this.setState({ rates: rates, selectedRate: selectedRate });
    },

    render() {
        return (
			<div>{ this.state.selectedRate && this.state.selectedRate.toFixed(2) + " " + this.state.selectedSymbol }</div>
        );
    }
});

module.exports = Rate;
