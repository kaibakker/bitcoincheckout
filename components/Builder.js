var React = require("react");


var App = require("./App");


var Builder = React.createClass({
    render() {
        return (
			<div className='row'>
				<div className='col-md-12'>
					<h1>Setup you Bitcoin Checkout</h1>
					<p>Setting up your bitcoin checkout is a simple as filling the form below and putting the link into your webpage</p>
				</div>
				<div className='col-md-6'>

					<form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Bitcoin address</label>
                            <input type="text" className="form-control" id="exampleInputBitcoin1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Amount in bitcoin</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Label</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Succes redirect url</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Cancel redirect url</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
				<div className='col-md-6'>
					<App />
				</div>
			</div>

        );
    }
});

module.exports = Builder;
