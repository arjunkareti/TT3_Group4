import React, { Component } from "react";
import axios from 'axios';


export default class UserInfor extends Component{

    handleSubmit = (e) =>{
        e.preventDefault();
        const data ={
            acount_key: this.accountKey,
            first_name: this.firstName,
            last_name: this.lasttName,
            nric: this.nric,
            address: this.address,
            phone_number: this.phoneNumber,
            email: this.email
        };
        const xapikey ='mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7';
        const axiosConfig = {
            headers: {
                'x-api-key': xapikey
            }

    
        }
    const body={
        'username': "Group4",
        'password': "RDVdlFcb2W3H3i_"

    }
    axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', body, axiosConfig).then(
        res => {
            console.log(res)
        }

    ).catch(
        err => {
            console.log(err);
        }
    )
 }
    
    
    
    render(){
        return(
<table style={{width:"100%"}}>
  <caption>User Information</caption>
  <tr>
    <th>Account Key</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>NRIC</th>
    <th>Address</th>
    <th>Phone Number</th>
    <th>Email</th>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
    <td>58cf2a3d-4e73-48c6-a7d1-437e8d70e181</td>
    <td>Emery</td>
    <td>Heller</td>
    <td>S08650611B</td>
    <td>5124 Kenyatta Rest</td>
    <td>(+65) 95879660</td>
    <td>group4@techtrek.com</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>

</table>
        )
    }
}
