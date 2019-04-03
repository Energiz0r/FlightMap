import React, { Component } from 'react';
import { fetchDetailedPlane } from '../../domain/adapter/radarApiAdapter.js';

class AirplaneInfoPopup extends Component {
  constructor(){
    super();

    this.state = {
      plane: null
    };
  }

  componentDidMount() {
    this._asyncRequest = fetchDetailedPlane(this.props.selectedUnit.icao24).then(
      plane => {
        this._asyncRequest = null;
        this.setState({plane});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (this.state.plane === null) {
      return (<div>Awesome No data</div>)
    } else {
      let plane = this.state.plane;
      let lastPlot = plane.plots[plane.plots.length-1];
      return (
        <div className="air-plane-info">
          <h2>{lastPlot.callsign}</h2>
          <hr/>
          <p>Position: {lastPlot.latitude},{lastPlot.longitude}</p>
          <p>Speed: {(lastPlot.velocity*3.6).toFixed(2)} km/h</p>
          <p>Heading: {lastPlot.true_track} degrees</p>
          <p>Altitude: {lastPlot.baro_altitude} meters</p>
        </div>
      )
    }
  }
}

export default AirplaneInfoPopup;