import React, { Component } from 'react';
import { Data_bounce_rate } from '../data/data_bounce_rate';
import LineChart from './line_chart';

class Visitors extends Component {
	render(){
		const data = [];
		let sum = 0;
		for(let key in Data_bounce_rate){
			data.push(Data_bounce_rate[key]);
			sum += Data_bounce_rate[key];
		}
		return(
				<div className="card pad5">
					<div className="row">
				    	<div className="col-md-8">
				    		<span className="cnt-title">Bounce Rate</span> 
				    	</div>
				    	<div className="col-md-4 txtrt">
				    		<span className="countText">{sum}</span>
				    	</div>
				    </div>
					<LineChart data={data} color= "#cf3e7f"/>
				</div>
			);
	}
}

export default Visitors;