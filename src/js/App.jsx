import React, { Component } from 'react';
import RadarMap from './components/container/RadarMap.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUnits } from './store.js';

import RadarSettings from './components/container/RadarSettings.jsx';
import '../style/app.css';
import L from 'leaflet';

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
        <div className="left-container">
          <RadarMap />
        </div>
        <div className="right-container">
          <RadarSettings />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  units: state.units
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {setUnits: setUnits}, 
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
