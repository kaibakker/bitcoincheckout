// url: shapeshift.io/sendamount
// method: POST
// data type: JSON

//1. Send amount request
 
var React = require('react');

var CardHeader = require('.././CardHeader');

var ListGroupItem = require('./../ListGroupItem');

var ShapeShiftPanel = React.createClass({
  getInitialState() {
    return { coins: [
      {"name": "BitCrystals","symbol": "BCY","image": "https://shapeshift.io/images/coins/bitcrystals.png","status": "available"},
      {"name": "Blackcoin","symbol": "BLK","image": "https://shapeshift.io/images/coins/blackcoin.png","status": "available"},
      {"name": "Bitshares","symbol": "BTS","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "destTag","fieldKey": "destTag","image": "https://shapeshift.io/images/coins/bitshares.png","status": "available"},
      {"name": "Clams","symbol": "CLAM","image": "https://shapeshift.io/images/coins/clams.png","status": "available"},
      {"name": "Dash","symbol": "DASH","image": "https://shapeshift.io/images/coins/dash.png","status": "available"},
      {"name": "Digibyte","symbol": "DGB","image": "https://shapeshift.io/images/coins/digibyte.png","status": "available"},
      {"name": "DigixDao","symbol": "DGD","image": "https://shapeshift.io/images/coins/digixdao.png","status": "available"},
      {"name": "Dogecoin","symbol": "DOGE","image": "https://shapeshift.io/images/coins/dogecoin.png","status": "available"},
      {"name": "Emercoin","symbol": "EMC","image": "https://shapeshift.io/images/coins/emercoin.png","status": "available"},
      {"name": "Ether","symbol": "ETH","image": "https://shapeshift.io/images/coins/ether.png","status": "available"},
      {"name": "Ether Classic","symbol": "ETC","image": "https://shapeshift.io/images/coins/etherclassic.png","status": "available"},
      {"name": "Factoids","symbol": "FCT","image": "https://shapeshift.io/images/coins/factoids.png","status": "available"},
      {"name": "LBRY Credits","symbol": "LBC","image": "https://shapeshift.io/images/coins/lbry.png","status": "available"},
      {"name": "Lisk","symbol": "LSK","image": "https://shapeshift.io/images/coins/lisk.png","status": "available"},
      {"name": "Litecoin","symbol": "LTC","image": "https://shapeshift.io/images/coins/litecoin.png","status": "available"},
      {"name": "Maidsafe","symbol": "MAID","image": "https://shapeshift.io/images/coins/maidsafe.png","status": "available"},
      {"name": "Monacoin","symbol": "MONA","image": "https://shapeshift.io/images/coins/monacoin.png","status": "available"},
      {"name": "Omni","symbol": "MSC","image": "https://shapeshift.io/images/coins/mastercoin.png","status": "available"},
      {"name": "Nubits","symbol": "NBT","image": "https://shapeshift.io/images/coins/nubits.png","status": "available"},
      {"name": "Namecoin","symbol": "NMC","image": "https://shapeshift.io/images/coins/namecoin.png","status": "available"},
      {"name": "Novacoin","symbol": "NVC","image": "https://shapeshift.io/images/coins/novacoin.png","status": "available"},
      {"name": "Nxt","symbol": "NXT","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"specialIncomingStatus":false,"fieldName": "Public Key (only for unfunded accounts!)","fieldKey": "rsAddress","image": "https://shapeshift.io/images/coins/nxt.png","status": "available"},
      {"name": "Peercoin","symbol": "PPC","image": "https://shapeshift.io/images/coins/peercoin.png","status": "available"},
      {"name": "Augur","symbol": "REP","image": "https://shapeshift.io/images/coins/rep.png","status": "available"},
      {"name": "Reddcoin","symbol": "RDD","image": "https://shapeshift.io/images/coins/reddcoin.png","status": "available"},
      {"name": "Shadowcash","symbol": "SDC","image": "https://shapeshift.io/images/coins/shadowcash.png","status": "available"},
      {"name": "Siacoin","symbol": "SC","image": "https://shapeshift.io/images/coins/siacoin.png","status": "available"},
      {"name": "StorjX","symbol": "SJCX","image": "https://shapeshift.io/images/coins/storjcoinx.png","status": "available"},
      {"name": "Startcoin","symbol": "START","image": "https://shapeshift.io/images/coins/startcoin.png","status": "available"},
      {"name": "Steem","symbol": "STEEM","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "destTag","fieldKey": "destTag","image": "https://shapeshift.io/images/coins/steem.png","status": "available"},
      {"name": "SingularDTV","symbol": "SNGLS","image": "https://shapeshift.io/images/coins/singular.png","status": "available"},
      {"name": "Tether","symbol": "USDT","image": "https://shapeshift.io/images/coins/tether.png","status": "available"},
      {"name": "Voxels","symbol": "VOX","image": "https://shapeshift.io/images/coins/voxels.png","status": "available"},
      {"name": "Vericoin","symbol": "VRC","image": "https://shapeshift.io/images/coins/vericoin.png","status": "available"},
      {"name": "Vertcoin","symbol": "VTC","image": "https://shapeshift.io/images/coins/vertcoin.png","status": "available"},
      {"name": "Counterparty","symbol": "XCP","image": "https://shapeshift.io/images/coins/counterparty.png","status": "available"},
      {"name": "Monero","symbol": "XMR","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "Payment Id","qrName": "tx_payment_id","fieldKey": "paymentId","image": "https://shapeshift.io/images/coins/monero.png","status": "available"},
      {"name": "Ripple","symbol": "XRP","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "Destination Tag","fieldKey": "destTag","image": "https://shapeshift.io/images/coins/ripple.png","status": "available"},
      {"name": "Zcash","symbol": "ZEC","image": "https://shapeshift.io/images/coins/zcash.png","status": "available"}
    ]}
  },

  componentWillMount() {
    // this.getMarkets();
  },

  getMarkets() {
    var self = this;
		fetch('https://shapeshift.io/getcoins')
		.then(function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + response.status);
				console.log(response)
				return;
			}

			// Examine the text in the response
			response.json().then(function(data) {
        delete data["BTC"];

        self.setState({ coins:
          data.filter(function(coin) {
            return (self.state.coins[coin].status == "available")
          }).values()
        })
			});
		});
  },

  redirectToShapeShift(currency) {

    var myInit = {
      method: 'POST',
      body: JSON.stringify({
    		withdrawalAmount: this.props.request.amount,
    		withdrawal: this.props.request.address,
        pair: currency.toLowerCase() + '_btc'
    	}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    };

    console.log(myInit);

    fetch('https://cors.shapeshift.io/sendamount', myInit)
    .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        console.log(response)
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log("Response shapeshift")
        console.log(data);

        var url = 'https://shapeshift.io/#/status/' + data.success.orderId;

        window.location.href = url;
      });
    })
  },

  render(){
		return (
      <div className="card">
        <CardHeader title='Pay with ShapeShift' app={ this.props.app } />

        <div className="card-block">
          Select the cryptocurrency you would like to pay with and you will be send to shapeshift.
        </div>
        { this.state.coins.map(function (coin, index) {
          return <ListGroupItem onClick={() => this.redirectToShapeShift(coin.symbol)} name={coin.name} redirect={coin.symbol} image={coin.image} />
        }, this) }
      </div>
		);
	}
});

module.exports = ShapeShiftPanel;



//   ShapeShift API reference
//  
// amount          = the amount to be sent to the withdrawal address
// withdrawal      = the address for coin to be sent to
// pair            = what coins are being exchanged in the form [input coin]_[output coin]  ie ltc_btc
// returnAddress   = (Optional) address to return deposit to if anything goes wrong with exchange
// destTag         = (Optional) Destination tag that you want appended to a Ripple payment to you
// rsAddress       = (Optional) For new NXT accounts to be funded, supply this on NXT payment to you
// apiKey          = (Optional) Your affiliate PUBLIC KEY, for volume tracking, affiliate payments, split-shifts, etc...
//  
// example data {"amount": this.props.request['amount'], "withdrawal": this.props.request['address'], "pair": "ltc_btc" }
//  
//  
//   Success Output:
//  
//  
// {
//      success:
//       {
//         pair: [pair],
//         withdrawal: [Withdrawal Address], //-- will match address submitted in post
//         withdrawalAmount: [Withdrawal Amount], // Amount of the output coin you will receive
//         deposit: [Deposit Address (or memo field if input coin is BTS / BITUSD)],
//         depositAmount: [Deposit Amount], // Exact amount of input coin to send in
//         expiration: [timestamp when this will expire],
//         quotedRate: [the exchange rate to be honored]
//         apiPubKey: [public API attached to this shift, if one was given]
//       }
// }
    
