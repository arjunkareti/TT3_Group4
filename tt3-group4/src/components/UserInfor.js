import React, { Component } from "react";
import axios from 'axios';


export default class UserInfor extends Component{
    constructor(props) {
        super(props);
        this.state = {data: {}};
    }

    componentDidMount() {
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
                this.setState({ data: res.data})
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }
    
    render(){
        const { accountKey, firstName, lastName, nric, address, phoneNumber, email } = this.state.data
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
                    <td>{accountKey}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{nric}</td>
                    <td>{address}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>

            </table>
        )
    }
}
