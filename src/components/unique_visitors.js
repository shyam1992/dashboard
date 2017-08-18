import React, { Component } from 'react';
import { Data_Unique_visitors } from '../data/data_unique_visitors';
import LineChart from './line_chart';

class Visitors extends Component {
	render(){
		const data = [];
		let sum =0;
		for(let key in Data_Unique_visitors){
			data.push(Data_Unique_visitors[key]);
			sum += Data_Unique_visitors[key];
		}
		return(
				<div className="card pad5">
					<div className="row">
				    	<div className="col-md-8">
				    		<span className="cnt-title">Unique Visitors</span> 
				    	</div>
				    	<div className="col-md-4 txtrt">
				    		<span className="countText">{sum}</span>
				    	</div>
				    </div>
					<LineChart data={data} color= "#8c3eac"/>
				</div>
			);
	}
}

export default Visitors;