import React, { Component } from 'react';
import { Polyline } from 'react-leaflet';

class AirplaneHistoricalPaths extends Component {
  render() {
    return (
      this.props.units.map((unit, i) => {
        let positions = unit.plots.map(plot => [plot.latitude, plot.longitude]);
        return <Polyline key={i} positions={positions} />;
      })
    );
  }
}

export default AirplaneHistoricalPaths;