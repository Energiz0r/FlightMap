import React, { Component } from 'react';

class AirplaneInfoPopup extends Component {
  render(){
    let plane = this.props.plane;
    let lastPlot = plane.plots[plane.plots.length-1];
    return (
      <div className="air-plane-info">
        <h2>{plane.callsign}</h2>
        <hr/>
        <p>Position: {lastPlot.latitude},{lastPlot.longitude}</p>
        <p>Speed: {(lastPlot.velocity*3.6).toFixed(2)} km/h</p>
        <p>Heading: {lastPlot.true_track} degrees</p>
        <p>Altitude: {lastPlot.baro_altitude} meters</p>
      </div>
    );
  }
}

export default AirplaneInfoPopup;