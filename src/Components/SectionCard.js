import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export default class SectionCard extends Component {
    render () {
        return (
            <div className="bg-dark">
            	<div className="container">
            		<div className="row p-3">
            			<div className="col-md-4 text-center">
            				<div className="card border-0 card-select">
            					<div className="bg-dark">
            						<h3 className="text-white">3 month</h3>
            					</div>
            					<div className="card-body">
            						<div className="card-title m-md-4 p-4 border-bottom">
                                        <span className="text-muted offer lead">$109.99</span>
            							<h1 className="h1 m-0"><b>$99.99</b></h1>
            							<p className="lead text-muted"><small>/ month</small></p>
            						</div>
            						<div className="card-link mb-4">
            							<a href="#!" className="btn btn-outline-dark">SELECT THIS</a>
            						</div>
            						<div className="card-title">
            							<p className="font-weight-bold text-danger">No guaranteed</p>
            						</div>
            					</div>
            				</div>
            			</div>
            			<div className="col-md-4 text-center">
            				<div className="card card-active-true">
            					<div className="bg-dark">
            						<h3 className="text-white">One year</h3>
            					</div>
                                          <div className="card-body">
                                                <div className="check-circle">
                                                      <span><FontAwesomeIcon icon={faCheckCircle} size="3x"/></span>
                                                </div>                                          
            						<div className="card-title m-md-4 p-4 text-success border-bottom">
                                                      <span className="text-muted offer lead">$359.99</span>
            							<h1 className="h1 m-0"><b>$299.99</b></h1>
            							<p className="lead"><small>/ month</small></p>
            						</div>
            						<div className="card-link mb-4">
            							<a href="#!" className="btn btn-outline-dark">SELECT THIS</a>
            						</div>
            						<div className="card-title">
            							<p className="font-weight-bold text-success">Guaranteed</p>
            						</div>
            					</div>
            				</div>
            			</div>
            			<div className="col-md-4 text-center">
            				<div className="card border-0 card-select">
            					<div className="bg-dark">
            						<h3 className="text-white">6 month</h3>
            					</div>
            					<div className="card-body">
            						<div className="card-title m-md-4 p-4 border-bottom">
                                        <span className="text-muted offer lead">$159.99</span>
            							<h1 className="h1 m-0"><b>$129.99</b></h1>
            							<p className="lead text-muted"><small>/ month</small></p>
            						</div>
            						<div className="card-link mb-4">
            							<a href="#!" className="btn btn-outline-dark">SELECT THIS</a>
            						</div>
            						<div className="card-title">
            							<p className="font-weight-bold text-success">Guaranteed</p>
            						</div>
            					</div>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
        )
    }
}