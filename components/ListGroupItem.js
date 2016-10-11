var React = require('react');


var ListGroupItem = React.createClass({
  render() {
    if(this.props.redirect) {
  		return (
  			<a className="list-group-item" onClick={this.props.onClick}>
          { this.props.name } <span className='redirect'> { this.props.redirect } </span>
        </a>
  		)
    } else {
  		return (
  			<a className="list-group-item" onClick={this.props.onClick}>{ this.props.name }</a>
  		)
    }
	}
});

module.exports = ListGroupItem;
