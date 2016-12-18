var React = require("react");

var Rate = require("./Rate");
var Status = require("./Status");

var PaymentRequest = React.createClass({
    getInitialState() {
        return {};
    },
    componentWillMount() {
        this.checkBitcoinAddress(this.updateTransactionStatus);
    },

    updateTransactionStatus(data) {
        this.props.app.updateRequest({ totalTransactionsReceivedOnAddress: data.n_tx + data.unconfirmed_n_tx });
    },


  // api services

    checkBitcoinAddress(callback) {
        fetch("https://api.blockcypher.com/v1/btc/" + this.props.request.network + "/addrs/" + this.props.request.address + "/full?limit=50")
		.then(function(response) {
    if (response.status == 400) {
        return;
    }

    if (response.status !== 200) {
        return;
    }

			// Examine the text in the response
    response.json().then(function(data) {
        if (data.error == "Not found") {

        } else {

            callback(data);
        }
    });
});
    },


    checkToshi(callback) {
        fetch("https://testnet3.toshi.io/api/v0/addresses/" + this.props.request.address + "/transactions")
    .then(function(response) {
        if (response.status == 400) {
            return;
        }

        if (response.status !== 200) {
            return;
        }

      // Examine the text in the response
        response.json().then(function(data) {
            if (data.error == "Not found") {

            } else {

                callback(data);
            }
        });
    });
    },

    toggleBuilder(event) {
        return this.setState({ builder: !this.state.builder });
    },


    render() {
        return (
			<div className="panel panel-default panel-checkout">
				<div className="panel-heading">
					Bitcoin Checkout
				</div>

				<div className="panel-body">
					<div className="row">
						<div className='col-xs-8'>{ this.props.request.label }</div>

						{ this.state.builder &&
							<div className="form-group row">
							  <label for="example-text-input" className="col-xs-5 col-form-label">Text</label>
							  <div className="col-xs-7">
							    <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" onChange={ hits.changeLabel }/>
							  </div>
							</div>
						}


						<div className='col-xs-4 text-right'>
							<Rate request={ this.props.request } />
						</div>
					</div>

					{ this.props.request.network == "testnet" &&
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

module.exports = PaymentRequest;
