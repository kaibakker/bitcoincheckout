var React = require('react');

var Search = require('./Search');
var PaymentRequest = require('./PaymentRequest');
var BitcoinPaymentURLPanel = require('./BitcoinPaymentURLPanel');
var BitcoinQRCodePanel = require('./BitcoinQRCodePanel');
var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel');
var ShapeShiftPanel = require('./ShapeShiftPanel');
var CoinbasePanel = require('./CoinbasePanel');

var App = React.createClass({

	getInitialState(){

		// Extract the favorite locations from local storage
		window.location.search.replace("?", "");

		transactions = []

		if(localStorage.transactions){
			transactions = JSON.parse(localStorage.transactions);
		}

		return {
			transactions: transactions,
			currentRequest: null,
		};
	},

	componentWillMount() {
		var value = decodeURIComponent(window.location.search.replace("?", ""));
		if(value != "") {
			this.setBitcoinPaymentRequest(value);
		}
	},

	addToTransactions(transaction){
		var transactions = this.state.transactions;

		transactions.push(transaction);

		this.setState({
			transactions: transactions
		});

		localStorage.transactions = JSON.stringify(transactions);
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

	setCurrentRequest(request) {
		this.setState( { currentRequest: request } )
	},


	setBitcoinPaymentRequest(uri){
		var request = this.fromBitcoinPaymentRequest(uri)
		this.addToTransactions(request)
		this.setCurrentRequest(request)
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

				<BitcoinProtocolHandlerPanel request={this.state.currentRequest} />

				<ShapeShiftPanel request={this.state.currentRequest} />

				<CoinbasePanel request={this.state.currentRequest}/>

				{ transactions.map(function(transaction) {
					return <PaymentRequest app={this} request={transaction} />
				}) }
			</div>

		);
	}

});

module.exports = App;
