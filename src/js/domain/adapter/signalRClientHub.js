import * as signalR from '@aspnet/signalr';
import { fetchPlots } from '../../domain/adapter/radarApiAdapter.js';

export function initConnection(){
  const connection = new signalR.HubConnectionBuilder().withUrl('https://localhost:5001/plotHub').build();

  connection.start().then(() => {
    console.log('Connected!'); // eslint-disable-line no-console
  }).catch(function (err) {
    return console.error(err.toString()); // eslint-disable-line no-console
  });

  connection.on('NewDataReceived', () => {
    fetchPlots();
  });
}