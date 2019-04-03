import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { getPlaneIcon } from '../../helpers/PlaneIcon.jsx';
import AirplaneInfoPopup from './AirplaneInfoPopup.jsx';
import { store, selectMarker } from '../../store.js';

class AirplaneMarkers extends Component {
  constructor() {
    super();

    this.state = {
      selectedUnit: null
    };

    store.subscribe(() => 
    {
      this.setState({selectedUnit: store.getState().selectedMarker});
    });

    this.handleMarkerClicked = this.handleMarkerClicked.bind(this);
  }

  render() {
    let units = this.props.units.filter((u) => {
      let lastPlot = u.plots[u.plots.length-1];
      return lastPlot.longitude && lastPlot.latitude && lastPlot.trueTrack;
    });
    
    return (
      units.map((unit) => {
        let lastPlot = unit.plots[unit.plots.length-1];
        return <Marker icon={getPlaneIcon(lastPlot.trueTrack)} 
          key={unit.icao24} 
          position={[lastPlot.latitude, lastPlot.longitude]}
          onClick={((e) => this.handleMarkerClicked(e, unit))}>
          <Popup>
            <AirplaneInfoPopup selectedUnit={unit} />
          </Popup>
        </Marker>;
      })
    );
  }

  handleMarkerClicked(e, unit){
    store.dispatch(selectMarker(unit));
  }
}

export default AirplaneMarkers;