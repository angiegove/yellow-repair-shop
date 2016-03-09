import React, { Component } from 'react';
import App from './App'
import DeviceInfo from './DeviceInfo'

class Master extends Component {
 render() {
   return (
     <div>
       <h1>Create a new ticket</h1>
       {this.props.children}
     </div>
   )
 }
}

export default Master
