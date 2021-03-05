import axios from "axios";
import React, { Component } from "react";
import playerDatabase from "./playerDatabase";

export default class LoginPage extends Component{

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email : this.email,
            password: this.password
        }

        playerDatabase.forEach(element => {
          if( (element.email === data.email) && (element.password === data.password) )
          {
            console.log("Match");
          }
        })

        axios.post('http://localhost:8000/login', data)
        .then(res =>{
            console.log(data);

        })
        .catch(err => {
            console.log(err);
        })

        // constxapikey='mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7';
        // constaxiosConfig= {​​​​​​​​
        //  headers: {​​​​​​​​
        // 'x-api-key': xapikey
        //  }​​​​​​​​
        //
        //
        //  }​​​​​​​​
        // constbody={​​​​​​​​
        // 'username': "Group4",
        // 'password': "RDVdlFcb2W3H3i_"
        //
        //  }​​​​​​​​
        // axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', body, axiosConfig).then(
        // res=> {​​​​​​​​
        // console.log(res)
        //  }​​​​​​​​
        //
        //  ).catch(
        // err=> {​​​​​​​​
        // console.log(err);
        //  }​​​​​​​​




    };

     render(){
            return(

            <form onSubmit ={this.handleSubmit}>
                <h3>Login</h3>

                <div className= "form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value} />
                </div>

                <div className= "form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value}/>
                </div>

                    <button className="btn btn-primary btn-block">Login</button>

            </form>
                    )
            }
        }
