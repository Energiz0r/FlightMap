import '../style/app.css';
import 'leaflet/dist/leaflet.css';

import React, { Component } from 'react';
import L from 'leaflet';

import RadarMap from './components/container/RadarMap.jsx';
import { initConnection } from './domain/adapter/signalRClientHub.js';

//Fix marker when react+webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class App extends Component {
  render(){
    return (
      <div className="root fullwindow">
        <RadarMap />
      </div>
    );
  }

  componentDidMount(){
    initConnection();
  }
}

export default App;
