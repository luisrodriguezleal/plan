import React, { Component } from 'react';

export default class Email extends Component {
    render () {
        return (
        	<React.Fragment>
        		<div className="container mt-3">
	        		<h4 className="font-weight-bold h4 py-2"><span className="badge badge-success">Step 2</span> Please enter your email address</h4>
	        	</div>
	        	<div>
	        		<div className="container">
	        			<input className="form-control" type="email" name="email" id="email" placeholder="example@email.com" required/>
	        		</div>
	        	</div>
        	</React.Fragment>

        )
    }
}