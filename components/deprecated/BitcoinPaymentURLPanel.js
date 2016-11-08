var React = require('react');

var BitcoinPaymentURLPanel = React.createClass({
  render() {
		return (
			<div className="list-group-item">
        <a href={this.props.request.bitcoinURI} className="btn btn-primary">bitcoin payment uri link</a>
			</div>
		);
	}
});

module.exports = BitcoinPaymentURLPanel;
