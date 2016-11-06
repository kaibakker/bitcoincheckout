var React = require('react');

var CirclePanel = React.createClass({
  handler_url() {
    return 'https://www.circle.com/send?paymentURL=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  render(){
		return (
      <div className="card">
        <div className="card-header">
          Pay with Circle
        </div>
        <div className="list-group-item">
          <p>Circle provides an easy way to connect your bankaccount or creditcard to bitcoin</p>
          <div className="text-md-right">
            <a href={this.handler_url()} className="btn btn-primary">send to Circle</a>
          </div>
        </div>
			</div>
		);
	}
});

module.exports = CirclePanel;
