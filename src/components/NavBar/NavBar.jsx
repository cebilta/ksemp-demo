import { Link , useLocation} from 'react-router-dom';
import './NavBar.css'

function NavBar() {


    const location = useLocation();
    console.log(location)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container ">
        <Link className="navbar-brand ml-auto"  to="/"> <abbr title='kerala state employees'>KSEMP</abbr></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={`nav-item ${location.pathname === "/" ? 'active' : ''}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/about" ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </Link>
        <div className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item bg-dark" to="/action">GPF</Link>
          <Link className="dropdown-item bg-dark" to="#">Salary Slip</Link>
        </div>
      </li>
          </ul>
          <div className='my-2 my-lg-0 ml-auto' >
                <Link className='nav-link my-2 my-lg-0 ' to="/login" >
                <button className={`btn btn-outline-success btn-lg my-1 mr-sm-1  ${location.pathname === "/login" ? 'activebtn' : ''}`}>Sign in</button>
                </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

