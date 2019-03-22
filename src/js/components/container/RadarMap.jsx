import 'leaflet/dist/leaflet.css';
import AdsbAdapter from '../../domain/adapter/openSkyNetworkdAdapter.js';
import AirplaneInfoPopup from '../../components/presentational/airplaneInfoPopup.jsx';
import React, { Component } from 'react';
import { store } from '../../store.js';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import {getPlaneIcon} from '../presentational/planeIcon.jsx';

class RadarMap extends Component {
  constructor(props){
    super(props);

    this.adsbAdapter = new AdsbAdapter();
    this.state = {
      units: [], 
      markers: []
    };

    store.subscribe(() => this.setState({units: store.getState().units}));
  }

  render(){
    return (
      <Map center={[65.5, 13]} zoom={5}>
        <TileLayer url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'/>
        {
          this.state.units.map((unit, i) => {
            let lastPlot = unit.plots[unit.plots.length-1];
            return <Marker icon={getPlaneIcon(lastPlot.true_track)} key={i} position={[lastPlot.latitude, lastPlot.longitude]}>
              <Popup>
                <AirplaneInfoPopup plane={unit} />
              </Popup>
            </Marker>;
          })
        }
        {
          this.state.units.map((unit, i) => {
            let positions = unit.plots.map(plot => [plot.latitude, plot.longitude]);
            return <Polyline key={i} positions={positions} />;
          })
        }
      </Map>
    );
  }
  
  componentDidMount(){
    this.adsbAdapter.fetchPlots();
    setInterval(this.adsbAdapter.fetchPlots, 12000);
  }
}

export default RadarMap;