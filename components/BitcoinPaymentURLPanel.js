var React = require('react');

var BitcoinPaymentURLPanel = React.createClass({
  uri() {
    return "bitcoin:" + this.props.request['address']
         + "?amount=" + this.props.request['amount']
         + "?address=" + this.props.request['address']
  },
  render(){
		if(this.props.request != null) {
			return (
				<div className="row">
          <a href={this.uri()}>bitcoin payment uri link</a>
				</div>
			);
		} else {
			return <div></div>
		}
	}
});

module.exports = BitcoinPaymentURLPanel;
