import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import { store } from '../../store.js';
import { fetchPlots } from '../../domain/adapter/openSkyNetworkdAdapter.js';
import AirplaneMarkers from '../presentational/AirplaneMarker.jsx';
import AirplaneHistoricalPaths from '../presentational/AirplaneHistoricalPaths.jsx';

class RadarMap extends Component {
  constructor(){
    super();

    this.state = {
      units: []
    };

    store.subscribe(() => this.setState({units: store.getState().units}));
  }

  render(){
    return (
      <Map center={[65.5, 13]} zoom={5}>
        <TileLayer url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'/>
        <AirplaneMarkers units={this.state.units} />
        <AirplaneHistoricalPaths units={this.state.units}/>
      </Map>
    );
  }
  
  componentDidMount(){
    fetchPlots();
    setInterval(fetchPlots, 2000);
  }
}

export default RadarMap;