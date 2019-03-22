import React, { Component } from 'react';
import {fetchPlots} from '../../domain/adapter/openSkyNetworkdAdapter.js';

class RadarSettings extends Component {
  constructor() {
    super();

    this.fetchData = this.fetchData.bind(this);
  }

  render(){
    return (
      <div>
        <h2>Settings</h2>
        <button onClick={this.fetchData}>click to fetch more new data</button>
      </div>
    );
  }

  fetchData(){
    fetchPlots();
  }
}

export default RadarSettings;