var React = require('react');

var PaymentRequest = React.createClass({
	select() {
		this.props.app.setCurrentRequest(this.props.request)
	},
	render(){
		if(this.props.request != null) {
			return (
				<section className="col-xs-12 col-md-6 col-md-offset-3 current-location">
					<h4>{this.props.request['label']}</h4>
					<span className="pull-right">€{this.props.request['amount']}</span>
					<a onClick={this.select}>select</a>
				</section>
			);
		} else {
			return <div></div>
		}
	}
});

module.exports = PaymentRequest;
