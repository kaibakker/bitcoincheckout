var React = require('react');

var PaymentRequest = React.createClass({
	select() {
		this.props.app.setRequest(this.props.request)
	},
	render(){
		return (
			<div className="">
				<div className="col-xs-12">
					{this.props.request.label}
					<span className="pull-xs-right">{(this.props.request.amount*550.0).toFixed(2)} EUR</span>
					<div className="clearfix"></div>
				</div>

				<div className="col-xs-12 list-item">
					one year of reddit gold
					<span className="pull-xs-right">{this.props.request.amount} BTC</span>
					<div className="clearfix"></div>
				</div>
			</div>
		);
	}
});

module.exports = PaymentRequest;
