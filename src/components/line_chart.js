import React, { Component } from 'react';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

class LineChart extends Component {
	  render(){
	  	return(
	  		<div>
	  			<Sparklines data={this.props.data} >
	  			  <SparklinesCurve color={this.props.color}/>
				</Sparklines>

			</div>
	  		);
	  }
}

export default LineChart;