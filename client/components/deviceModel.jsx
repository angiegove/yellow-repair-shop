import React, { Component } from 'react';
import { connect } from 'react-redux'
import MultiSelect from './multiSelect'

class DeviceModel extends Component {
  handleClick(value) {
    let action =  this.props.actions.setDeviceModel;
    action(value);
  }
  render() {
    let ticket = this.props.ticket;
    let options = ['iPhone6s', 'iPhone6', 'iPhone5s', 'iPhone5'];

    if(ticket.get('device_type') === 'MacBook') {
      options = [ 'MacBook Air', 'MacBook Pro']
    }

    if(ticket.get('device_type')) {
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

export default DeviceModel;
