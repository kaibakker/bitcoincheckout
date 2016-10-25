var React = require('react');


var PaymentRequest = require('./PaymentRequest');

var PaymentOptions = require('./PanelController');



var App = React.createClass({
	getInitialState(){
		return {
			request: {
				address: 'mnuSpyyoNmEPoiwiYVKmxvj25wsFEhimN2',
				amount: 0.03,
				label: 'Donate to viabitcoin',
				bitcoinURI: "bitcoin:mnuSpyyoNmEPoiwiYVKmxvj25wsFEhimN2?amount=0.03&message=reddit",
        blockHeight: undefined,
        transactionsStatus: "checking"
			},
		};
	},


	componentWillMount() {
		var value = decodeURIComponent(window.location.search.replace("?", ""));
		if(value != "") {
			this.setBitcoinPaymentRequest(value);
		}
		var self = this;
	},


	addToTransactions(transaction){
		var transactions = this.state.transactions;

		transactions.push(transaction);

		this.setState({
			transactions: transactions
		});

		localStorage.transactions = JSON.stringify(transactions);
	},



  // from bitcoin payment request

	fromBitcoinPaymentRequest(url) {
	  var request = {};

		var params = url.split('?')
		request.address = params[0].substring(8);

	  params[1].split("&").forEach(function(part) {
	    var item = part.split("=");
	    request[item[0]] =  item[1];
	  });
	  return request;
	},
  //
	// setRequest(request) {
	// 	this.setState( { request: request } )
	// },

	setBitcoinPaymentRequest(uri){
		var request = this.fromBitcoinPaymentRequest(uri)
		// this.addToTransactions(request)
		this.setCurrentRequest(request)
	},


	render(){
		return (
			<div className="card">
		  	<div className="card-block blue-block">
					<div className="row">
						<PaymentRequest request={this.state.request} />
					</div>
				</div>

				<div className="list-group list-group-flush">
					<PaymentOptions request={this.state.request} />
				</div>

			</div>
		)
	}

});
// <a href='https://test-insight.bitpay.com/address/mnuSpyyoNmEPoiwiYVKmxvj25wsFEhimN2'>
//  	Check for incoming transactions
// </a>



//
// {
//   "hash": "n32Fqv4XCNWWv4MvxF4W5Fy8RhwgGbk4RA",
//   "balance": 5002467686,
//   "received": 5002477686,
//   "sent": 0,
//   "unconfirmed_received": 10000,
//   "unconfirmed_sent": 0,
//   "unconfirmed_balance": 5002477686,
//   "transactions": [
//     {
//       "hash": "24087a08309ea5796ef139e65f13ce10db1e4465057b665b9d5102a640aac6be",
//       "version": 1,
//       "lock_time": 0,
//       "size": 257,
//       "inputs": [{
//         "previous_transaction_hash": "4aecda969d15b7a75db66b6a90a8cf95f801cc2f68c0699a2816ae41252d9294",
//         "output_index": 1,
//         "amount": 1011640,
//         "script": "3044022017d58d70df1adabee104a8ba1d53d0b520cfed73b4a7e3631a474b7b5423f56e02207cc2be7d6112a63ff678efb9f09b07a1c66983a17a6a7fae85a114b80ca30ed701 04306ae0a0853ac8a40547d243e194146ea0df26b304795d3bfe7879507522120f4fa907593eed843987f91b52632a63b02b5aedbfec744e4fe0bc0b814ae11da1",
//         "addresses": [
//           "15djQ6BzrB766ovRzen3ReVtJzdfzDWwsk"
//         ]
//       }],
//       "outputs": [
//         {
//           "amount": 1000,
//           "spent": false,
//           "script": "OP_DUP OP_HASH160 119b098e2e980a229e139a9ed01a469e518e6f26 OP_EQUALVERIFY OP_CHECKSIG",
//           "script_hex": "76a914119b098e2e980a229e139a9ed01a469e518e6f2688ac",
//           "script_type": "hash160",
//           "addresses": [
//             "n32Fqv4XCNWWv4MvxF4W5Fy8RhwgGbk4RA"
//           ]
//         }
//       ],
//       "amount": 0,
//       "fees": 0
//     }
//   ],
//   "unconfirmed_transactions": [
//     {
//       "hash": "7f66c5e6a8bb4b9e640dfcb097232c740a43481dc02817959f48c48d3436b583",
//       "version": 1,
//       "lock_time": 0,
//       "size": 258,
//       "inputs": [],
//       "outputs": [{
//         "amount": 10000,
//         "spent": false,
//         "script": "OP_DUP OP_HASH160 119b098e2e980a229e139a9ed01a469e518e6f26 OP_EQUALVERIFY OP_CHECKSIG",
//         "script_hex": "76a914119b098e2e980a229e139a9ed01a469e518e6f2688ac",
//         "script_type": "hash160",
//         "addresses": [
//           "n32Fqv4XCNWWv4MvxF4W5Fy8RhwgGbk4RA"
//         ]
//       }, {
//         "amount": 732000,
//         "spent": false,
//         "script": "OP_DUP OP_HASH160 402319e566a996b9b512cb391352148c15b7a1f2 OP_EQUALVERIFY OP_CHECKSIG",
//         "script_hex": "76a914402319e566a996b9b512cb391352148c15b7a1f288ac",
//         "script_type": "hash160",
//         "addresses": [
//           "16r8J9bmThZCSN2qeKza6btdMk4bb8rnEh"
//         ]
//       }],
//       "amount": 0,
//       "fees": 0,
//       "confirmations": 0,
//       "pool": "orphan"
//     }
//   ]
// }

module.exports = App;
