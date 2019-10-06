import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/menu.scss';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="logo"><img src={logo} alt="store" /></Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/cart"><button><i className="fa fa-cart-plus" />Cart</button></Link></li>
                </ul>
            </header>
        )
    }
}
