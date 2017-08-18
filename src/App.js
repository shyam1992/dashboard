import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Visitors from './components/visitors';
import UniqueVisitors from './components/unique_visitors';
import BounceRate from './components/bounce_rate';
import PieComponent from './components/piechart.js';
import GoogleMap from './components/google_map';
// import dragula from 'react-dragula';
// import Sortable from './components/sortable';
// import { SortablePane, Pane } from 'react-sortable-pane';



class App extends Component {
  // componentDidMount(){
  //   let container = ReactDOM.findDOMNode(this.refs.row1);
  //   dragula([container]);
  // }
  render() {
    return (
      <div>
        <div className="row firstRow" ref="row1">
          <div className="col-md-4">
              <Visitors />
          </div>
          <div className="col-md-4">
              <UniqueVisitors />
          </div>
          <div className="col-md-4">
              <BounceRate />
          </div>
        </div>
        <div className="row" ref="row2">
          <div className="col-md-7 mapCol">
              <GoogleMap />
          </div>
          <div className="col-md-5 pieChartCol">
            <PieComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
