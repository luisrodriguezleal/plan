import React, { Component } from 'react';

export default class Help extends Component {
	render () {
		return (
			<div className="fixed-bottom d-flex justify-content-end">
				<div className="shadow-sm p-2 mb-3">
					<a href="#!" className="btn btn-success text-white">Need help?</a>
				</div>
			</div>
		)
	}
}