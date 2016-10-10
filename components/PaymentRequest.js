var React = require('react');

var PaymentRequest = React.createClass({
	select() {
		this.props.app.setRequest(this.props.request)
	},
	render(){
		return (
			<div>
				<div className='col-xs-8'>{this.props.request.label}</div>
				<div className='col-xs-4 text-xs-right'>{this.props.request.amount} BTC</div>
			</div>

			// <div>
			// 	<div className='col-xs-8'>{this.props.request.label}<br />In moby, epub and pdf</div>
			// 	<div className='col-xs-4 text-xs-right'>{(this.props.request.amount*550.0).toFixed(2)} EUR<br />{this.props.request.amount} BTC</div>
			// </div>
		);
	}
});

module.exports = PaymentRequest;
