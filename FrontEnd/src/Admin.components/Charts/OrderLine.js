import React, {Component} from 'react';
import {Bar , Line , Pie} from 'react-chartjs-2';
import axios from 'axios';
import config from '../../configure';

var LabelArray = [];
var DataArray =[];
var DataArray2=[];
var DataArray3=[];

//get date by string

function searchItems(item) {

  return function (e) {
    return  e.createdAt.toLowerCase().includes(item.toLowerCase()) ||
      !item;
  }

}

function DateString(date) {

  return date.substring(0,10);
}

class OrderLine extends Component{

    constructor(props){
        super(props);


        this.getAllDates = this.getAllDates.bind(this);
        this.getSalesbyDate = this.getSalesbyDate.bind(this);

        this.state={
            
            AllOrdersByDate:[],
            AllOrdersArray:[],
            AllDatesArray:[],
            DistinctDatesArray:[],
            TotalPrices:[],
          
              Chartdata: null
        }
    }

    //get all labels 
   async getAllDates() {

        const token = localStorage.getItem('token');
    
      await  axios.get(`http://${config.host}:${config.port}/registration/customOrder/asc`, {
          headers:
          {
            token: token
    
          }
        }).then(res => {
          this.setState({
    
            AllOrdersArray: res.data.data


    
          })

          for (let i = 0; i < this.state.AllOrdersArray.length; i++) {
              
            this.state.AllDatesArray.push( DateString(this.state.AllOrdersArray[i].createdAt) );

          }

          if(this.state.DistinctDatesArray.length==0){
            this.state.DistinctDatesArray.push(this.state.AllDatesArray[0]);
          }

          for (let j = 0; j < this.state.AllDatesArray.length; j++) {
            
            for (let x = 0; x <  this.state.DistinctDatesArray.length; x++) {

              if(this.state.AllDatesArray[j]!==this.state.DistinctDatesArray[this.state.DistinctDatesArray.length-1]){

                this.state.DistinctDatesArray.push(this.state.AllDatesArray[j]);

              }
              
              
            }
            
          }
          console.log("Distinct Array is :",this.state.DistinctDatesArray );
          


          for (let index = 0; index < this.state.DistinctDatesArray.length; index++) {
            
            LabelArray.push(this.state.DistinctDatesArray[index]);
            
          }
              
          
         

        
       

        this.getSalesbyDate();
          
          
        }).catch(err => {
          console.log(err);
    
    
        })
    
      }

      //get sales by dates
     async getSalesbyDate(){

      for (let index = 0; index < this.state.DistinctDatesArray.length; index++) {

        let totalC=0;
        let pendingc=0;
        let submitc =0;

        let key = this.state.DistinctDatesArray[index];

        console.log("Input Date: ", key);

        for (let y = 0; y < this.state.AllOrdersArray.length; y++) {

          if(DateString(this.state.AllOrdersArray[y].createdAt)===key){

            console.log("Current Date: ", this.state.AllOrdersArray[y].createdAt);

            totalC++;

            if(this.state.AllOrdersArray[y].status===0){

              pendingc++;

            }else{
              submitc++;
              
            }


          }
        
                      
          }

          console.log("Output Value: ", totalC);

          DataArray2.push(totalC);
          DataArray.push(pendingc);
          DataArray3.push(submitc);

        

    }





      
            

    //        const token = localStorage.getItem('token');
    //  await   axios.get('http://localhost:4000/registration/byDate/' + key, {
    //         headers:
    //         {
    //           token: token

    //         }
    //     }).then(res => {

    //         this.setState({
    
    //             AllOrdersByDate: res.data.data
    
    
        
    //           })

    //           DataArray2.push(this.state.AllOrdersByDate.length);

    //           console.log("Data2Array",DataArray2);
              

    //           var totalPrice=0;
              
    //           for (let y = 0; y < this.state.AllOrdersByDate.length; y++) {
    //             totalPrice = totalPrice + this.state.AllOrdersByDate[y].totalPrice;
                
    //           }

    //           console.log("Output Total: ",totalPrice);
              

    //           this.state.TotalPrices.push(totalPrice);
    //           DataArray.push(totalPrice);


            
            
            

            

            
    //     }).catch(err => {
    //         console.log(err);


    //     })
            
    //     }

        
        
          
      }
    async  componentDidMount() {
      LabelArray=[];
      DataArray=[];
      DataArray2=[];
      DataArray3=[];

      this.setState({

          
        AllOrdersByDate:[],
        AllOrdersArray:[],
        AllDatesArray:[],
        DistinctDatesArray:[],
        TotalPrices:[],
        Chartdata: null
    
        



      })

      
       await this.getAllDates();
        console.log("Data Array 2: ", DataArray2);
        console.log("Label Array VAr len: ", LabelArray.length);
        console.log("Label Array VAr : ", LabelArray);
        
        //set labels and data
        const labels=LabelArray;
        const data=DataArray;
        const data2=DataArray2;
        const data3=DataArray3;

        this.setState({
    
            Chartdata:{
                labels: labels,
                datasets: [{
                  label: ["Total Registrations"],
                  backgroundColor:[ "rgb(0, 188, 212,0.10)"],
                  data: data2
                },
               {
                  label: "Pending Registrations",
                  backgroundColor:[ "rgb(216, 27, 96, 0.10)"],
                  data: data
                }
                ,{
                  label: "Submitted Registrations",
                  backgroundColor:[ "rgb(124, 179, 66, 0.70)"],
                  data: data3
                }]
              }


    
          })

      
        
        
        

      }

    render(){

      

  

       
        return(
            <div className="chart" >

                <Line


                
                data ={this.state.Chartdata}
                   
            
                options={{legend:{position:"bottom"}}}
                
                
                redraw/>



            </div>

        )
    }



}
export default OrderLine;