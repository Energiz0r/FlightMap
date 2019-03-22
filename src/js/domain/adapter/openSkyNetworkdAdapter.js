import Unit from '../model/unit.js';
import Plot from '../model/plot.js';
import { store, setUnits } from '../../store.js';

class OpenSkyNetworkAdapter {
  async fetchPlots(){
    let units = store.getState().units;
    const response = await fetch('https://opensky-network.org/api/states/all?lamin=57&lomin=4&lamax=71&lomax=17');
    const data = await response.json();
    data.states.forEach(state => {
      let plot = new Plot(state);
      let unit = units.find(unit_1 => (unit_1.icao24 === plot.icao24));
      if (!unit) {
        unit = new Unit(plot.icao24, plot.callsign);
        units.push(unit);
      }
      unit.addPlot(plot);
    });

    store.dispatch(setUnits(units));
  }
}

export default OpenSkyNetworkAdapter;