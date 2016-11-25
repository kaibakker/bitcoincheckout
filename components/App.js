var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PanelController = require('./PanelController');

var IndexPanel = require('./IndexPanel');
var DevelopmentPanel = require('./Panels/DevelopmentPanel');


var App = React.createClass({
	getInitialState(){
		return {
			panel: IndexPanel
		};
	},

	componentWillMount() {
		request = this.makeRequestFromProtocolURI()

		this.props.store.dispatch({
			type: 'NEW_REQUEST',
			label: request.label,
			amount: request.amount,
			address: request.address,
			redirect_to_cancel: request.redirect_to_cancel,
			redirect_to_success: request.redirect_to_success,
		});

	},

	// updateRequest(request) {
	// 	var newRequest = this.props.store.getState().request;
	//
	// 	for (var property in request) {
  //     if (request.hasOwnProperty(property)) {
  //       newRequest[property] = request[property];
  //     }
  //   }
	//
	// 	this.props.store.dispatch({
	// 		type: 'ADD_REQUEST',
	// 		label: label,
	// 		amount: amount,
	// 		address: address,
	// 		redirect_to_cancel: request.redirect_to_cancel,
	// 		redirect_to_success: request.redirect_to_success,
	// 	});
	// },

	makeRequestFromProtocolURI() {
		try {
			var uri = decodeURIComponent(window.location.search.replace("?u=", ""));

		  var request = {};
			console.log(uri);

			if(uri != '') {
				var [network_address, pairs] = uri.split('?')
				var [network, address] = network_address.split(':')
				request.network = network
				request.address = address

			  pairs.split('&').forEach(function(part) {
			    var item = part.split("=");
			    request[item[0]] =  item[1];
			  });
			}
		  return request;
		}
		catch(err) {
		  console.log("Could not read request from Bitcoin Protocol link");
			return {}
		}
	},



  setPanel(panel) {
    this.setState({ panel: panel })
  },
  goToIndex() {
    this.setPanel(IndexPanel)
  },




	render() {
		if(this.props.store.getState().request) {
			return (
			// 	<div>{this.props.store.getState().request.label}</div>
			// )
			// // return (
				<div>
					<PaymentRequest request={this.props.store.getState().request} store={this.props.store} />

					<PanelController request={this.props.store.getState().request} store={this.props.store}/>

					<div className="btn-group">
						<a href={ this.props.store.getState().request.redirect_to_cancel } className="btn btn-info">
							cancel
						</a>

						{ this.props.store.getState().request.network == 'testnet' &&
							<a className="btn btn-info">more info</a>
						}
					</div>
				</div>
			)
		} else {
			return (
				<div>
					No valid request found
				</div>
			)
		}
	}
});

module.exports = App;
