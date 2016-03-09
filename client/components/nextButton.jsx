import React, { Component } from 'react'
import { Link } from 'react-router'
import {nextButton} from './style.css'

class NextButton extends Component {
  render() {

    let url = this.props.url;
    return (
      <Link to={url} className={nextButton}>Next</Link>
    )
  }
}


export default NextButton;
