import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarTogglerDemo03"
    aria-controls="navbarTogglerDemo03"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <a className="navbar-brand" href="#">
    Cart
  </a>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
       <Link to ="/">
        <div style={{padding:"1em"}}>Home</div>
           </Link><span className="sr-only">(current)</span>
        
      </li>
      <li className="nav-item">
      <Link to ="/About">
      <div style={{padding:"1em"}}>About Us</div></Link>
      </li>
      <li className="nav-item">
      <Link to ="/login">
      <div style={{padding:"1em"}}>Login</div></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0" style={{padding:"1em"}}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
    <Link to='/cart'><button type="button" class="btn btn-primary">
  Cart  <span class="badge badge-light">{this.props.count}</span>
</button></Link>
  </div>
</nav>

      </div>
    )
  }
}
