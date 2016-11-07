var React = require('react');


var IndexPanel = require('./IndexPanel');

var ListGroupItem = require('./ListGroupItem')

var RatesPanel = React.createClass({
  getInitialState() {
    return { rates: [] }
  },
  checkBitcoinAddress(callback) {
    fetch('https://bitpay.com/rates')
    .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data)
        if (data.data) {
          callback(data)

        } else {
          console.log("error")
        }
      });
    });
  },
  componentWillMount() {
    this.checkBitcoinAddress(this.updateTransactionStatus)
  },
  updateTransactionStatus(data) {
    this.setState({ rates: data.data })
  },
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Rates
          <span className="redirect" onClick={() => this.props.panelController.goToIndex()}>change</span>
        </div>

        <div className="list-group">
          { this.state.rates.map(function (rate, index) {
            return (
              <div className="list-group-item">
                { rate.name }
                <span className="redirect">{ (rate.rate * this.props.request.amount).toFixed(2) + " " + rate.code }</span>
              </div>
            )
          }, this) }
        </div>
      </div>
    )
	}
});

module.exports = RatesPanel;
