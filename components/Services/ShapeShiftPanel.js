// url: shapeshift.io/sendamount
// method: POST
// data type: JSON

//1. Send amount request
 
var React = require('react');


var ListGroupItem = require('./../ListGroupItem')

var ShapeShiftPanel = React.createClass({
  getInitialState() {
    return { coins: {
      "BTC": {"name": "Bitcoin","symbol": "BTC","image": "https://shapeshift.io/images/coins/bitcoin.png","status": "available"},
      "BCY": {"name": "BitCrystals","symbol": "BCY","image": "https://shapeshift.io/images/coins/bitcrystals.png","status": "available"},
      "BITUSD": {"name": "BitUSD","symbol": "BITUSD","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "memo","image": "https://shapeshift.io/images/coins/bitusd.png","status": "unavailable"},
      "BLK": {"name": "Blackcoin","symbol": "BLK","image": "https://shapeshift.io/images/coins/blackcoin.png","status": "available"},
      "BTCD": {"name": "BitcoinDark","symbol": "BTCD","image": "https://shapeshift.io/images/coins/bitcoindark.png","status": "unavailable"},
      "BTS": {"name": "Bitshares","symbol": "BTS","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "destTag","fieldKey": "destTag","image": "https://shapeshift.io/images/coins/bitshares.png","status": "available"},
      "CLAM": {"name": "Clams","symbol": "CLAM","image": "https://shapeshift.io/images/coins/clams.png","status": "available"},
      "DASH": {"name": "Dash","symbol": "DASH","image": "https://shapeshift.io/images/coins/dash.png","status": "available"},
      "DGB": {"name": "Digibyte","symbol": "DGB","image": "https://shapeshift.io/images/coins/digibyte.png","status": "available"},
      "DGD": {"name": "DigixDao","symbol": "DGD","image": "https://shapeshift.io/images/coins/digixdao.png","status": "available"},
      "DOGE": {"name": "Dogecoin","symbol": "DOGE","image": "https://shapeshift.io/images/coins/dogecoin.png","status": "available"},
      "EMC": {"name": "Emercoin","symbol": "EMC","image": "https://shapeshift.io/images/coins/emercoin.png","status": "available"},
      "ETH": {"name": "Ether","symbol": "ETH","image": "https://shapeshift.io/images/coins/ether.png","status": "available"},
      "ETC": {"name": "Ether Classic","symbol": "ETC","image": "https://shapeshift.io/images/coins/etherclassic.png","status": "available"},
      "FCT": {"name": "Factoids","symbol": "FCT","image": "https://shapeshift.io/images/coins/factoids.png","status": "available"},
      "FLO": {"name": "FlorinCoin","symbol": "FLO","image": "https://shapeshift.io/images/coins/florincoin.png","status": "unavailable"},
      "FTC": {"name": "Feathercoin","symbol": "FTC","image": "https://shapeshift.io/images/coins/feathercoin.png","status": "unavailable"},
      "HYPER": {"name": "Hyper","symbol": "HYPER","image": "https://shapeshift.io/images/coins/hyper.png","status": "unavailable"},
      "LBC": {"name": "LBRY Credits","symbol": "LBC","image": "https://shapeshift.io/images/coins/lbry.png","status": "available"},
      "LSK": {"name": "Lisk","symbol": "LSK","image": "https://shapeshift.io/images/coins/lisk.png","status": "available"},
      "LTC": {"name": "Litecoin","symbol": "LTC","image": "https://shapeshift.io/images/coins/litecoin.png","status": "available"},
      "MAID": {"name": "Maidsafe","symbol": "MAID","image": "https://shapeshift.io/images/coins/maidsafe.png","status": "available"},
      "MONA": {"name": "Monacoin","symbol": "MONA","image": "https://shapeshift.io/images/coins/monacoin.png","status": "available"},
      "MSC": {"name": "Omni","symbol": "MSC","image": "https://shapeshift.io/images/coins/mastercoin.png","status": "available"},
      "NBT": {"name": "Nubits","symbol": "NBT","image": "https://shapeshift.io/images/coins/nubits.png","status": "available"},
      "NMC": {"name": "Namecoin","symbol": "NMC","image": "https://shapeshift.io/images/coins/namecoin.png","status": "available"},
      "NVC": {"name": "Novacoin","symbol": "NVC","image": "https://shapeshift.io/images/coins/novacoin.png","status": "available"},
      "NXT": {"name": "Nxt","symbol": "NXT","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"specialIncomingStatus":false,"fieldName": "Public Key (only for unfunded accounts!)","fieldKey": "rsAddress","image": "https://shapeshift.io/images/coins/nxt.png","status": "available"},
      "POT": {"name": "Potcoin","symbol": "POT","image": "https://shapeshift.io/images/coins/potcoin.png","status": "unavailable"},
      "PPC": {"name": "Peercoin","symbol": "PPC","image": "https://shapeshift.io/images/coins/peercoin.png","status": "available"},
      "REP": {"name": "Augur","symbol": "REP","image": "https://shapeshift.io/images/coins/rep.png","status": "available"},
      "RDD": {"name": "Reddcoin","symbol": "RDD","image": "https://shapeshift.io/images/coins/reddcoin.png","status": "available"},
      "SDC": {"name": "Shadowcash","symbol": "SDC","image": "https://shapeshift.io/images/coins/shadowcash.png","status": "available"},
      "SC": {"name": "Siacoin","symbol": "SC","image": "https://shapeshift.io/images/coins/siacoin.png","status": "available"},
      "SJCX": {"name": "StorjX","symbol": "SJCX","image": "https://shapeshift.io/images/coins/storjcoinx.png","status": "available"},
      "START": {"name": "Startcoin","symbol": "START","image": "https://shapeshift.io/images/coins/startcoin.png","status": "available"},
      "STEEM": {"name": "Steem","symbol": "STEEM","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "destTag","fieldKey": "destTag","image": "https://shapeshift.io/images/coins/steem.png","status": "available"},
      "SNGLS": {"name": "SingularDTV","symbol": "SNGLS","image": "https://shapeshift.io/images/coins/singular.png","status": "available"},
      "STR": {"name": "Stellar","symbol": "STR","image": "https://shapeshift.io/images/coins/stellar.png","status": "unavailable"},
      "UNO": {"name": "Unobtanium","symbol": "UNO","image": "https://shapeshift.io/images/coins/unobtanium.png","status": "unavailable"},
      "USDT": {"name": "Tether","symbol": "USDT","image": "https://shapeshift.io/images/coins/tether.png","status": "available"},
      "VOX": {"name": "Voxels","symbol": "VOX","image": "https://shapeshift.io/images/coins/voxels.png","status": "available"},
      "VRC": {"name": "Vericoin","symbol": "VRC","image": "https://shapeshift.io/images/coins/vericoin.png","status": "available"},
      "VTC": {"name": "Vertcoin","symbol": "VTC","image": "https://shapeshift.io/images/coins/vertcoin.png","status": "available"},
      "XCP": {"name": "Counterparty","symbol": "XCP","image": "https://shapeshift.io/images/coins/counterparty.png","status": "available"},
      "XMR": {"name": "Monero","symbol": "XMR","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "Payment Id","qrName": "tx_payment_id","fieldKey": "paymentId","image": "https://shapeshift.io/images/coins/monero.png","status": "available"},
      "XRP": {"name": "Ripple","symbol": "XRP","specialReturn":false,"specialOutgoing":true,"specialIncoming":true,"fieldName": "Destination Tag","fieldKey": "destTag","image": "https://shapeshift.io/images/coins/ripple.png","status": "available"},
      "ZEC": {"name": "Zcash","symbol": "ZEC","image": "https://shapeshift.io/images/coins/zcash.png","status": "available"}}
      // { currency: 'ltc', name: 'Litecoin' },
      // { currency: 'ppc', name: 'ppc' },
      // { currency: 'drk', name: 'drk', },
      // { currency: 'doge', name: 'doge' },
      // { currency: 'nmc', name: 'nmc' },
      // { currency: 'ftc', name: 'ftc' },
      // { currency: 'blk', name: 'blk' },
      // { currency: 'nxt', name: 'nxt' },
      // { currency: 'btcd', name: 'btcd' },
      // { currency: 'qrk', name: 'qrk' },
      // { currency: 'rdd', name: 'rdd' },
      // { currency: 'nbt', name: 'nbt' },
      // { currency: 'bts', name: 'bts' },
      // { currency: 'bitusd', name: 'bitusd' },
      // { currency: 'xcp', name: 'xcp' },
      // { currency: 'xmr', name: 'xmr'}
     }
  },
  componentWillMount() {
    this.getMarkets();
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
				// if (data.error == "Not found") {
        //   return
				// }
        console.log(dat)
        self.setState({ coins: data })
			});
		});
  },
  send_to_shapeshift(currency) {
    console.log(currency)
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
      <div>
        { Object.keys(this.state.coins).map(function (key) {
          var coin = this.state.coins[key]
          return <ListGroupItem onClick={() => this.send_to_shapeshift(key)} name={coin.name} redirect={coin.symbol} image={coin.image} />
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
    
