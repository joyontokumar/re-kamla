import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import MainMenu from './MainMenu'

class Header extends Component {
  render() {
    return (
      <>
        <TopNavbar />
        <MainMenu />
      </>
    )
  }
}
export default Header
