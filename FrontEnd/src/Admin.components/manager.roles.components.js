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
  
  


//set product image

//set update calcel button( view or hide)

//set update calcel button( view or hide)



// order table row componnent
const LoginRow = props => (





    <tr style={{backgroundColor:(props.login.role==="admin")?"#00BCD4":(props.login.role==="editor")?"#FFC107":"#8BC34A"}}>


        <td><b>{props.login.username} </b></td>
        <td><b>{props.login.email} </b></td>
        <td><b>{props.login.role} </b></td>
        <td >


   
    
    <a id="avoid1" style={{ color: "white" }} class="btn btn-danger"

onClick={() => {
  props.deleteRole(props.login._id); 
}
}
> <i class="fas fa-trash-alt"></i>  Remove Role</a>

    </td>




    </tr>
);

// comment table row componnent



export default class roles extends Component {

    constructor(props) {

        super(props);

        this.onUsername = this.onUsername.bind(this)
        this.onEmail = this.onEmail.bind(this)
        this.onPassword = this.onPassword.bind(this)
        this.onRole = this.onRole.bind(this)
   
        this.validateUser = this.validateUser.bind(this)
        
        this.getLogins = this.getLogins.bind(this)






        this.state = {

            logins: [],
            username :'',
            email : '',
            password: '',
            role : '',
            editors:[],
            admins:[],
            viewers:[]
            


        }
    }


    componentDidMount() {

        this.getLogins();
     

        this.validateUser();






    }

    deleteRole(id) {

        swal({
          title: "Are you sure?",
          text: "Once you deleted this Role, you will not be able to recover this Role details and all the details will be deleted!"+"  **** Role Id is :  "+id,
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
    
                  let passSecterrr=id+"deletemeroleexpo2020"
    
                  if(login===passSecterrr){
    
                    const token = localStorage.getItem('token');
              axios.delete(`http://${config.host}:${config.port}/login/delete/` + id,
                {
                  headers:
                  {
                    token: token
    
                  }
                }).then(
                  (res) => {
    
                    reload();
                    
                    swal("Role Deleted Permenently!", {
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
                text: "Role Deletion Terminated!",
                icon: "info",
                button: "ok",
              });
            }
          });
    
    
    
      }

   
    loginList() {

        return this.state.logins.map(loginCurrent => {

            return <LoginRow
            deleteRole={this.deleteRole}
          
              key={loginCurrent._id}

                login={loginCurrent}
            />;

        })
    }

    // get comments by product

   
    

    //get orders by product
    getLogins() {

        const token = localStorage.getItem('token');

        


        axios.get(`http://${config.host}:${config.port}/login/`, {
            headers:
            {
                token: token

            }
        }).then(res => {


            this.setState({

                logins: res.data.data

                


            })

            

            

           

        }).catch(err => {
            

        })


        axios.get(`http://${config.host}:${config.port}/login/admins`, {
            headers:
            {
                token: token

            }
        }).then(res => {


            this.setState({

                admins: res.data.data

                


            })

            

            

           

        }).catch(err => {
            

        })


        axios.get(`http://${config.host}:${config.port}/login/viewers`, {
            headers:
            {
                token: token

            }
        }).then(res => {


            this.setState({

                viewers: res.data.data

                


            })

            

            

           

        }).catch(err => {
            

        })

        axios.get(`http://${config.host}:${config.port}/login/editors`, {
            headers:
            {
                token: token

            }
        }).then(res => {


            this.setState({

                editors: res.data.data

                


            })

            

            

           

        }).catch(err => {
            

        })
    }

    //validate user sessions
    validateUser() {


        token = localStorage.getItem('token')
       let role = localStorage.getItem('role')

       if(role==="admin"){

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

    }else{

        swal({
            title: "Unauthorized Access",
            text: "You need Admin Privilages!",
            icon: "error",
            button: "ok",
        });

        this.props.history.push('/admin/login');


    }











    }

    onUsername(e) {

        this.setState({

            username: e.target.value



        });

    }

    onEmail(e) {

        this.setState({

            email: e.target.value



        });

    }

    onPassword(e) {

        this.setState({

            password: e.target.value



        });

    }

    
    onRole(e) {

        this.setState({

            role: e.target.value



        });

    }

    


    // handle updates
    onSubmit = async (e) => {

        e.preventDefault();

        const login = {

            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role,
            

        




        }

        token = localStorage.getItem('token')









        axios.post(`http://${config.host}:${config.port}/login/add/`, login, {
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
                    title: 'Role Submitted',
                    text: "Role submission is Successfully!",
                    // html:'<figure> <img src="'+res.data.URL+'" alt="sing up image"/></figure>',

                    icon: "success",


                    confirmButtonText: 'Continue',

                    reverseButtons: true,

                 

                }).then(()=>{
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
                        text: "Information format is Unsupported or Username or Email is Assigned to another Role",
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

                <div  className="manager" style={{ padding: "20px" }}>
                    <h6 style={{ color: "#78909C" }}><i class="fas fa-info-circle"></i>  Administration Portal / Role Management /</h6>
                </div>

                {/* cards */}
                <div clss="Managercard" id="tab-cards">
                    <div className="managerStat">
                        <div
                            className="container "
                            style={{ padding: '15px' }}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card-counter primary">
                                    <i class="fas fa-user-shield"></i>
                                        <span className="count-numbers">{this.state.admins.length}</span>
                                        <span className="count-name"> Admins</span>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card-counter danger" style={{backgroundColor:"#FFA000"}}>
                                    <i class="fas fa-user-edit"></i>
                                        <span className="count-numbers">{this.state.editors.length}</span>
                                        <span className="count-name"> Editors</span>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card-counter success">
                                    <i class="fas fa-user-tie"></i>
                                        <span className="count-numbers">{this.state.viewers.length}</span>
                                        <span className="count-name"> Viewer</span>
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


                            <div class="main">




                                <section class="signup">
                                    <div class="container">
                                        <div class="signup-content">
                                            <div class="signup-form" style={{ margin: "20px" }}>
                                                <h2 style={{ paddingBottom: "60px" }}
                                                    class="form-title">Role Assignment</h2>
                                                <form class="register-form" onSubmit={this.onSubmit}>

                                                    
                                                    {/* product code */}
                                        Username
                                        <div class="form-group">
                                                        <label for="code"><i class="zmdi zmdi-account-circle"></i></label>
                                                        <input type="text" onChange={this.onUsername} value={this.state.username} required name="code" id="productCode" placeholder="Ex : expoadmin123" />
                                                    </div>
                                                    {/* product name */}
                                       Password
                                        <div class="form-group">
                                                        <label for="name"><i class="zmdi zmdi-tag-more"></i></label>
                                                        <input type="password" name="name" id="productName" placeholder="User Password" onChange={this.onPassword} value={this.state.password} required />
                                                    </div>

                                                    {/* category */}
                                                    <div class="form-group" id="category">
                                                        Role
                                <div class="input-group mb-3" >
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="categoryName"></label>
                                                            </div>
                                                            <select ref="ctegoryInput" class="custom-select" id="categoryName"
                                                                value={this.state.role}
                                                                onChange={this.onRole}

                                                            >
                                                                <option value="">Choose a role</option>
                                                                <option value="admin">Admin</option>
                                                                <option value="editor">Editor</option>
                                                                <option value="viewer">Viewer</option>




                                                            




                                                                }

                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/* price */}
                                      
                                        <div class="form-group">
                                        Email
                                                        <label for="price"><i class="zmdi zmdi-email"></i></label>
                                                        <input type="text" name="name" id="price" placeholder="Ex: expo@exposition.lk" onChange={this.onEmail} value={this.state.email} required />
                                                    </div>
                                                    {/* color */}
                                       



                                                    <div class="form-group form-button">

                                                    
                                                        <input type="submit" style={{backgroundColor:'#FFA726'}} name="signup" id="updateButton" class="form-submit" value="Assign Role" />


                                                    </div>

                                                   

                                                </form>
                                            </div>

                                            <div class="signup-image">


                                                        
<figure>
<img src="https://res.cloudinary.com/fashionistaimage/image/upload/v1590673239/roles_hhmlgg.jpg" alt="sing up image" />


</figure>

    </div>
                                           

                                        </div>

                                    </div>
                                </section>
                            </div>

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

                                <h1>Roles</h1>
                                <table className="table" style={{ color: "#546E7A" }}>

                                    <thead style={{ color: "#3F51B5" }}>
                                        <tr>

                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                            <th scope="col" id="avoid2">Actions</th>
                                            


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.loginList()}
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