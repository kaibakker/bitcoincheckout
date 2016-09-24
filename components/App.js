var React = require('react');

var Search = require('./Search');
var PaymentRequest = require('./PaymentRequest');
var BitcoinPaymentURLPanel = require('./BitcoinPaymentURLPanel');
var BitcoinQRCodePanel = require('./BitcoinQRCodePanel');


var App = React.createClass({

	getInitialState(){

		// Extract the favorite locations from local storage

		var favorites = [];

		if(localStorage.favorites){
			favorites = JSON.parse(localStorage.favorites);
		}

		// Nobody would get mad if we center it on Paris by default

		return {
			currentRequest: null,
		};
	},

	fromBitcoinPaymentRequest(url) {
	  var request = {};

		var params = url.split('?')
		request['address'] = params[0].substring(8);

	  params[1].split("&").forEach(function(part) {
	    var item = part.split("=");
	    request[item[0]] =  item[1];
	  });
	  return request;
	},


	setBitcoinPaymentRequest(uri){
		this.setState( { currentRequest: this.fromBitcoinPaymentRequest(uri) } )
	},

	render(){

		return (

			<div>
				<h1>Viabitco.in</h1>

				<Search onSearch={this.setBitcoinPaymentRequest} />

				<PaymentRequest request={this.state.currentRequest} />

				<BitcoinPaymentURLPanel request={this.state.currentRequest} />

				<BitcoinQRCodePanel request={this.state.currentRequest} />



			</div>

		);
	}

});

module.exports = App;
