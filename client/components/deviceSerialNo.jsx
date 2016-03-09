import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Input} from 'react-bootstrap'
import {input} from './style.css'

class DeviceSerialNo extends Component {
  handleKeyUp(e) {
    let action =  this.props.actions.setDeviceSerialNo;
    if(e.keyCode === 13) {
      action(e.target.value);
    }
  }

  render() {
    let ticket = this.props.ticket;
    let options = this.props.options;

    if(ticket.get('device_type')) {
      return(
        <div>
          <h3>Device Serial No</h3>
            <Input type="text"  className={input} onKeyUp={this.handleKeyUp.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }
}

export default DeviceSerialNo;
