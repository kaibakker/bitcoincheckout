var React = require('react');

var BitcoinPaymentURLPanel = React.createClass({
  render() {
		return (
			<div className="row">
        <a href={this.props.bitcoinURI}>bitcoin payment uri link</a>
			</div>
		);
	}
});

module.exports = BitcoinPaymentURLPanel;
