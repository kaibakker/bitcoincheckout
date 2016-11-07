var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PanelController = require('./PanelController');



var App = React.createClass({
	getInitialState(){
		return {
			request: {
				address: '124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB',
				amount: 0.03,
				label: 'Donate to Bitcoin Checkout',
				bitcoinURI: "bitcoin:124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB?amount=0.03&message=reddit",
        totalTransactionsReceivedOnAddress: 0,
        transactionsStatus: "unpaid",
				network: 'main'
			},
		};
	},

	// from bitcoin payment request

	componentWillMount() {
		request = this.makeRequestFromProtocolURI()

		if(this.requestIsValid(request)) {
			this.setState({request: request})
		}
	},

	setRequest(request) {
		var newRequest = this.state.request;

		for (var property in request) {
      if (request.hasOwnProperty(property)) {
        newRequest[property] = request[property];
      }
    }

		this.setState({request: newRequest})
	},

	makeRequestFromProtocolURI() {
		var uri = decodeURIComponent(window.location.search.replace("?", ""));

	  var request = {};
		console.log(uri)
		if(uri != '') {
			var params = uri.split('?')
			request.address = params[0].substring(8);

		  params[1].split("&").forEach(function(part) {
		    var item = part.split("=");
		    request[item[0]] =  item[1];
		  });
		}
	  return request;
	},

	requestIsValid(request) {
		return request.address != undefined && request.amount != undefined && request.label != undefined
	},



	addToTransactions(transaction) {
		// var transactions = localStorage.getItem('transactions')

		localStorage.setItem(this.state.request.address, this.state.request.blockHeight)
	},


	render() {
		return (
			<div>
				<PaymentRequest request={this.state.request} app={this} />

				<PanelController request={this.state.request} app={this}/>
			</div>
		)
	}

});

module.exports = App;
