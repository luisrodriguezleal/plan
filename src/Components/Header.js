import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
        	<div>
	        	<div className="bg-light text-center position-relative  p-3 mt-4 p-md-5">
	        		<h1 className="h1 display-4 font-weight-normal">TRY OUR PLANS</h1>
	        		<p className="lead font-weight-normal">Just select one and start today</p>
	        	</div>
	        	<div className="container mt-3">
	        		<h4 className="font-weight-bold h4 py-2"><span className="badge badge-success">Step 1</span> Select a plan that works for you</h4>
	        	</div>
        	</div>
        )
    }
}