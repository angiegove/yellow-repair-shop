import React, { Component } from 'react'
import {Button, ButtonGroup} from 'react-bootstrap'
import { btn, btnblock, btndefault, nextButton } from './style.css'
import className from 'classname'

class MultiSelect extends Component {
 handleClick(e) {
   this.props.onClick(e.target.value);
 }

 render() {
   let buttonClass = className(btn, btnblock, btndefault);
   let options = this.props.options;
   return (
     <ButtonGroup>
       {options.map(
         option => <Button className={buttonClass} key={option} onClick={this.handleClick.bind(this)} value={option}>{option}</Button>
       )}
     </ButtonGroup>
   )
 }
}

export default MultiSelect
