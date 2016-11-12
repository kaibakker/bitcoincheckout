var React = require('react');

var CardHeader = require('.././CardHeader');

var SharePanel = React.createClass({
  render(){
		return (
			<div className="card">
        <CardHeader title='Let someonelse pay' app={ this.props.app } />

        <div className="list-group-item">
          <p>Copy a permanent payment URL, the requested value will fluctutate over time as the amount of bitcoin requested is fixed</p>

          <a href='https://kaibakker.github.io/bitcoincheckout/?bitcoin%3A124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB%3Famount%3D0.03%26message%3Dreddit'>
            {'https:///kaibakker.github.io/bitcoincheckout/?bitcoin%3A124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB%3Famount%3D0.03%26message%3Dreddit'}
          </a>
        </div>
			</div>
		);
	}
});

module.exports = SharePanel;
