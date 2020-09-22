import React, { Component } from 'react';
import './Compcss/homePage.css';
import WOW from 'wowjs';
import $ from 'jquery';
import Footer from './Footer';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import logo from '../img/logo.png';
import g1 from '../img/gallery/1.jpg';
import g2 from '../img/gallery/2.jpg';
import g3 from '../img/gallery/3.jpg';
import g4 from '../img/gallery/4.jpg';
import g5 from '../img/gallery/5.jpg';
import g6 from '../img/gallery/6.jpg';
import g7 from '../img/gallery/7.jpg';
import g8 from '../img/gallery/8.jpg';
import Nav from './Nav';

class Gallery extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    state = {  }
    render() { 
        return (  
            <div>
                <div id="header1"></div>
                <Nav/>
                {/* <header id="header">
                    <div className="container">
                
                        <div id="logo" className="pull-left">
                            <a href="#header1" className="scrollto"><img src={logo} alt="" title=""/></a>
                        </div>
                    
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                            <li className="menu-active"><a href="#header1">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#sponsors">Sponsors</a></li>
                            <li><a href="#footer">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header> */}

                {/* <main id="main" class="main-page"></main> */}

                
                <div  style={{marginBottom:"20px", paddingBottom:"50px"}}>
                <section id="gallery1" class="wow fadeInUp">


                    <div class="container">
                    <div class="section-header">
                        <h2>Gallery</h2>
                        <p>Check our gallery from the recent events</p>
                    </div>
                    </div>


                    <div class="responsive">
                    <div class="gallery1">
                    <a target="_blank" href="assets/img/gallery/1.jpg" ><img src={g1} alt="" style={{width:'100%'}}/></a>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery1">
                    <a target="_blank" href="assets/img/gallery/2.jpg" ><img src={g2} alt="" style={{width:"100%"}}/></a>
                    <div class="desc"></div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery1">
                    <a target="_blank" href="assets/img/gallery/3.jpg" ><img src={g3} alt="" style={{width:'100%'}}/></a>
                    <div class="desc"></div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery1">
                    <a target="_blank" href="assets/img/gallery/4.jpg" ><img src={g4} alt="" style={{width:'100%'}}/></a>
                    <div class="desc"></div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery1">
                        <a target="_blank" href="assets/img/gallery/5.jpg" ><img src={g5} alt="" style={{width:'100%'}}/></a>
                        <div class="desc"></div>
                    </div>
                    </div>

                    <div class="responsive">
                        <div class="gallery1">
                        <a target="_blank" href="assets/img/gallery/6.jpg" ><img src={g6} alt="" style={{width:'100%'}}/></a>
                        <div class="desc"></div>
                        </div>
                        </div>

                        <div class="responsive">
                        <div class="gallery1">
                            <a target="_blank" href="assets/img/gallery/7.jpg" ><img src={g7} alt="" style={{width:'100%'}}/></a>
                            <div class="desc"></div>
                        </div>
                        </div>

                        <div class="responsive">
                        <div class="gallery1">
                            <a target="_blank" href="assets/img/gallery/8.jpg" ><img src={g8} alt="" style={{width:'100%'}}/></a>
                            <div class="desc"></div>
                        </div>
                    </div>

                   

                    
                </section>
                </div>
               
                <Footer  />
            </div>
        );
    }
}
 
export default Gallery;