import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.css'
import DeviceType from '../../components/deviceType'
import DeviceModel from '../../components/deviceModel'
import MultiSelect from '../../components/multiSelect'
import DeviceSerialNo from '../../components/deviceSerialNo'
import DeviceScreenSize from '../../components/deviceScreenSize'
import NextButton from '../../components/nextButton'
import * as actions from '../../actions/ticket'


class App extends Component {
  render() {
    let { actions, ticket } = this.props;
    return (
      <div className={style.normal}>
        <DeviceType ticket={ticket} actions={actions}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
