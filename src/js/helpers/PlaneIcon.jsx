import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

export function getPlaneIcon(degrees){
  let iconMarkup = renderToStaticMarkup(<div style={{transform: `rotate(${degrees-90}deg)`}}><FontAwesomeIcon icon='plane'/></div>);
  return divIcon({html: iconMarkup});
}