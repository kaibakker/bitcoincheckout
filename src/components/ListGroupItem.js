var React = require("react");
import { Link } from 'react-router'

var ListGroupItem = React.createClass({
    render() {
        if(this.props.to) {
            return (
                <Link className="list-group-item" to={this.props.to}>
                    { this.props.image && <img src={this.props.image} className='list-group-item-image'/> }
                    { this.props.name }
                    { this.props.redirect && <span className='redirect'> { this.props.redirect } </span>}
                </Link>
            )
        } else if(this.props.onClick) {
      		return (
                <a className="list-group-item" onClick={this.props.onClick}>
                    { this.props.image && <img src={this.props.image} className='list-group-item-image'/> }
                    { this.props.name }
                    { this.props.redirect && <span className='redirect'> { this.props.redirect } </span>}
                </a>
            );
        } else {
            return (
                <div className="list-group-item">
                    { this.props.image && <img src={this.props.image} className='list-group-item-image'/> }
                    { this.props.name }
                    { this.props.redirect && <span className='redirect'> { this.props.redirect } </span>}
                </div>
            );
        }
    }
});

module.exports = ListGroupItem;
