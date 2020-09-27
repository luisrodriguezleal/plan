import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'

export default class CreditCardForm extends Component {
	render () {
		return (
			<section className="container">
				
				<div className="mt-3">
	        		<h4 className="font-weight-bold h4 py-2"><span className="badge badge-success">Step 3 </span> Select your preferred method of payment</h4>
	        	</div>
	        	<div className="row">
	        		<div className="col-md-4 border-right">
	        			<button className="btn btn-outline-dark p-3"><FontAwesomeIcon icon={faCreditCard} size="2x"/></button>
	        			<button className="btn btn-outline-dark p-3"><FontAwesomeIcon icon={faCcPaypal} size="2x"/></button>
	        			<button className="btn btn-outline-dark p-3"><FontAwesomeIcon icon={faBitcoin} size="2x"/></button>
	        			<button className="btn btn-outline-dark p-3"><FontAwesomeIcon icon={faCcVisa} size="2x"/></button>
	        		</div>
	        		<div className="col-md-8">
	        			<div className="input-group">
	        				<div className="input-group-prepend">
	        					<label className="input-group-text">First Name</label>
	        				</div>
	        				<input className="form-control" type="text" placeholder="Juan"/>
	        				<div className="input-group-prepend">
	        					<label className="input-group-text">Last Name</label>
	        				</div>
	        				<input className="form-control" type="text" placeholder="Ramirez" />
	        			</div>
	        			<br />
	        			<div className="input-group">
	        				<div className="input-group-prepend">
	        					<label className="input-group-text">Credit Card Number</label>
	        				</div>
	        				<input className="form-control" type="text" placeholder="xxxx.xxxx.xxxx.xxxx" />
	        			</div>
	        			<br />
	        			<div className="input-group">
	        				<div className="input-group-prepend">
	        					<label className="input-group-text">Month</label>
	        				</div>
	        				<input className="form-control" type="text" placeholder="January"/>
	        				<div className="input-group-prepend">
	        					<label className="input-group-text">Year</label>
	        				</div>
	        				<input className="form-control" type="text" placeholder="2020" />
	        			</div>
	        			<br />
	        			<div className="input-group">
	        				<div className="input-group-prepend">
	        					<label className="input-group-text">CVC</label>
	        				</div>
	        				<input className="form-control" type="text" placeholder="XXXX"/>
	        				<div className="input-group-prepend">
	        					<label className="input-group-text">ZIP/Postal Code</label>
	        				</div>
	        				<input className="form-control" type="text" placeholder="2103" />
	        			</div>
	        			<div className="m-4">
							<button type="submit" className="btn btn-outline-dark btn-lg">BUY NOW</button>
	        			</div>
	        			<div className="text-center">
	        				<p className="text-muted">By submitting this form you agree to our terms of services</p>
	        				
	        			</div>	        		
	        		</div>
	        	</div>
			</section>
		)
	}
}