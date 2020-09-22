import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './manager.navbar.components';
import Title from './manager.title.components';
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import Chart1 from './Charts/Pie';
import Chart2 from './Charts/OrderLine';
import { Grid, Button } from '@material-ui/core';

import config from '../configure.js';


function reload() {

  window.location.reload(false);

}






//search records in tables
function searchItems(item) {

  return function (e) {
    return e.nic.toLowerCase().includes(item.toLowerCase())
      || e.nameI.toLowerCase().includes(item.toLowerCase()) ||
      e.email.toLowerCase().includes(item.toLowerCase()) || e.uni.toString().toLowerCase().includes(item.toLowerCase()) ||

      e.dept.toLowerCase().includes(item.toLowerCase()) ||
      e.year.toLowerCase().includes(item.toLowerCase()) ||
      e.createdAt.toLowerCase().includes(item.toLowerCase()) ||
      !item;
  }

}

const EntryRow = props => (


 


  <tr >
 
    <td>{props.entry.nic}</td>
    <td>{props.entry.nameI}</td>
    <td>{props.entry.createdAt.substring(0, 10)}</td>
    <td>{props.entry.email}</td>
    <td>{(props.entry.mobile)}</td>
    <td>{(props.entry.uni)}</td>
    <td>{(props.entry.fac)}</td>
    <td>{(props.entry.dept)}</td>
    <td>{(props.entry.year)}</td>
    <td style={{color:(props.entry.status)==0 ? "red":"green"}}>{(props.entry.status)==0 ? "Pending":"Submit"}</td>
    <td id="avoid2" style={{display:(
      
      
      (localStorage.getItem("role")==="admin") || (localStorage.getItem("role")==="editor") ? "block" :"none"
      
      
      
      )}} > 


    <a id="markButton" style={{ color: "white", marginBottom: "20px",  display:((props.entry.status)==0 && (localStorage.getItem("role")!=="viewer"))? "block":"none" }} class="btn btn-primary"
    
    onClick={() => {
      props.markEntry(props.entry._id); 
    }
    }
    
    ><i class="zmdi zmdi-check-circle-u"></i>  Mark Submit</a>
    
    <a  id="deleteButton" style={{ color: "white" , display:
    
    (localStorage.getItem("role")==="admin")?"block":"none"
  
  
  }} class="btn btn-danger"

onClick={() => {
  props.deleteEntry(props.entry._id); 
}
}
> <i class="fas fa-trash-alt"></i>  Delete</a>

    </td>




  </tr>
);



export default class dashboard extends Component {

  constructor(props) {

    super(props);


    this.validateUser = this.validateUser.bind(this);
    this.getAllEntries = this.getAllEntries.bind(this);
    this.getPendingEntries = this.getPendingEntries.bind(this);
    this.getCompletedEntries = this.getCompletedEntries.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
   

    this.state = {

     
      search: '',
      entries: [],
      pending:[],
      completed:[]



    };

    



  }

  getAllEntries() {
    const token = localStorage.getItem('token');
    axios.get(`http://${config.host}:${config.port}/registration/`, {
      headers:
      {
        token: token

      }
    }).then(res => {
      this.setState({

        entries: res.data.data

      })

      console.log("Entries are ", this.state.entries);
      
    }).catch(err => {
      console.log(err);


    })
  }

  getPendingEntries() {
    const token = localStorage.getItem('token');
    axios.get(`http://${config.host}:${config.port}/registration/pending`, {
      headers:
      {
        token: token

      }
    }).then(res => {
      this.setState({

        pending: res.data.data

      })

      console.log("Entries are ", this.state.entries);
      
    }).catch(err => {
      console.log(err);


    })
  }

  getCompletedEntries() {
    const token = localStorage.getItem('token');
    axios.get(`http://${config.host}:${config.port}/registration/completed`, {
      headers:
      {
        token: token

      }
    }).then(res => {
      this.setState({

        completed: res.data.data

      })

      console.log("Entries are ", this.state.entries);
      
    }).catch(err => {
      console.log(err);


    })
  }


  componentDidMount() {

    this.validateUser();
    this.getAllEntries();
    this.getPendingEntries();
    this.getCompletedEntries();

    

    

   

  }

  markEntry(id){

    

    swal({
      title: "Are you sure?",
      
      text: "Did You Recieved a mannual Article Submission and Want to Mark the Submission to this Entry ? "+"  **** Entry Id is :  "+id,
      icon: "info",
      buttons: true,
      dangerMode: false,
    })
      .then((stat) => {
        if (stat) {

          Swal.fire({
            title: 'Enter Administration Secret For Mark Submissions',
            input: 'password',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Mark Submission',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {

              let passSecterrr=id+"markmeexpo2020"

              if(login===passSecterrr){

                let token = localStorage.getItem('token');
                
          axios.get(`http://${config.host}:${config.port}/registration/mark/` + id,
            {
              headers:
              {
                token: token

              }
            }).then(
              (res) => {

                reload();
                
                swal("Entry Marked!", {
                  icon: "success",
                });




              }).catch((err) => {

                if (token == "null") {
                  swal({
                    title: "Unauthorized Access",
                    text: "You have to Log-In First!",
                    icon: "error",
                    button: "ok",
                  });

                 

                } else {

                  console.log("Error is" ,  err);
                  
                  Swal.fire({
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Session Has Expired Please Log In Again',
                    showConfirmButton: false,
                    timer: 3000
                  })
                  

                 
                }


              })


              }else{

                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Invalid Admin Secret',
                  showConfirmButton: false,
                  timer: 3000
                })

              }
              

            },
            allowOutsideClick: () => !Swal.isLoading()
          })



          ///block

          

              ///block



        } else {
          swal({
            title: "Terminated",
            text: "Entry Mannual Submission Marking Terminated!",
            icon: "info",
            button: "ok",
          });
        }
      });



  }

  
 

 
  deleteEntry(id) {

    swal({
      title: "Are you sure?",
      text: "Once you deleted this Entry, you will not be able to recover this Entry details and all the details will be deleted!"+"  **** Entry Id is :  "+id,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((stat) => {
        if (stat) {

          Swal.fire({
            title: 'Enter Administration Secret For Deletion',
            input: 'password',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Delete',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {

              let passSecterrr=id+"deletemeexpo2020"

              if(login===passSecterrr){

                const token = localStorage.getItem('token');
          axios.delete(`http://${config.host}:${config.port}/registration/delete/` + id,
            {
              headers:
              {
                token: token

              }
            }).then(
              (res) => {

                reload();
                
                swal("Entry Deleted Permenently!", {
                  icon: "success",
                });




              }).catch((err) => {

                if (token == "null") {
                  swal({
                    title: "Unauthorized Access",
                    text: "You have to Log-In First!",
                    icon: "error",
                    button: "ok",
                  });

                 

                } else {

                  console.log("Error is" ,  err);
                  
                  Swal.fire({
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Session Has Expired Please Log In Again',
                    showConfirmButton: false,
                    timer: 3000
                  })
                  

                 
                }


              })


              }else{

                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Invalid Admin Secret',
                  showConfirmButton: false,
                  timer: 3000
                })

              }
              

            },
            allowOutsideClick: () => !Swal.isLoading()
          })



          ///block

          

              ///block



        } else {
          swal({
            title: "Terminated",
            text: "Entry Deletion Terminated!",
            icon: "info",
            button: "ok",
          });
        }
      });



  }

  // validate users
  validateUser() {


    const token = localStorage.getItem('token');
    axios.get(`http://${config.host}:${config.port}/login/session-validate`, {

      headers:
      {


        token: token

      }
    }
    ).then((res) => {


      console.log("Validation Response: ", res.data);


    }



    ).catch((err) => {

      if (token === "null") {

        console.log("Token is null Box called");

        swal({
          title: "Unauthorized Access",
          text: "You have to Log-In First!",
          icon: "error",
          button: "ok",
        });

        this.props.history.push('/admin/login');
      }

      else {



        console.log("the token value is :", token);

        Swal.fire({
          position: 'bottom-end',
          icon: 'error',
          title: 'Session Has Expired',
          html:
            '<h4>Last Session Details</h4><br/><b>User ID :</b> ' + localStorage.getItem("id") + '<br/>' +
            '<b>User Name :</b> ' + localStorage.getItem("username") + '<br/><br/>',
          showConfirmButton: false,
          timer: 4000
        })

        this.props.history.push('/admin/login');


      }

    });











  }



//get order list

  EntryList() {

    return this.state.entries.filter(searchItems(this.state.search)).map(entryCurrent => {

      return <EntryRow
      deleteEntry={this.deleteEntry}
      markEntry={this.markEntry}
        key={entryCurrent._id}

        entry={entryCurrent}
      />;

    })
  }

  onChangeSearch(e) {

    this.setState({

      search: e.target.value


    });

  }



  render() {

    



    return (


      <div style={{backgroundColor:"white"}}>
        <Title />
        <Navbar />
        <header>

          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />

        </header>

        <div style={{ padding: "20px" }}>
          <h6 style={{ color: "#78909C" }}><i class="fas fa-info-circle"></i>  Dashboard</h6>
        </div>

        <div clss="Managercard" id="tab-cards">
          <div className="managerStat">
            <div
              className="container "
             
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="card-counter primary" style={{ backgroundColor: "#00BCD4" }}>
                  <i class="zmdi zmdi-assignment-o"></i>
                    <span className="count-numbers">{this.state.entries.length}</span>
                    <span className="count-name"> Total Entries</span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card-counter danger" style={{ backgroundColor: "#FB8C00" }}>
                  <i class="zmdi zmdi-assignment-alert"></i>
    <span className="count-numbers">{this.state.pending.length}</span>
                    <span className="count-name"> Pending Articles</span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card-counter success" style={{ backgroundColor: "#4CAF50" }}>
                  <i class="zmdi zmdi-assignment-check"></i>
                    <span className="count-numbers">{this.state.completed.length}</span>
                    <span className="count-name"> Submitted Articles</span>
                  </div>
                </div>


              </div>
            </div>



          </div>
        </div>




        <div></div>

        <div style={{ padding: "40px" }}>


          <Grid
            container
            spacing={10}
          >
            <Grid
              item
              lg={6}
              sm={6}
              xl={6}
              xs={12}
            >

              <div style={{ position: "relative" }} >

                <h3>Categorized by University</h3>

               


                <Chart1 />



              </div>
            </Grid>




            <Grid
              item
              lg={6}
              sm={6}
              xl={6}
              xs={12}
            >

              <div style={{ position: "relative" }} >

                <h3>Registration Count By Dates</h3>

                

                <Chart2





                />



              </div>
            </Grid>


          </Grid>





        </div>

        <br /><br />
       

          <h4>

            <div className="form-group" style={{ marginLeft: "20px" , width:"500px"}}>
              <label htmlFor="name"></label>
              <input
                id="productName"
                name="name"
                onChange={this.onChangeSearch}
                placeholder="Search Items"
                required
                type="text"
                value={this.state.search}
              />
            </div></h4>




        












        <div style={{ marginLeft: '30px' }} id="tab1">



          <h1 style={{ fontFamily: "'DM Serif Display" }}>Registration Entries</h1>
          <table className="table" style={{backgroundColor:"white"}}>

            <thead style={{ color: "#3949AB" }}>
              <tr>
                <th scope="col">NIC</th>
                <th scope="col">Name with Initials</th>
                <th scope="col">Registered Date</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">University</th>
                <th scope="col">Faculty</th>
                <th scope="col">Department</th>
                <th scope="col">Level</th>
                <th scope="col">Status</th>
                <th style={{display:(localStorage.getItem("role")=="viewer")?"none":"block"}} id="avoid1" scope="col">Action</th>




              </tr>
            </thead>
            <tbody>
              {this.EntryList()}
            </tbody>
          </table>
        </div>
        
         {/* pdf generator divs */}
         
         <div  id="tab2"></div><div id="tab3"></div><div id="tab4"></div><div id="profile"></div><div ></div><div ></div>






      </div>

















    )
   





  }





} 
