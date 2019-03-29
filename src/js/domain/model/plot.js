class Plot {
  constructor(data){
    this.icao24 = data.icao24;
    this.callsign = data.callsign;
    this.origin_country = data.originCountry;
    this.time_position = data.timePosition;
    this.last_contact = data.lastContact;
    this.longitude = data.longitude;
    this.latitude = data.latitude; 
    this.baro_altitude = data.baroAltitude;
    this.on_ground = data.onGround;
    this.velocity = data.velocity;
    this.true_track = data.trueTrack;
    this.vertical_rate = data.verticalRate;
    this.sensors = data.sensors;
    this.geo_altitude = data.geoAltitude;
    this.squawk = data.squawk;
    this.spi = data.spi;
    this.position_source = data.positionSource;
  }
}

export default Plot;