import React, { Component } from 'react';

class RadarSettings extends Component {
  constructor() {
    super();

    this.fetchData = this.fetchData.bind(this);
  }

  render(){
    return (
      <div>
        <h2>Settings</h2>
      </div>
    );
  }
}

export default RadarSettings;