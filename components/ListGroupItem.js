var React = require('react');


var ListGroupItem = React.createClass({
  render() {
		return (
			<a className="list-group-item" onClick={this.props.onClick}>
        { this.props.image && <img src={this.props.image} className='list-group-item-image'/> }
        { this.props.name }
        { this.props.redirect && <span className='redirect'> { this.props.redirect } </span>}
      </a>
		)
	}
});

module.exports = ListGroupItem;
