import React, { Component } from 'react';
import { Data_visitors } from '../data/data_visitors';
import LineChart from './line_chart';

class Visitors extends Component {
	render(){
		const data = [];
		let sum = 0;
		for(let key in Data_visitors){
			data.push(Data_visitors[key]);
			sum += Data_visitors[key];
		}
		return(
				<div className="card pad5">
				    <div className="row">
				    	<div className="col-md-8">
				    		<span className="cnt-title">Visitors</span> 
				    	</div>
				    	<div className="col-md-4 txtrt">
				    		<span className="countText">{sum}</span>
				    	</div>
				    </div>
					<LineChart data={data} color= "#5b3ecf"/>
				</div>
			);
	}
}

export default Visitors;