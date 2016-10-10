var React = require('react');

var BitcoinPaymentURLPanel = React.createClass({
  handler_url() {
    return 'https://www.coinbase.com/handler?u=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  render(){
		return (
			<div className="list-group-item">
        <a href={this.handler_url()} className="btn btn-primary">Pay with coinbase</a>
			</div>
		);
	}
});

module.exports = BitcoinPaymentURLPanel;
