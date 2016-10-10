var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PaymentOptions = require('./PaymentOptions');

var App = React.createClass({

	getInitialState(){
		return {
			request: {
				address: '1FbcR3rv6xsoQSFgrvZBe1xRg7fVU8LdHr',
				amount: 0.03,
				label: 'Donate to viabitcoin',
				bitcoinURI: "bitcoin:1FbcR3rv6xsoQSFgrvZBe1xRg7fVU8LdHr?amount=0.03&message=reddit"
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
		request.address = params[0].substring(8);

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
			<div className="row">
				<div className="col-xs-12 list-item">
			    <h4>viabitco.in</h4>
				</div>

				<PaymentRequest request={this.state.request} />

				<PaymentOptions request={this.state.request} />

			</div>
		)
	}

});

module.exports = App;
