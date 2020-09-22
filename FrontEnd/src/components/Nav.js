import React, { Component } from 'react';
import './Compcss/homePage.css';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';



class Nav extends Component {
    state = {  }
    render() { 
        return (  
                <header className="uo" id="header"style={{paddingTop:+60}} >
                    <div className="container"  >
                
                        <div id="logo" className="pull-left">
                            <Link to="/" className="scrollto"><img src={logo} alt="" title=""/></Link>
                        </div>
                    
                        <nav id="nav-menu-container" style={{marginTop:-50}}>
                            <ul className="nav-menu" >
                            <li className="menu-active"><Link to="/">Home</Link></li>
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#gallery">Gallery</a></li>
                            <li><a href="index.html#sponsors">Sponsors</a></li>
                            <li><a href="#footer">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
        );
    }
}
 
export default Nav;
