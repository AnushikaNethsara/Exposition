import React, { Component } from 'react';

import axios from 'axios';
import Navbar from "./manager.navbar.components";
import Title from "./manager.title.components";

import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { Grid } from '@material-ui/core';
import config from '../configure.js';

let reset = false;

let token = localStorage.getItem('manager_token');

function reload() {

    window.location.reload(false);

}

function searchItems(item) {

    return function (e) {
      return e.name.toLowerCase().includes(item.toLowerCase()) || !item;
    }
  
  }
  


//set product image

//set update calcel button( view or hide)

//set update calcel button( view or hide)



// order table row componnent
const UniRow = props => (





    <tr >


        <td><b>{props.uni.name} </b></td>

        <td >




            <a id="avoid1"  class="btn btn-danger" style={{color: "white",display:
                            
                            ((localStorage.getItem("role")==="admin"))?"block":"none"
                            
                            
                            }}

                onClick={() => {
                    props.deleteUni(props.uni._id);
                }
                }
            > <i class="fas fa-trash-alt"></i>  Remove University</a>

        </td>




    </tr>
);

// comment table row componnent



export default class universities extends Component {

    constructor(props) {

        super(props);

        this.onChangeName = this.onChangeName.bind(this)

        this.onChangeSearch = this.onChangeSearch.bind(this)


        this.validateUser = this.validateUser.bind(this)

        this.getUnis = this.getUnis.bind(this)






        this.state = {


            unis: [],
            name: "",
            search:""



        }
    }

    onChangeSearch(e){

        this.setState({

            search: e.target.value




        })


    }


    componentDidMount() {

        this.getUnis();


        this.validateUser();






    }

    deleteUni(id) {

        if(localStorage.getItem("role")==="admin"){

        swal({
            title: "Are you sure?",
            text: "Once you deleted this University, you will not be able to recover this University details and all the details will be deleted!" + "  **** University Id is :  " + id,
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

                            let passSecterrr = id + "deletemeuniexpo2020"

                            if (login === passSecterrr) {

                                const token = localStorage.getItem('token');
                                axios.delete(`http://${config.host}:${config.port}/university/delete/` + id,
                                    {
                                        headers:
                                        {
                                            token: token

                                        }
                                    }).then(
                                        (res) => {

                                            reload();

                                            swal("University Deleted Permenently!", {
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

                                                console.log("Error is", err);

                                                Swal.fire({
                                                    position: 'bottom-end',
                                                    icon: 'error',
                                                    title: 'Session Has Expired Please Log In Again',
                                                    showConfirmButton: false,
                                                    timer: 3000
                                                })



                                            }


                                        })


                            } else {

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
                        text: "Role Deletion Terminated!",
                        icon: "info",
                        button: "ok",
                    });
                }
            });

        }else{
            swal({
                title: "Unauthorized Access",
                text: "You need Admin Privilages to performe this Action!",
                icon: "error",
                button: "ok",
            });

            

        }



    }


    uniList() {

        return this.state.unis.filter(searchItems(this.state.search)).map(current => {

            return <UniRow
                deleteUni={this.deleteUni}

                key={current._id}

                uni={current}
            />;

        })
    }

    // get comments by product




    //get orders by product
    getUnis() {

        const token = localStorage.getItem('token');




        axios.get(`http://${config.host}:${config.port}/university/`, {
            headers:
            {
                token: token

            }
        }).then(res => {


            this.setState({

                unis: res.data.data




            })







        }).catch(err => {


        })



    }

    //validate user sessions
    validateUser() {


        token = localStorage.getItem('token')
        let role = localStorage.getItem('role')


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

    onChangeName(e) {

        this.setState({

            name: e.target.value



        });

    }




    // handle updates
    onSubmit = async (e) => {

        e.preventDefault();

        const uni = {


            name: this.state.name,







        }

        token = localStorage.getItem('token')









        axios.post(`http://${config.host}:${config.port}/university/add/`, uni, {
            headers:
            {
                token: token

            }
        }).then((res) => {

            if (res.data.warn) {


                swal({
                    title: "Failed",
                    text: res.data.warn,
                    icon: "error",
                    // buttons: true,
                    dangerMode: true,
                })

            } else {

                Swal.fire({
                    title: 'University Submitted',
                    text: "University submission is Successfully!",
                    // html:'<figure> <img src="'+res.data.URL+'" alt="sing up image"/></figure>',

                    icon: "success",


                    confirmButtonText: 'Continue',

                    reverseButtons: true,



                }).then(() => {
                    reload();
                })




            }

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

                this.props.history.push('/admi/login');
            }

            else {

                token = localStorage.getItem('token')


                // 
                axios.get(`http://${config.host}:${config.port}/login/session-validate`, {

                    headers:
                    {
                        // Authorization : ` bearer $(token) ` 

                        token: token

                    }
                }
                ).then((res) => {
                    swal({
                        title: "Failed",
                        text: "Information format is Unsupported or University is already submitted",
                        icon: "error",
                        // buttons: true,
                        dangerMode: true,
                    })




                }



                ).catch((err) => {







                    Swal.fire({
                        position: 'bottom-end',
                        icon: 'error',
                        title: 'Session Has Expired',
                        html:
                            '<h4>Last Session Details</h4><br/><b>User ID :</b> ' + localStorage.getItem("id") + '<br/>' +
                            'Please Log In again and come back to this page to Continue. <br/><a class="btn btn-success" href="http://localhost:3000/admin/login" target="_blank">Log In Here</a>',
                        showConfirmButton: false,
                        timer: 10000,
                        backdrop: `
              rgba(255,0,0,0.4)`
                    })




                });






            }


        });







    }




    render() {


        return (



            <div className="manager" style={{backgroundColor:"white"}}>
                <header>

                    <link rel="stylesheet" href="./css/manager-add-style.css" />



                </header>
                <Title />
                <Navbar />

                <div style={{ padding: "20px" }}>
                    <h6 style={{ color: "#78909C" }}><i class="fas fa-info-circle"></i>  Administration Portal / University Management /</h6>
                </div>

                {/* cards */}
                <div clss="Managercard" id="tab-cards">
                    <div className="managerStat">
                        <div
                            className="container "
                            style={{ padding: '15px' }}
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-counter primary">
                                    <i class="zmdi zmdi-library"></i>
                                        <span className="count-numbers">{this.state.unis.length}</span>
                                        <span className="count-name"> Universities</span>
                                    </div>
                                </div>




                            </div>
                        </div>



                    </div>
                </div>

                {/* cards end */}

                <div >


                    <Grid
                        container
                        spacing={0}
                    >



                        {/* second Update */}

                        <Grid id="addbox"
                            item
                            lg={12}
                            sm={12}
                            xl={12}
                            xs={12}
                        >

<div class="manager" >

                            <div class="main" >




                                <section class="signup" style={{display:
                            
                            ((localStorage.getItem("role")==="admin")||(localStorage.getItem("role")==="editor"))?"block":"none"
                            
                            
                            }}>
                                    <div class="container" style={{paddingBottom:"200px"}}>
                                    
                                        <h2 style={{ paddingTop: "20px" }}
                                            class="form-title">Add University</h2>
                                        <form class="register-form" onSubmit={this.onSubmit}>
                                            {/* product code */}
                                      
                                            <div className="uni">
                      <br/>
                        <input
                            
                            placeholder="University Name"
                            type="text"
                            name="uni"
                            required
                            onChange={this.onChangeName}
                            value={this.state.name}

                        /></div>
                                            {/* product name */}


<br/>


                                            <div class="form-group form-button">


                                                <input type="submit" style={{ backgroundColor: '#FFA726' }} name="signup" id="updateButton" class="form-submit" value="Add University" />


                                            </div>



                                        </form>

                                    </div>
                                </section>
                            </div></div>

                        </Grid>

                        {/* Update ends */}



                    </Grid>

                    <Grid
                        container
                        spacing={0}
                    >
                        <Grid
                            item
                            lg={12}
                            sm={12}
                            xl={12}
                            xs={12}
                        >
                            {/* orders */}

                            <div className="container" style={{ marginTop: -200 }} id="tab1" >


                            <center>    <div
          className="row"

        >

          <h4>
            
            <div id="avoid1" className="form-group" style={{ margin: "20px", padding:"20px" }}>
              <label htmlFor="name"><i
                className="zmdi zmdi-search"
                style={{ paddingRight: '20px', paddingLeft: '10px' }}
              >  </i> </label>
              <input
                id="productName"
                name="name"
                onChange={this.onChangeSearch}
                placeholder="Search Universities"
                required
                type="text"
                value={this.state.search}
              />
            </div></h4>




        </div></center>







                                <h1>Universities</h1>
                                <table className="table" style={{ color: "#546E7A" }}>

                                    <thead style={{ color: "#3F51B5" }}>
                                        <tr>

                                            <th scope="col">University Name</th>

                                            <th style={{display:
                            
                            ((localStorage.getItem("role")==="admin"))?"block":"none"
                            
                            
                            }}
 scope="col" id="avoid2">Actions</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.uniList()}
                                    </tbody>
                                </table>
                            </div>


                        </Grid>






                    </Grid>
                </div>


                {/* pdf generator divs */}

                <div id="tab3"></div> <div id="profile"></div><div id="tab2"></div><div id="tab4"></div><div id="tab2"></div>    </div>




        )





    }





} 