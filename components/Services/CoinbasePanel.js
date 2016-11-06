var React = require('react');

var BitcoinPaymentURLPanel = React.createClass({
  handler_url() {
    return 'https://www.coinbase.com/handler?u=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  render(){
		return (
			<div className="list-group-item">


        <div className="m-x-auto qrcode">
          <img src='assets/images/coinbase.png' className="icon" />
        </div>
        <h5 className="text-md-center">Pay with Coinbase</h5>
        <a href={this.handler_url()} className="btn btn-primary">request Coinbase</a>
			</div>
		);
	}
});

module.exports = BitcoinPaymentURLPanel;
