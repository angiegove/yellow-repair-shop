import React, { Component } from 'react'
import { connect } from 'react-redux'
import MultiSelect from './multiSelect'

class DeviceType extends Component {
  handleClick(value) {
    let action =  this.props.actions.setDeviceType;
    action(value);
  }
  render() {
    let options = ['iPhone', 'MacBook'];
    return(
      <div>
        <h3>Device Type</h3>
        <div>
          <MultiSelect options={options} onClick={this.handleClick.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default DeviceType;
