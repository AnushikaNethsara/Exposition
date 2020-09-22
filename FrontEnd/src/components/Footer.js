import React, { Component } from 'react';
import './Compcss/homePage.css';
import logoo from '../img/logoos.png';
import logo from '../img/logo.png';

class Footer extends Component {
    state = {  }
    render() { 
        return (  
            <footer id="footer">
            <div className="footer-top"  style={{paddingTop:"30px"}}> 
                <div className="container">
                <div className="row justify-content-between">

                    <div className="col-lg-6 footer-info">
                        <img src={logo} style={{width:"60%" , height:"20%"}}alt="TheEvenet"/>
                        <br/>
                        <br/>
                        <p>University Of Kelaniya<br/>
                        Department of Industrial Management<br/>
                        Industrial Management Science Students’ Association<br/>
                        Team Exposition<br/>
                        Academics</p>
                        <br/>
                        <img src={logoo} alt="logo" style={{width:'200px',height:'200px'}}/>
                    </div>
                    
                

                    <div className="col-lg- 6  footer-contact text-left "   >
                    <h4>Contact Us</h4>
                    <p>
                        Department of Industrial Management, <br/>
                        Faculty of Science,<br/>
                        University of Kelaniya,<br/>
                        Dalugama,<br/>
                        Kelaniya,<br/>
                        Sri Lanka<br/>
                        <br/>
                        <strong>Phone:</strong> +1 5589 55488 55<br/>
                        <strong>Email:</strong> info@example.com<br/>
                    </p>

                    <div className="social-links">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="google"><i className="fa fa-google"></i></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                    
                    </div>

                </div>
                </div>
            </div>

            <div>
                <div className="copyright">
                &copy; Copyright <strong>Exposition 2020</strong>. All Rights Reserved with Exposition Team
                </div>
                <div className="credits">
                </div>
            </div>
        </footer>

        );
    }
}
 
export default Footer;