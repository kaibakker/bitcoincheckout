var React = require('react');

var BitcoinPaymentURLPanel = React.createClass({
  handler_url() {
    return 'https://www.coinbase.com/handler?u=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  uri() {
    return "bitcoin:" + this.props.request['address']
         + "?amount=" + this.props.request['amount']
         + "?address=" + this.props.request['address']
  },
  render(){
		return (
			<div>
        <a href={this.handler_url()} className="btn btn-primary">Pay with coinbase</a>
			</div>
		);
	}
});

module.exports = BitcoinPaymentURLPanel;
