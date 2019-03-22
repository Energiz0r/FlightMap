class Unit {
  constructor(icao24, callsign){
    this.icao24 = icao24;
    this.callsign = callsign;
    this.plots = [];
  }

  addPlot(plot){
    this.plots.push(plot);
  }
}

export default Unit;