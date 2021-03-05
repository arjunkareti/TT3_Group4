import '../../App.css';
import React from 'react';

export default class PersonDelete extends React.Component {
    handleChange = event =>{
       
    };
    handleSubmit = event => {
        event. preventDefault();
    
 
    };

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            
                <h1>Logout</h1>
                <button type="submit">Login Page</button>
            
        </form>
        ) 
        
    }
}
