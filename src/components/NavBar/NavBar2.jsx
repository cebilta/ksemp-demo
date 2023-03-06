import React from 'react'
import { Link , useLocation} from 'react-router-dom';

export default function NavBar2() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="navbar-brand" href="#">Navbar</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Link</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" href="#">Disabled</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
   </nav>
    </div>
  )
}
