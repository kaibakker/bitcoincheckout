var React = require('react');

var PaymentRequest = React.createClass({
	select() {
		this.props.app.setRequest(this.props.request)
	},
	render(){
		return (
			<div className="list-group-item">
				<div className="row">
					<div className="col-xs-9">{this.props.request.label}</div>
					<div className="col-xs-3 text-right">{(this.props.request.amount*550.0).toFixed(2)} EUR</div>

					<div className="col-xs-9">one year of reddit gold</div>
					<div className="col-xs-3 text-right">{this.props.request.amount} BTC</div>
				</div>
			</div>
		);
	}
});

module.exports = PaymentRequest;
