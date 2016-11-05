var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PanelController = require('./PanelController');



var App = React.createClass({
	getInitialState(){
		return {
			request: {
				address: '124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB',
				amount: 0.03,
				label: 'Donate to viabitcoin',
				bitcoinURI: "bitcoin:124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB?amount=0.03&message=reddit",
        blockHeight: undefined,
        transactionsStatus: "checking"
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

	requestIsValid(request){
		return request.address != undefined && request.amount != undefined && request.label != undefined
	},



	addToTransactions(transaction){
		// var transactions = localStorage.getItem('transactions')

		localStorage.setItem(this.state.request.address, this.state.request.blockHeight)
	},


	render(){
		return (
			<div className="card">
		  	<div className="card-block blue-block">
					<div className="row">
						<PaymentRequest request={this.state.request} panelController={this} />
					</div>
				</div>

				<div className="list-group list-group-flush">
					<PanelController request={this.state.request} />
				</div>
			</div>
		)
	}

});

module.exports = App;
