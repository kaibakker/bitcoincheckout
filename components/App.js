var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PaymentOptions = require('./PaymentOptions');

var App = React.createClass({

	getInitialState(){

		// Extract the favorite locations from local storage
		// window.location.search.replace("?", "");
		//
		// transactions = []
		//
		// if(localStorage.transactions){
		// 	transactions = JSON.parse(localStorage.transactions);
		// }

		return {
			request: {
				address: '175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W',
				amount: 20.3,
				label: 'Reddit gold 1 year'
			},
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

	setRequest(request) {
		this.setState( { request: request } )
	},


	setBitcoinPaymentRequest(uri){
		var request = this.fromBitcoinPaymentRequest(uri)
		// this.addToTransactions(request)
		this.setCurrentRequest(request)
	},

	render(){

		return (

			<section className="col-xs-12 col-md-6 col-md-offset-3 current-location">
				<h1>Reddit.com</h1>

				// <row>
				// 	<a href='bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=20.3&label=Luke-Jr' > bitcoin link</a>
				// </row>
				<hr />
				<PaymentRequest request={this.state.request} />
				<hr />

				<PaymentOptions request={this.state.request} />


			</section>

		);
	}

});

module.exports = App;
