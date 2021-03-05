import axios from "axios";
import React, { Component } from "react";
import playerDatabase from "./playerDatabase";

export default class SignUp extends Component{

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email : this.email,
            password: this.password
        }



        playerDatabase.push(data);

        console.log(data);

        axios.post('http://localhost:8000/signup',data)
        .then(res =>{
            console.log(res)

        })
        .catch(err => {
            console.log(err)
        })
    };

     render(){
            return(

            <form onSubmit ={this.handleSubmit}>
                <h3>Register your new account</h3>

                <div className= "form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value} />
                </div>

                <div className= "form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value}/>
                </div>

                    <button className="btn btn-primary btn-block">Sign up</button>

            </form>
                    )
            }
        }
