import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Visitors from './components/visitors';
import UniqueVisitors from './components/unique_visitors';
import BounceRate from './components/bounce_rate';
import PieComponent from './components/piechart.js';
import GoogleMap from './components/google_map';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
class App extends Component {
  render(){
    return(
        <div>
          <SortableComponent />
          <div className="row" >
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

const SortableItem = SortableElement(({value}) =>
  <div className="col-md-4">
  {value}
  </div>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="row firstRow">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  state = {
    items: [ <Visitors />, <UniqueVisitors />, <BounceRate /> ],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} axis="xy"/>;
  }
}

export default App;
