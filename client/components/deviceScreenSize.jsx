import React, { Component } from 'react';
import { connect } from 'react-redux'
import MultiSelect from './multiSelect'

class DeviceScreenSize extends Component {
  handleClick(value) {
    let action =  this.props.actions.setDeviceScreenSize;
    action(value);
  }
  render() {
    let ticket = this.props.ticket;
    let options = [ '13"', '15"']

    if(ticket.get('device_type') === 'MacBook') {
      return(
        <div>
          <h3>Device Model</h3>
          <MultiSelect options={options} onClick={this.handleClick.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }
}

export default DeviceScreenSize;
