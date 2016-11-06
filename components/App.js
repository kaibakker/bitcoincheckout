var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PanelController = require('./PanelController');



var App = React.createClass({
	getInitialState(){
		return {
			request: {
				address: 'mxPGHKg4EnoqVdoRqK5TyKy4m1W5TsZgh4',
				amount: 0.03,
				label: 'Donate to viabitcoin',
				bitcoinURI: "bitcoin:mxPGHKg4EnoqVdoRqK5TyKy4m1W5TsZgh4?amount=0.03&message=reddit",
        totalTransactionsReceivedOnAddress: 0,
        transactionsStatus: "unpaid",
				network: 'test3'
			},
		};
	},

	// from bitcoin payment request

	componentWillMount() {
		request = this.makeRequestFromProtocolURI()

		if(this.requestIsValid(request)) {
			this.setState({request: request})

			this.addToTransactions(request)
		}
	},

	setRequest(request) {
		var source = request
		console.log(source)
		var destination = this.state.request
		console.log(destination)
		for (var property in source) {
        if (source.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
		console.log(destination)
		this.setState({request: destination})
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

				<div>
					<PanelController request={this.state.request} app={this}/>
				</div>
			</div>
		)
	}

});

module.exports = App;
