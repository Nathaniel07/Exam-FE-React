
import {
    Link
  } from 'react-router-dom';

function Navbar () {

   return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">FE Exam</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/portfolio">Portfolio <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/javascript-skills">JavaScript Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sum-two-numbers">Sum Two Numbers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/crud-app">CRUD App</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
   )
   
}

export default Navbar;


