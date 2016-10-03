var React = require('react');

var BitcoinPaymentURLPanel = React.createClass({
  handler_url() {
    return 'https://www.coinbase.com/handler?u=' + this.uri()
  },
  uri() {
    return "bitcoin:" + this.props.request['address']
         + "?amount=" + this.props.request['amount']
         + "?address=" + this.props.request['address']
  },
  render(){
		if(this.props.request != null) {
			return (
				<section className="col-xs-12 col-md-6 col-md-offset-3 current-location">
          <a href={this.handler_url()}>Pay with coinbase</a>
				</section>
			);
		} else {
			return <div></div>
		}
	}
});

module.exports = BitcoinPaymentURLPanel;
