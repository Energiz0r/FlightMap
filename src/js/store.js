import { createStore } from 'redux';

// Actions

export const SET_UNITS = 'SET_UNITS';


//Action Creators

export function setUnits(units) {
  return { type: SET_UNITS, units:units };
}


// Reducers

const initialState = {
  units: []
};

function radarApp(state = initialState, action) {
  switch (action.type) {
  case SET_UNITS:
    return Object.assign({}, state, {
      units: action.units
    });
  default:
    return state;
  }
}


// Store

export const store = createStore(radarApp);