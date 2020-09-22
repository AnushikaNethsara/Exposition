import React, { Component } from 'react';
import './Compcss/form.css';
import {Modal} from 'react-bootstrap';
import Artical from "./Artical";
import { post } from 'axios';
import guidlines from '../iuac/guideLine.pdf';
import UploadStepper from '../components/UploadStepper';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          file:null,
          show: false,
          show1: false,
          fullName: null,
          iName:null,
          nic:null,
          uni:null,
          dep:null,
          mobile:null,
          email: null,
          year:null,
          formErrors: {
              nic:"",
              iName:'',
              uni:'',
              dep:'',
              year:'',
            fullName: "",
            mobile:"",
            email: "",
          }
        };
      this.onFormSubmit = this.onFormSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.fileUpload = this.fileUpload.bind(this)
      }

      /*** File Upload***/
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        return  post(url, formData,config)
      }




    /*** File upload end***/

      

      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            First Name: ${this.state.fullName}
            Email: ${this.state.email}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "nic":
              formErrors.nic=
              value.length < 9 ? "minimum 9 characaters required" : "";
          case "iName":
            formErrors.iName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "fullName":
            formErrors.fullName =
              value.length < 3 ? "minimum 3 characaters required" : "";
              break;

          case "mobile":
            formErrors.mobile =
              value.length < 9 ? "minimum 9 characaters required" : "";
            break;
          case "uni":
            formErrors.uni =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "dep":
            formErrors.dep =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "year":
            formErrors.year =
              value.length < 0 ? "minimum 3 characaters required" : "";
            break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;


          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
      handleModel(){
        this.setState({show: !this.state.show})
      }

      handleModel1(){
        this.setState({show1: !this.state.show1})
      }

      componentDidMount(){
        document.title = "Registrations - IUAC"
      }
    render() { 
        const { formErrors } = this.state;
        return (
          <div >


            <section id="rule">
              <br/><br/>
              <center>
                <div className="head">
                  <h1 data-aos="zoom-in-down">All Rules & Regulations</h1>
                  <br/>
                  <div className="read">

                    {/*<a src={guidlines} alt=""></a>*/}
                    {/*<a href={guidlines} download>*/}
                    {/*  <button href={guidlines} class="abutton" data-aos="flip-left">Read More</button>*/}
                    {/*</a>*/}
                    <div className="type-1" data-aos="flip-left">
                      <div>
                        <a href="" className="btn btn-1">
                          <a src={guidlines} alt=""></a>
                          <a href={guidlines} download>
                          <span href={guidlines} className="txt">Read More</span>
                          </a>
                          <span className="round"><i className="fa fa-chevron-right"></i></span>
                        </a>
                      </div>
                    </div>

                  </div>
                  <br/>
                </div>
              </center>


              <div className="timeline">
                <div className="container1 left" data-aos="fade-up">
                  <div className="content">
                    <h2>(Date)</h2>
                    {/*<button class="abutton" onClick={() => this.handleModel()} >Register for the competition</button>*/}

                    <div className="type-1" data-aos="flip-left">
                      <div>
                        <a onClick={() => this.handleModel()} style={{height:'65px'}}  className="btn btn-1">
                          <div style={{marginTop:'-10px'}}>
                            <span   className="txt">Register for the competition</span>
                          </div>


                        </a>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="container1 right" data-aos="fade-up">
                  <div className="content">
                    <h2>(Date)</h2>
                    {/*<button class="abutton" onClick={() => this.handleModel1()}>Submit the article</button>*/}


                    <div  className="type-1" data-aos="flip-left">
                      <div>
                        <a onClick={() => this.handleModel1()} className="btn btn-1">
                            <div style={{marginTop:'-10px'}}>
                              <span   className="txt">Submit the article</span>
                            </div>



                        </a>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </section>
            {/*End of the time line*/}











            {/******form button and content******/}


          {/*<div className="wrapper">*/}


              {/*<div className="box1">*/}
              {/*  <div className="box2">*/}
              {/*    <div className="getIn">*/}
              {/*      <button id="sub" type="submit" onClick={() => this.handleModel()} className="btn btn-primary-g"*/}
              {/*              type="button">Sign in*/}
              {/*      </button>*/}
              {/*      <button id="sub" onClick={() => this.handleModel1()} className="btn btn-primary-g" type="submit">Submit</button>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}


              {/*<Modal className="modal-90w" show={this.state.show1} onHide={() => this.handleModel1()}>*/}
              {/*  <Modal.Header style={{color:"black"}} className={"guide"} details closeButton>File Upload</Modal.Header>*/}
              {/*  <Modal.Body>*/}

              {/*      <div>*/}
              {/*        <form onSubmit={this.onFormSubmit}>*/}
              {/*          <input style={{color:"black"}} type="file" onChange={this.onChange} />*/}

              {/*          <button style={{marginTop:'10px'}} className="btn btn-primary-g" type="submit" type="submit">Upload</button>*/}
              {/*        </form>*/}
              {/*      </div>*/}

              {/*  </Modal.Body>*/}

              {/*</Modal>*/}
              <Modal className="modal-90w"  show={this.state.show1} onHide={()=>this.handleModel1()}>
                <Modal.Header closeButton style={{color:'black'}}>SUBMIT THE ARTICLE</Modal.Header>
                <Modal.Body>
                  <div style={{margin:'auto'}}>
                    <UploadStepper/>
                  </div>

                </Modal.Body>
              </Modal>




                <Modal className="modal-90w" show={this.state.show} onHide={() => this.handleModel()}>
                  <Modal.Header style={{color:"black"}} className={"guide"} details closeButton>Registration Form</Modal.Header>
                  <Modal.Body>
                    <form onSubmit={this.handleSubmit} noValidate>


                      <div className="fullName">
                        <div className="go"><label htmlFor="fullName">FUll Name</label>
                          <input
                            className={formErrors.fullName.length > 0 ? "error" : null}
                            placeholder="Full Name"
                            type="text"
                            name="fullName"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.fullName.length > 0 && (
                          <span className="errorMessage">{formErrors.fullName}</span>
                        )}
                      </div>

                      <div className="iName">
                        <div className="go"><label htmlFor="iName">Name with Initials</label><br/>
                          <input
                            className={formErrors.iName.length > 0 ? "error" : null}
                            placeholder="Name with Initials"
                            type="text"
                            name="iName"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.iName.length > 0 && (
                          <span className="errorMessage">{formErrors.iName}</span>
                        )}
                      </div>


                      <div className="nic">
                        <div className="go"><label htmlFor="nic">NIC Number</label><br/>
                          <input
                            className={formErrors.nic.length > 0 ? "error" : null}
                            placeholder="NIC"
                            type="text"
                            name="nic"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.nic.length > 0 && (
                          <span className="errorMessage">{formErrors.nic}</span>
                        )}
                      </div>

                      <div className="email">
                        <div className="go"><label htmlFor="email">Email</label>
                          <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.email.length > 0 && (
                          <span className="errorMessage">{formErrors.email}</span>
                        )}
                      </div>

                      <div className="mobile">
                        <div className="go"><label htmlFor="mobile">Mobile Number</label><br/>
                          <input
                            className={formErrors.mobile.length > 0 ? "error" : null}
                            placeholder="Mobile Number"
                            type="number"
                            name="mobile"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.mobile.length > 0 && (
                          <span className="errorMessage">{formErrors.mobile}</span>
                        )}
                      </div>

                      <div className="uni">
                        <div className="go"><label htmlFor="uni">University</label><br/>
                          <input
                            className={formErrors.uni.length > 0 ? "error" : null}
                            placeholder="University"
                            type="text"
                            name="uni"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.uni.length > 0 && (
                          <span className="errorMessage">{formErrors.uni}</span>
                        )}
                      </div>

                      <div className="dep">
                        <div className="go"><label htmlFor="dep">Department</label><br/>
                          <input
                            className={formErrors.dep.length > 0 ? "error" : null}
                            placeholder="Department"
                            type="text"
                            name="dep"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.dep.length > 0 && (
                          <span className="errorMessage">{formErrors.dep}</span>
                        )}
                      </div>

                      <div className="year">
                        <div className="go"><label htmlFor="year">Year</label><br/>
                          <input
                            className={formErrors.year.length > 0 ? "error" : null}
                            placeholder="Year"
                            type="number"
                            name="year"
                            noValidate
                            onChange={this.handleChange}
                          /></div>
                        {formErrors.year.length > 0 && (
                          <span className="errorMessage">{formErrors.year}</span>
                        )}
                      </div>

                      <div className="submit">
                        <button className="btn btn-primary-g" type="submit">Submit</button>
                        <small>Thank You!</small>
                      </div>

                    </form>


                  </Modal.Body>


                </Modal>

            {/*</div>*/}

          </div>
         );
    }
}
 
export default Form;
