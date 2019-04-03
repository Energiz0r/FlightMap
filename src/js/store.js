import { createStore } from 'redux';

// Actions

export const SET_UNITS = 'SET_UNITS';
export const SELECT_MARKER = 'SELECT_MARKER';


//Action Creators

export function setUnits(units) {
  return { type: SET_UNITS, units:units };
}

export function selectMarker(unit) {
  return { type: SELECT_MARKER, unit:unit };
}

// Reducers

const initialState = {
  units: [],
  selectedMarker: null
};

function radarApp(state = initialState, action) {
  switch (action.type) {
  case SET_UNITS:
    return Object.assign({}, state, {
      units: action.units
    });
  case SELECT_MARKER:
    return Object.assign({}, state, {
      selectedMarker: action.unit
    });
  default:
    return state;
  }
}

// Store

export const store = createStore(radarApp);