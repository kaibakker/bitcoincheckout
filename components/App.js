var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PanelController = require('./PanelController');

var IndexPanel = require('./Panels/IndexPanel');

var App = React.createClass({
	getInitialState(){
		return {
			panel: IndexPanel,
			request: {
				address: '124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB',
				amount: 0.01,
				label: 'Donate to Bitcoin Checkout',
				bitcoinURI: "bitcoin:124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB?amount=0.03&message=reddit",
        totalTransactionsReceivedOnAddress: 0,
        status: "unpaid",
				network: 'main'
			},
		};
	},

	// from bitcoin payment request

	componentWillMount() {
		request = this.makeRequestFromProtocolURI()

		if(this.requestIsValid(request)) {
			this.setState({request: request})
		}
	},
	updateRequest(request) {
		var newRequest = this.state.request;

		for (var property in request) {
      if (request.hasOwnProperty(property)) {
        newRequest[property] = request[property];
      }
    }

		this.setState({request: newRequest})
	},
	setRequest(request) {
		var newRequest = this.state.request;

		for (var property in request) {
      if (request.hasOwnProperty(property)) {
        newRequest[property] = request[property];
      }
    }

		this.setState({request: newRequest})
	},

	makeRequestFromProtocolURI() {
		var uri = decodeURIComponent(window.location.search.replace("?", ""));

	  var request = {};
		console.log(uri)
		if(uri != '') {
			var params = uri.split('?')
			request.address = params[0].substring(10);

		  params[1].split("&").forEach(function(part) {
		    var item = part.split("=");
		    request[item[0]] =  item[1];
		  });
		}
	  return request;
	},

	requestIsValid(request) {
		return request.address != undefined && request.amount != undefined
	},

  setPanel(panel) {
    this.setState({ panel: panel })
  },
  goToIndex() {
    this.setPanel(IndexPanel)
  },

	request() {
		return this.state.request;
	},
	bitcoinURI() {
		return 'bitcoin:' + this.state.request.address + '?amount=' + this.state.request.amount + '&label=' + this.state.request.label
	},

	render() {
		return (
			<div>
				<PaymentRequest request={this.state.request} app={this} />

				<PanelController request={this.state.request} panel={this.state.panel} app={this}/>
				<a href={ this.state.request.redirect_to }>
					cancel
				</a>
			</div>
		)
	}

});

module.exports = App;
