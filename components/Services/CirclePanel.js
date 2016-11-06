var React = require('react');

var CirclePanel = React.createClass({
  handler_url() {
    return 'https://www.circle.com/send?paymentURL=' + encodeURIComponent(this.props.request.bitcoinURI)
  },
  render(){
		return (

      <div className="list-group">
        <div className="list-group-item">
          Pay with Circle
          <span className="redirect" onClick={() => this.props.panelController.setPanel(IndexPanel)}>change</span>
        </div>
        <div className="list-group-item">
          <div className="m-x-auto qrcode">
            <img src='assets/images/circle.png' className="icon" />
          </div>
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
