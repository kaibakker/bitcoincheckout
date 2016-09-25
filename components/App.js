var React = require('react');

var Search = require('./Search');
var PaymentRequest = require('./PaymentRequest');
var BitcoinPaymentURLPanel = require('./BitcoinPaymentURLPanel');
var BitcoinQRCodePanel = require('./BitcoinQRCodePanel');
var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel');

var App = React.createClass({

	getInitialState(){

		// Extract the favorite locations from local storage
		window.location.search.replace("?", "");

		// Nobody would get mad if we center it on Paris by default

		return {
			currentRequest: null,
		};
	},

	componentWillMount() {
		var value = decodeURIComponent(window.location.search.replace("?", ""));
		if(value != "") {
			this.setBitcoinPaymentRequest(value);
		}
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

				<section>
					<a href='bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=20.3&label=Luke-Jr' > bitcoin link</a>
				</section>

				<PaymentRequest request={this.state.currentRequest} />

				<BitcoinPaymentURLPanel request={this.state.currentRequest} />

				<BitcoinQRCodePanel request={this.state.currentRequest} />

				<BitcoinProtocolHandlerPanel />

			</div>

		);
	}

});

module.exports = App;
