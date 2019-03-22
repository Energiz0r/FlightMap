import React, { Component } from 'react';
import AdsbAdapter from '../../domain/adapter/openSkyNetworkdAdapter.js';

class RadarSettings extends Component {
  constructor(props) {
    super(props);
    this.adapter = new AdsbAdapter();
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
    this.adapter.fetchPlots();
  }
}

export default RadarSettings;