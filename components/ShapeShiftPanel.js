// url: shapeshift.io/sendamount
// method: POST
// data type: JSON

//1. Send amount request
 
var React = require('react');


var ListGroupItem = require('./ListGroupItem')

var ShapeShiftPanel = React.createClass({
  getInitialState() {
    return { currencies: [
      { currency: 'ltc', name: 'Litecoin' },
      { currency: 'ppc', name: 'ppc' },
      { currency: 'drk', name: 'drk', },
      { currency: 'doge', name: 'doge' },
      { currency: 'nmc', name: 'nmc' },
      { currency: 'ftc', name: 'ftc' },
      { currency: 'blk', name: 'blk' },
      { currency: 'nxt', name: 'nxt' },
      { currency: 'btcd', name: 'btcd' },
      { currency: 'qrk', name: 'qrk' },
      { currency: 'rdd', name: 'rdd' },
      { currency: 'nbt', name: 'nbt' },
      { currency: 'bts', name: 'bts' },
      { currency: 'bitusd', name: 'bitusd' },
      { currency: 'xcp', name: 'xcp' },
      { currency: 'xmr', name: 'xmr'}
    ] }
  },
  send_to_shapeshift(currency) {
    var myInit = {
      method: 'POST',
      body: JSON.stringify({
    		withdrawalAmount: this.props.request.amount,
    		withdrawal: this.props.request.address,
        pair: currency + '_btc'
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
        { this.state.currencies.map((object) => (
          <ListGroupItem name={object.name} onClick={() => this.send_to_shapeshift(object.currency)}  redirect='shapeshift.io'/>
        )) }
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
    
