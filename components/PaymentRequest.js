var React = require('react');

var PaymentRequest = React.createClass({

	componentWillMount() {
    this.checkBitcoinAddress(this.updateTransactionStatus)
	},
	updateTransactionStatus(data) {
		this.props.app.setRequest({ totalTransactionsReceivedOnAddress: data.n_tx + data.unconfirmed_n_tx })
	},

  // transactions

  loadTransactions() {
    var transactions = []

    if(localStorage.getItem(this.props.request.address) == null) {
      this.updateTransaction()
    }

    this.setState({ transactions: transactions })
  },

  updateTransaction() {
    this.checkBitcoinAddress(function(data) {

    });
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


		checkForIncomingTransactions() {
			var self = this;

			this.checkBitcoinAddress(function(data) {
	      var lastBlockHeight = data.txs[0].block_height

	      var beforBlockHeight = localStorage.getItem(self.props.request.address)


	      var request = self.props.request

	      if(beforBlockHeight != lastBlockHeight) {
	        console.log(lastBlockHeight);

	        console.log(beforBlockHeight);
	        request['transactionsStatus'] = 'paid'
					this.props.panelController.setPanel(TransactionStatusPanel)
	      } else {
	        request['transactionsStatus'] = 'unpaid'
	      }

	      self.setState({ request: request });
			})
		},

	render(){
		return (
			<div>
				<div className='col-xs-8'>{this.props.request.label}</div>
				<div className='col-xs-4 text-xs-right'>{this.props.request.amount} BTC</div>

				<div className='col-xs-8'>
					<a onClick={this.checkForIncomingTransactions}>
						{ this.props.request.transactionsStatus }
					</a>
				</div>
			</div>
		);
	}
});

module.exports = PaymentRequest;
