var React = require('react');


var TransactionPanel = React.createClass({
  checkBitcoinAddress() {
    fetch('https://bitcoin.toshi.io/api/v0/addresses/' + this.props.request.address + '/transactions')
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
      });
    });
  },
  render() {
		return (
			<a className="list-group-item" onClick={this.props.onClick}>
        { this.props.name } <span className='redirect'> { this.props.redirect } </span>
      </a>
		)
	}
});

module.exports = TransactionPanel;
