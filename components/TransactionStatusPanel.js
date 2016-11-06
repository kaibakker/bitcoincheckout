var React = require('react');


var IndexPanel = require('./IndexPanel');

var ListGroupItem = require('./ListGroupItem')

var TransactionStatusPanel = React.createClass({
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
          console.log(data);

          callback(data)
        }
      });
    });
  },
  reloadStatus() {
    this.checkBitcoinAddress(this.updateTransactionStatus)
  },
  updateTransactionStatus(data) {
    console.log('update transactino status')
    console.log(this.props.request)
    console.log(data)
    if(this.props.request.totalTransactionsReceivedOnAddress < data.n_tx) {
      this.props.panelController.setRequest({ transactionsStatus: "paid"})
    } else if(this.props.request.totalTransactionsReceivedOnAddress < data.n_tx + data.unconfirmed_n_tx) {
      this.props.panelController.setRequest({ transactionsStatus: "not confirmed"})
    } else {
      this.props.panelController.setRequest({ transactionsStatus: "unpaid"})
    }
  },
  render() {
    return (
      <div className="card">
        <div className="card-header">Transaction status</div>

        <div className="list-group-item">
          Status: {this.props.request.transactionsStatus}
          ({this.props.request.totalTransactionsReceivedOnAddress})
          <div className="text-md-right">
            <a onClick={this.reloadStatus} href="#" className="btn btn-primary">reload status</a>
          </div>
        </div>
      </div>
    )
	}
});

module.exports = TransactionStatusPanel;
