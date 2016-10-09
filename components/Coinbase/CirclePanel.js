var React = require('react');

var CirclePanel = React.createClass({
  handler_url() {
    return 'https://www.circle.com/send?paymentURL=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  render(){
		return (
			<div>
        <a href={this.handler_url()} className="btn btn-primary">Pay with circle</a>
			</div>
		);
	}
});

module.exports = CirclePanel;
