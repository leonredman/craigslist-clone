import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <div className="container">
      <header>

      <div className={'left-menu'}>
      <div className={'logo'}>Craigslist</div>
      <div className={'city'}>San Francisco
        <i className={`fas fa-chevron-down`}></i>
      </div>
      </div>

      <div className={'right-menu'}>
      <div className={'user-img'}>img</div>
      <div className={'user-dropdown'}>My Account
        <i className={`fas fa-chevron-down`}></i>
      </div>
      <div className={'post-btn'}>Post to Classifieds</div>

      </div>
       </header>
       </div>

    )
  }
}
