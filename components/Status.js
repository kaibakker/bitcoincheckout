var React = require('react');

var IndexPanel = require('./IndexPanel');


var State = React.createClass({
  getInitialState() {
    return { status: "new"}
  },

  componentWillMount() {
    this.checkBitcoinAddress(this.received)
  },

  received(data) {
    this.setState({ totalTransactionsReceivedOnAddress: data.n_tx + data.unconfirmed_n_tx })
  },


  checkBitcoinAddress(callback) {
    fetch('https://api.blockcypher.com/v1/btc/' + this.props.request.network + '/addrs/' + this.props.request.address + '/full?limit=50')
    .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        callback(data)
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
    if(this.state.totalTransactionsReceivedOnAddress < data.n_tx) {
      this.setState({ status: "completed"})
    } else if(this.state.totalTransactionsReceivedOnAddress < data.n_tx + data.unconfirmed_n_tx) {
      this.setState({ status: "unconfirmed"})
    } else {
      this.setState({ status: "unpaid"})
    }
  },
  render() {
    return (
      <a onClick={this.reloadStatus} href="#" >{ this.state.status }</a>
    )
	}
});

module.exports = State;
