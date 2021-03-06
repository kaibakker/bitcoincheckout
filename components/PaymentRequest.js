var React = require('react');

var Rate = require('./Rate');
var Status = require('./Status');

var PaymentRequest = React.createClass({
	getInitialState() {
		console.log(this.props.request)
		return {};
	},
	componentWillMount() {
    // this.checkBitcoinAddress(this.updateTransactionStatus)
	},

	updateTransactionStatus(data) {
		this.props.store.dispatch({
			type: 'UPDATE_N_TX_RECEIVED',
			n_tx_received: data.n_tx + data.unconfirmed_n_tx
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

	toggleBuilder(event) {
		return this.setState({ builder: !this.state.builder });
	},

	changeLabel(event) {
		console.log('nothing');
		return null;
	},


	render() {
		return (
			<div className="card">
				<div className="card-header">
					Bitcoin Checkout

					<a onClick={this.toggleBuilder}>{ this.state.builder ? "Show" : "Edit" }</a>
				</div>

				<div className="card-block">
					<div className="row">
						<div className='col-xs-8'>{ this.props.request.label }</div>

						{ this.state.builder &&
							<div className="form-group row">
							  <label for="example-text-input" className="col-xs-5 col-form-label">Text</label>
							  <div className="col-xs-7">
							    <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" onChange={ this.changeLabel }/>
							  </div>
							</div>
						}


						<div className='col-xs-4 text-xs-right'>
							<Rate request={ this.props.request } />
						</div>
					</div>

					{ this.props.request.network == 'testnet' &&
						<div className="row">
							<div className='col-xs-8'>
								Status: <Status request={ this.props.request } />
							</div>


							<div className='col-xs-12'>
								network: { this.props.request.network }
							</div>
						</div>
					}
				</div>
			</div>
		);
	}
});


// PaymentRequest.propTypes = {
// 	address: React.PropTypes.string.isRequired,
// 	amount: React.PropTypes.number.isRequired,
// 	label: React.PropTypes.string.isRequired,
//   setLabel: React.PropTypes.func.isRequired
// }


module.exports = PaymentRequest;
