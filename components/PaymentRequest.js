var React = require('react');

var PaymentRequest = React.createClass({
	select() {
		this.props.app.setRequest(this.props.request)
	},
	render(){
		if(this.props.request != null) {
			return (
				<div className='row'>
					<h4>{this.props.request['label']}</h4>
					<span className="pull-right">€{this.props.request['amount']}</span>
					<a onClick={this.select}>select</a>
				</div>
			);
		} else {
			return <div></div>
		}
	}
});

module.exports = PaymentRequest;
