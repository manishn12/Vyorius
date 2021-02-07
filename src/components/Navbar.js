import React from 'react';
import './bootstrap.min.css';
import Picture1 from './Picture1.png';
import Picture2 from './Picture2.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="navbar-brand" style={{cursor:"pointer"}} src={Picture1}alt="Logo" />
        <img className="navbar-brand" style={{cursor:"pointer"}} src={Picture2}alt="Logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div style= {{fontWeight: "bold"}} className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Why Vyorius?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Use Cases</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
             </ul>
        
            <button style= {{fontWeight: "bold"}} className="btn btn-warning my-2 my-sm-0" type="submit">Launch Vyorius ›</button>
         
        </div>
      </nav>
    )
}

export default Navbar
