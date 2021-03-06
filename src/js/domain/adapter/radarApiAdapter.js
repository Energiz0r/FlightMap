import Unit from '../model/unit.js';
import Plot from '../model/plot.js';
import { store, setUnits } from '../../store.js';

export async function fetchPlots(){
  const response = await fetch('https://localhost:5001/api/plane');
  const data = await response.json();
  
  let units = [];
  data.forEach(unit => {
    let newUnit = new Unit(unit.icao24);

    unit.plots.forEach((plot) => {
      newUnit.addPlot(new Plot(plot));
    });
    units.push(unit);
  });

  store.dispatch(setUnits(units));
}

export async function fetchDetailedPlane(id){
  const response = await fetch(`https://localhost:5001/api/plane/${id}`);
  const data = await response.json();
  
  let newUnit = new Unit(data.icao24);
  data.plots.forEach((plot) => {
    newUnit.addPlot(new Plot(plot));
  });
  
  return newUnit;
}

