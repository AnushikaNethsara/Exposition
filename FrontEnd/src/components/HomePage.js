import React, { Component } from 'react';
import './Compcss/homePage.css';
import {Link} from 'react-router-dom'
import WOW from 'wowjs';
import $ from 'jquery';
import Nav from './Nav';
import Footer from './Footer';

import Navbar from './Nav';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import AOS from 'aos';



import logo from '../img/logo.png';
import introbg from '../img/about-bgg.gif';
import aboutbg from '../img/intro-bg.jpg';
import g1 from '../img/gallery/1.jpg';
import g2 from '../img/gallery/2.jpg';
import g3 from '../img/gallery/3.jpg';
import g4 from '../img/gallery/4.jpg';
import g5 from '../img/gallery/5.jpg';
import g6 from '../img/gallery/6.jpg';
import g7 from '../img/gallery/7.jpg';
import g8 from '../img/gallery/8.jpg';
import t1 from '../img/testi/1.jpg';
import t2 from '../img/testi/2.jpg';
import t3 from '../img/testi/3.jpg';
import s1 from '../img/sponsors/1.png';
import s2 from '../img/sponsors/2.png';
import s3 from '../img/sponsors/3.png';
import s4 from '../img/sponsors/4.png';
import s5 from '../img/sponsors/5.png';
import s6 from '../img/sponsors/6.png';
import s7 from '../img/sponsors/7.png';
import s8 from '../img/sponsors/8.png';
import logoo from '../img/logoos.png';

AOS.init({
    duration: 1200,
  })
  

class HomePage extends Component {
    componentDidMount(){
        new WOW.WOW().init();
        document.title = "Home"
    }
    state = {  }
    render() { 
        return (  
            <div>
                {/* Header */}
                <div id="header1"></div>
                <Nav></Nav>
               


                {/* Intro section */}
                <section id="intro" style={{background:`url(${introbg}) no-repeat`, backgroundSize:"cover"}}>
                    <div className="intro-container wow fadeIn">
                        <h1 className="mb-4 pb-0">BRIDGES IT , MANAGEMENT<br/><span>&</span> ENTREPRENEURSHIP </h1>
                        {/* <p className="mb-4 pb-0">DEPARTMENT OF INDUSTRIAL MANAGEMENT</p>
                        <p className="mb-4 pb-0">UNIVERSITY OF KELANIYA</p> */}
                        {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
                        {/* <a href="#blog" className="about-btn scrollto">Artical Blog</a> */}
                        <Link to="/iuac" href="#forum" className="about-btn scrollto" style={{padding:"20px"}}>Inter University Artical Competition</Link>
                    </div>
                </section>


                {/* About section */}
                <section id="about" style={{background:`url(${aboutbg})no-repeat`, backgroundSize:"cover"}}>
                    <div className="container"  data-aos="fade-right">

                    <div className="row">
                      <center>  <div className="col-lg-9">
                      <img src={logo} alt="" title="" style={{width:"60%"}}/>
                           <b> <p style={{fontSize:"16px", textAlign:"center"}}> Exposition is a platform where IT, Management and Entrepreneurship bridge together to empower the industry of the country and
                                expose the capability and talents of the Mitians, organized launched by the Industrial Management Science Students Associations 
                                (IMSSA), the official student body of the Department of Industrial Management, University of Kelaniya.</p></b>
                            </div> </center><br/><br/>
                          
                        </div>
                        <div className="row">
                        <div className="col-lg-5">
                            <h2>Exposition Magazine </h2>
                            <p>With the vision of “A Thought Leader in Digital Transformation” the
department of Industrial Management publishes the Exposition Magazine, the
most outstanding magazine of the year to bridge the gap between Management
and IT platforms. It is one of the leading university business magazines to mark
the footprints of undergraduates of the Department of Industrial Management
in the Cooperate World. With the aim of bridging these platform gaps, through
the latest technology and innovation, analytical and research-based
information to undergraduates and professionals, while bringing school
students, undergraduates, entrepreneurs and industry to a common platform.  </p>
                            </div> 
                            <div className="col-lg-7">
                            <h2>Exposition Entrepreneurial Community </h2>
                            <p>The Exposition Entrepreneur Community is a platform for entrepreneurs in
different industrial fields in Sri Lanka to discover and discuss new ideas. This will be helpful for
entrepreneurs to develop and maintain the success of their businesses, and as a result, they
will contribute to the development of the economy of the country as well.
The main stakeholders for the Entrepreneur Community will be the entrepreneurs from different
fields from industries. Entrepreneurs are the innovators and risk-takers; and they are the
sources of new ideas, that can involve goods, services or business procedures. They play a key
role in the economy by contributing their skills to bring forth valuable ideas and innovations to
the industry.
 </p>
                            </div>
                            {/* <div className="col-lg-3">
                            <h3>Vision </h3>
                            <p>To make EXPOSITION the most respected and leading business title groomed by an academic institution. </p>
                            </div>
                            <div className="col-lg-3">
                            <h3>Mission </h3>
                            <p>Bridges IT, Management & Entrepreneurship. </p>
                            </div>  */}
                        </div>
                    </div>
                </section>


                {/* Gallery section */}

                <section id="gallery" className="wow fadeInUp">

                    <div className="container" data-aos="fade-left">
                        <div className="section-header">
                            <h2>Gallery</h2>
                            <p>Check our gallery from the recent events</p>
                        </div>
                    </div>

                    <div className="owl-carousel gallery-carousel">
                        <a href="assets/img/gallery/1.jpg" className="venobox" data-gall="gallery-carousel"><img src={g1} alt=""/></a>
                        <a href="assets/img/gallery/2.jpg" className="venobox" data-gall="gallery-carousel"><img src={g2} alt=""/></a>
                        <a href="assets/img/gallery/3.jpg" className="venobox" data-gall="gallery-carousel"><img src={g3} alt=""/></a>
                        <a href="assets/img/gallery/4.jpg" className="venobox" data-gall="gallery-carousel"><img src={g4} alt=""/></a>
                        <a href="assets/img/gallery/5.jpg" className="venobox" data-gall="gallery-carousel"><img src={g5} alt=""/></a>
                        <a href="assets/img/gallery/6.jpg" className="venobox" data-gall="gallery-carousel"><img src={g6} alt=""/></a>
                        <a href="assets/img/gallery/7.jpg" className="venobox" data-gall="gallery-carousel"><img src={g7} alt=""/></a>
                        <a href="assets/img/gallery/8.jpg" className="venobox" data-gall="gallery-carousel"><img src={g8} alt=""/></a> 
                    </div>

                    <Link to="/gallery" className="about-btn scrollto" style={{float: "right"}}>Show More</Link> 

                </section>


                {/* Testimoniel */}
                <section id="testimonial" >
                    <div className="container" data-aos="zoom-in">
                        <div className="row">
                        <div className="col-md-8 col-center m-auto">
                            <h2>Testimonials</h2>
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* <!-- Carousel indicators --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>   
                            {/* <!-- Wrapper for carousel items --> */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                <div className="img-box"><img src={t1} alt=""/></div>
                                <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                                <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
                                </div>
                                <div className="item carousel-item">
                                <div className="img-box"><img src={t2} alt=""/></div>
                                <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                                <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
                                </div>
                                <div className="item carousel-item">
                                <div className="img-box"><img src={t3} alt=""/></div>
                                <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
                                </div>
                            </div>
                            {/* <!-- Carousel controls --> */}
                            <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                
                </section>


                {/* Sponsors section */}
                <section id="sponsors"  >

                    <div class="container" data-aos="flip-left">
                        <div className="section-header">
                            <h2>Sponsors</h2>
                        </div>

                        <div id="spon" className="row no-gutters sponsors-wrap clearfix">

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s1} className="img-fluid" alt=""/>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s2} className="img-fluid" alt=""/>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s3} className="img-fluid" alt=""/>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s4} className="img-fluid" alt=""/>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s5} className="img-fluid" alt=""/>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s6} className="img-fluid" alt=""/>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s7} className="img-fluid" alt=""/>
                            </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="sponsor-logo">
                                <img src={s8} className="img-fluid" alt=""/>
                            </div>
                        </div>

                    </div>

                    </div>

                </section>

                {/* Footer section */}

                <Footer/>

                <a href="#" className="back-to-top"><i className="fa fa-angle-up"></i></a>





        <div></div>


            </div>
         
            
           
        );
    }
}
 
export default HomePage;
