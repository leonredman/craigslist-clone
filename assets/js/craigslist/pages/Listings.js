import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  loopItems = () =>{
    let testArray = [1,2,3,4,5,6,7,8]
    return testArray.map((item, i) => {
      return(
        <div className="item" key={i}>
        <div className="image">
        <div className="price">
        $8900
        </div>
        image
        </div>
        <div className="details">
        <i className="far fa-star"></i>
          <h5>2011 bmw m3</h5>
          <h6>mesa, az</h6>
        </div>
        </div>



      )
    })
  }

  render () {
    const {match, location, history} = this.props
    return (

      <div className="listings-page">
        <div className="container">
          <section id="filter">
              <div className="form-group price">
              <label>Price</label>
                <div className="min-max">
                <select name="min-price" className="min-price">
                  <option value="0">0</option>
                </select>
                <select name="max-price" className="max-price">
                  <option value="1000">1000</option>
                </select>
                </div>
            </div>

            <div className="form-group make">
              <label>Make</label>
              <select name="make" className="make">
                <option value="bmw">bmw</option>
              </select>
            </div>

            <div className="form-group model">
              <label>Model</label>
              <select name="model" className="model">
                <option value="bmw">bmw</option>
              </select>
            </div>

            <div className="form-group button">
              <div className="primary-btn">Update</div>
                <div className="reset-btn">Reset</div>
            </div>
          </section>
        </div>

          <section id="list-view">
            <div className="container">
              <div className="white-box">
            <section className="change-view">
              <div className="form-group view-dropdown">
                <select name="select-view" className="select-view">
                  <option value="gallery">Gallery View</option>
                  <option value="gallery">List View</option>
                  <option value="thumb">Thumb View</option>
                </select>
              </div>

              <div className="form-group sort-dropdown">
                <select name="sort-dropdown" className="sort-dropdown">
                  <option value="gallery">Newest</option>
                  </select>
              </div>
            </section>
          <section className="all-items">
          {this.loopItems()}


          </section>
          </div>
          </div>
          </section>
          </div>

  )}
}
