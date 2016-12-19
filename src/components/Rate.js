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
            if (response.status !== 200) {
                return;
            }

            response.json().then(function(data) {
                if (data.data) {
                    self.setRates(data.data);
                } else {
                }
            });
        });
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
			<div>{this.state.selectedRate && this.state.selectedRate.toFixed(2) + " " + this.state.selectedSymbol}</div>
        );
    }
});

module.exports = Rate;
