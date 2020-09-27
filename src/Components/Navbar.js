import React, { Component } from 'react';

export default class Navbar extends Component {
    render () {
        return (
            <div>
            	<nav className="navbar navbar-dark bg-dark">
				  <a className="navbar-brand" href="#!">MarkeT</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarsExample01">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item">
				        <a className="nav-link" href="#!">Home</a>
				      </li>
				      <li className="nav-item active">
				        <a className="nav-link" href="#!">Prices</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#!" tabindex="-1" aria-disabled="true">Disabled</a>
				      </li>
				    </ul>
				  </div>
				</nav>
            </div>
        )
    }
}
