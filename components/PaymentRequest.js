var React = require('react');

var Rate = require('./Rate');
var Status = require('./Status');

var PaymentRequest = React.createClass({
	getInitialState() {
		console.log(this.props.request)
		return {};
	},
	componentWillMount() {
    this.checkBitcoinAddress(this.updateTransactionStatus)
	},

	updateTransactionStatus(data) {
		this.props.app.updateRequest({ totalTransactionsReceivedOnAddress: data.n_tx + data.unconfirmed_n_tx })
	},


  // api services

	checkBitcoinAddress(callback) {
		fetch('https://api.blockcypher.com/v1/btc/' + this.props.request.network + '/addrs/' + this.props.request.address + '/full?limit=50')
		.then(function(response) {
			if (response.status == 400) {
				console.log("No transactions found")
				return;
			}

			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + response.status);
				console.log(response)
				return;
			}

			// Examine the text in the response
			response.json().then(function(data) {
				if (data.error == "Not found") {

				} else {
					console.log("transactions for address:")
					console.log(data.total_received);

					callback(data)
				}
			});
		});
	},


	checkToshi(callback) {
		fetch('https://testnet3.toshi.io/api/v0/addresses/' + this.props.request.address + '/transactions')
    .then(function(response) {
			if (response.status == 400) {
        console.log("No transactions found")
        return;
      }

      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        console.log(response)
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
				if (data.error == "Not found") {

				} else {
					console.log("transactions for address:")
	        console.log(data.txs.length);

					callback(data)
				}
      });
		});
	},

	render() {
		return (
			<div className="card">
				<div className="card-header">
					Bitcoin Checkout
					<span className="redirect">edit</span>
				</div>
				<div className="card-block blue-block">

					<div className="row">
						<div className='col-xs-8'>{this.props.request.label}</div>
						<div className='col-xs-4 text-xs-right'>{this.props.request.amount} BTC</div>
					</div>

					<div className="row">
						<div className='col-xs-8'>
							<Status request={ this.props.request } />
						</div>
						<div className='col-xs-4 text-xs-right'>
							<Rate request={ this.props.request } />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = PaymentRequest;
