import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { getPlaneIcon } from '../presentational/planeIcon.jsx';
import AirplaneInfoPopup from '../../components/presentational/airplaneInfoPopup.jsx';

class AirplaneMarkers extends Component {
  render() {
    return (
      this.props.units.map((unit, i) => {
        let lastPlot = unit.plots[unit.plots.length-1];
        return <Marker icon={getPlaneIcon(lastPlot.trueTrack)} key={i} position={[lastPlot.latitude, lastPlot.longitude]}>
          <Popup>
            <AirplaneInfoPopup plane={unit} />
          </Popup>
        </Marker>;
      })
    );
  }
}

export default AirplaneMarkers;