import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './home.scss'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
  }

  render () {
    return (
      <div className="home">
        This is Home page
      </div>
    )
  }
}

export default Home
