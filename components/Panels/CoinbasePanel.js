var React = require('react');




var CoinbasePanel = React.createClass({
  handler_url() {
    return 'https://www.coinbase.com/handler?u=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  render(){
		return (
			<div className="card">
        <div className="card-header">
          Pay with Coinbase
          <span className="redirect" onClick={() => this.props.app.goToIndex()}>change</span>
        </div>

        <div className="list-group-item">
          <div className="m-x-auto qrcode">
            <img src='assets/images/coinbase.png' className="icon" />
          </div>
          <p>Coinbase provides an easy way to connect your bankaccount or creditcard to bitcoin</p>
          <div className="text-md-right">
            <a href={this.handler_url()} className="btn btn-primary">send to Coinbase</a>
          </div>
        </div>
			</div>
		);
	}
});

module.exports = CoinbasePanel;
