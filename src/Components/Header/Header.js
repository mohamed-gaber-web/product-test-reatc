import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='sub-header container'>
                <div className='row'>
                    <div className='col-md-3 logo'>
                        <h1> eCommerce React </h1>
                    </div>
                    <div className='col-md-7 navbar'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">Home </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="all-products">shop</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="#">Portfolios</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="about">About us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="#">blogs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="contact">Contact us</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className='col-md-2 header-info'>
                        <ul>
                            <li> <NavLink to=''> <i class="fas fa-cart-plus"></i></NavLink> </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='header-text'>
                <div className='container'>
                    <h2> Hello! Theme eCommerce React Js  </h2>
                    <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod  </p>
                </div>
            </div>
        </div>
    );
}

export default Header;