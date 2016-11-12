var React = require('react');


var CardHeader = require('.././CardHeader');

var CoinbasePanel = React.createClass({
  handler_url() {
    return 'https://www.coinbase.com/handler?u=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  render(){
		return (
			<div className="card">
        <CardHeader title='Pay with Coinbase' app={ this.props.app } />

        <div className="list-group-item">
          <div className="m-x-auto qrcode">
            <img src='assets/images/coinbase.png' className="icon" />
          </div>
          <p className="">Coinbase provides an easy way to connect your bankaccount or creditcard to bitcoin</p>
          <div className="text-xs-right">
            <a href={this.handler_url()} className="btn btn-primary">send to Coinbase</a>
          </div>
        </div>
			</div>
		);
	}
});

module.exports = CoinbasePanel;
