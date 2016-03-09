import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DeviceModel from '../../components/deviceModel'
import MultiSelect from '../../components/multiSelect'
import DeviceSerialNo from '../../components/deviceSerialNo'
import DeviceScreenSize from '../../components/deviceScreenSize'
import NextButton from '../../components/nextButton'
import * as actions from '../../actions/ticket'


class DeviceInfo extends Component {
  render() {
    let { actions, ticket } = this.props;
    return (
      <div>
        <DeviceModel ticket={ticket} actions={actions}/>
        <DeviceScreenSize ticket={ticket} actions={actions}/>
        <DeviceSerialNo ticket={ticket} actions={actions}/>
        <NextButton url="/deviceInfo"/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
   ticket: state.ticketReducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
   actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo)
