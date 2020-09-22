import React, { Component } from 'react';
import Form from "./Form";
import "./Compcss/iuac.css";
import logo from '../img/IUAC/logo.png';
import introbg from "../img/IUAC/intro-bg.jpg";
import imssa from '../img/IUAC/immsaLogo.png';
import uok from '../img/IUAC/uokLogo.png';
import about from '../img/IUAC/about-bg.jpg';
import venue from '../img/IUAC/venue-info-bg.jpg';
import Footer  from "./Footer";
import {Link} from "react-router-dom";
import WOW from "wowjs";
import Icon from '@material-ui/core/Icon';


class IUAC extends Component {
  componentDidMount(){
    new WOW.WOW().init();
    document.title = "Home"
  }
  state = {  }
  render() {
    return (


      <div>
         {/*======= Header ======= */}
        {/*<header id="header">*/}
        {/*  <div className="container">*/}

        {/*    <div id="logo">*/}
        {/*      <a href="index.html" className="scrollto"><img src={logo} alt="" title="" /></a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</header>*/}


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





         {/*End Header */}


         {/*Intro Section*/}
        <section id="intro" style={{background:`url(${introbg}) center`,backgroundSize: "cover",overflow: "hidden",position: "relative",width: "100%",height: "100vh"}}>
          <div className="intro-container wow fadeIn" data-aos="zoom-out-up" data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
            <h1 className="mb-4 pb-0">EXPOSITION <span>2020</span></h1>
            <p className="mb-4 pb-0">MAGAZINE THAT BRIDGES IT AND MANAGEMENT</p>
            <a href="index.html" className="scrollto"><img src={logo} alt="" title=""/></a>
            {/*<a href="#forum" class="about-btn scrollto">Registrations are now open !</a>*/}
          </div>
        </section>
         {/*End Intro Section*/}


         {/*logo seection*/}
        <section id="logo1" >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-center m-auto">
                <h2 data-aos="fade-right">The Most Awaited Inter-University Article Competition Is Here ! </h2>
                <div>
                  <div>
                    <table className="center1">
                      <td className="im"><div className="column">
                        <img src={uok} alt="" data-aos="flip-right"/>


                      </div></td>
                      <td className="im"><div className="column">
                        <img src={imssa} alt="" data-aos="flip-left"/>


                      </div></td>
                    </table>


                    <center>
                      <p className="org" data-aos="fade-left"> Organized By,<br/>
                        Industrial Management Science Students’ Association, University of Kelaniya</p>

                    </center>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>
        {/*End of logo section*/}

        {/*About Section */}
        <section id="about" style={{background:`url(${about}) `}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12" data-aos="fade-right">
                <h2>What is IUAC? </h2>
                <p>The Exposition 2020 is proudly presenting the Inter University Article Competition for the first time<br/>
                throughout its journey. We are inviting undergraduates all around the island to be a part of this kick start.<br/>
              Let your innovative and creative point of view come to light !!!<br/>
            Join with us
            !!! </p>
      </div>
        <div className="col-lg-12" data-aos="fade-left">
          <h2>Why we initiated it? </h2>
          <p>There are plenty of undergraduates out there, holding on to their valuable thoughts, their philosophical<br/>
          mindset, their innovations and much more. We want to appraise the real value of their unspoken<brf/>
          perspectives. That is why we are stepping up to make sure that each and every one of them have a platform to<br/>
          express themselves, as we strongly believe they have much to offer for the time ahead. </p>
        </div>
        </div>
      </div>
      </section>
      {/*End About Section*/}

        {/*Things to remember section*/}
        <center>
          <div className="things"><h1 data-aos="zoom-in-down">Things to remember</h1></div>
        </center>

        <table className="center">
          <tr>

          <td >
            <ul style={{listStyleType:"none"}} data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
              <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>
                <strong>Entrepreneurship, Management & IT </strong>are the Themes of the Exposition 2020. Consider the themes when writing the article</li>

              <li>Articles should be written in good English (UK).</li>
              <br/>
                <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Articles should be approximately 1300-1500 in length.This may not include images, links, quoted texts etc. </li> <br/>
                <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Articles should be written as continuous narrative in a chapter or article style, not as lists of points. </li> <br/>
                <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Structure of the texts should be relatively formal. </li> <br/>
                <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Do not mix the tenses if the state or the timeframe is same. </li>
            </ul>
          </td>

          <td >
            <ul style={{listStyleType:"none"}} data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
              <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Articles should be well-researched & therefore should cover unique areas. </li> <br/>
              <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Plagiarism is prohibited. Reproduced information from the web is not accepted. </li> <br/>
              <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Articles should be your own original work. You can quote/include other people’s works so long you include correct citations, references & attributions & their work is not plagiarized, or copyright protected. i.e. You may include all the sources of the article in a separate document along with a summary about the article. </li>
              <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Facts & claims should be verifiable. </li> <br/>
              <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Articles should represent viewpoints fairly & without bias and be focused on the main topic. </li> <br/>
              <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Articles should be provided with a concise & specific title that clearly reflects the content of the article. </li>

            </ul>
          </td>
        </tr>
        <tr>
          <td ><ul style={{listStyleType:"none"}} data-aos="fade-right"
                   data-aos-offset="100"
                   data-aos-easing="ease-in-sine">
            <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Articles should be illustrated with appropriate & high resolution (300 dpi) images.</li> <br/>
            <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Avoid Clip Arts at all purposes. You may use graphs, charts & other graphical tools.</li> <br/>
            <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Images should be placed in a separate folder & renamed according to the purpose of it to the article. (Selfexplanatory) i.e. The image should be named based on its purpose & the part where it is intended to use should be mentioned. If graphs or charts are used, the name should contain the purpose & what it shows. </li>
          </ul></td>
          <td ><ul style={{listStyleType:"none"}} data-aos="fade-left"
                   data-aos-offset="100"
                   data-aos-easing="ease-in-sine">
            <li><i className="fa fa-paper-plane" aria-hidden="true" style={{color:'rgb(221, 209, 44)',paddingRight:"12px"}}></i>Scores will be based on;
              <br/> <br/>
                <i className="fa fa-plus" style={{color:'rgb(221, 209, 44)',paddingLeft:"12px",paddingRight:"12px"}} aria-hidden="true"></i>Grammar Correctness<br/> <br/>
                <i className="fa fa-plus" style={{color:'rgb(221, 209, 44)',paddingLeft:"12px",paddingRight:"12px"}} aria-hidden="true"></i>Clarity<br/> <br/>
                <i className="fa fa-plus" style={{color:'rgb(221, 209, 44)',paddingLeft:"12px",paddingRight:"12px"}} aria-hidden="true"></i>Content & Organization<br/> <br/>
                <i className="fa fa-plus" style={{color:'rgb(221, 209, 44)',paddingLeft:"12px",paddingRight:"12px"}} aria-hidden="true"></i>Engagement Level<br/> <br/>
                <i className="fa fa-plus" style={{color:'rgb(221, 209, 44)',paddingLeft:"12px",paddingRight:"12px"}} aria-hidden="true"></i>Plagiarism free<br/> <br/>
                <i className="fa fa-plus" style={{color:'rgb(221, 209, 44)',paddingLeft:"12px",paddingRight:"12px"}} aria-hidden="true"></i>Spelling Check </li>
          </ul></td>
        </tr>
      </table>
        {/*End of the things*/}

         {/*Time line  */}
        <Form/>




        {/*Award section*/}
        <section id="about" style={{background:`url(${about}) `,backgroundAttachment: 'fixed'}}>
          <section id="award" style={{background:`url(${venue})top center no-repeat `,width: '100%'}}>
            <div className="container" data-aos="flip-up">
              <div className="row">
                <div className="col-lg-12 " >
                  <h3>Awards </h3>
                  <h4>Top 3 articles will feature in the
                    Exposition 2020 Magazine<br/>
                  !!! </h4>
              </div>
            </div>
            </div>
          </section>
        </section>

        <Footer/>



  </div>

    );
  }
}

export default IUAC;
