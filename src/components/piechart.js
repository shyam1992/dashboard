import React, { Component } from 'react';
import PieChart from "react-svg-piechart";
import { Data_Referral } from "../data/data_referral";


export default class PieComponent extends Component {
    constructor() {
        super()
        this.state = {
            expandedSector: null,
        }
        this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
    }
 
    handleMouseEnterOnSector(sector) {
        this.setState({expandedSector: sector})
    }
 
    render() {
        let Totalsum = 0;
        const dataArr = [];
        dataArr[0] = { label : "Search Engines" , value : 0, color: "#AC5C7E"};
        dataArr[1] = { label : "Direct Entry" , value : 0, color: "#942A57"};
        dataArr[2] = { label : "Websites" , value : 0, color: "#772246"};
        for(let key in Data_Referral){
        	for(let individual of Data_Referral[key]){
        		if(individual.label === "Search Engines"){
        				dataArr[0].value += individual.sum_visit_length;
        		}else if(individual.label === "Direct Entry"){
        				dataArr[1].value += individual.sum_visit_length;
        		}else if(individual.label === "Websites"){
        				dataArr[2].value += individual.sum_visit_length;
        		}
        		Totalsum += individual.sum_visit_length;
        	}
        }
 
        const { expandedSector } = this.state;
 
        return (
            <div className="">
                <PieChart
                    data={ dataArr }
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={0}
                    expandOnHover
                    shrinkOnTouchEnd
                    viewBoxWidth = {100}
                />
                <div className="legend">
                {
                    dataArr.map((element, i) => (
                        <div key={i}>
                            <span style={{background: element.color}} className="chartIndicator"></span>
                            <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value} ({((element.value/Totalsum) * 100).toFixed(2)}%)
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}