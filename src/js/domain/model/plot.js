class Plot {
  constructor(data){
    this.icao24 = data[0];
    this.callsign = data[1];
    this.origin_country = data[2];
    this.time_position = data[3];
    this.last_contact = data[4];
    this.longitude = data[5];
    this.latitude = data[6]; 
    this.baro_altitude = data[7];
    this.on_ground = data[8];
    this.velocity = data[9];
    this.true_track = data[10];
    this.vertical_rate = data[11];
    this.sensors = data[12];
    this.geo_altitude = data[13];
    this.squawk = data[14];
    this.spi = data[15];
    this.position_source = data[16];
  }
}

export default Plot;