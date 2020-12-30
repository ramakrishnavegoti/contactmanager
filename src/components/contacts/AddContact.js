import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from "../layout/TextInputGroup";
//import {v1 as uuid} from "uuid"; 
import axios from "axios";
class AddContact extends Component {
    state = {
        name:'',
        email:'',
        phone:''
    };
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
       const {name, email, phone} = this.state;
       const newContact = {
           //id:uuid(),
           name,
           email,
           phone
       }

       const res = await axios.post("https://jsonplaceholder.typicode.com/users",newContact);

       dispatch({type: 'ADD_CONTACT',payload:res.data});

       // to clear inputs after submit
       this.setState({
            name:'',
            email:'',
            phone:''
       }
       )
       // Redirection
       //this.ptops.history.push('/');

    }
     onChange = (e) => {
            this.setState({[e.target.name] : e.target.value})
    }
    render() {
        const {name,email,phone} = this.state;
        return(
            <Consumer>
            {value =>{
                    const { dispatch } = value;
                    return(
<div className="card mb-3">
                <div className="card-header">Add Contat</div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit.bind(this,dispatch)}>
                        <TextInputGroup 
                        label = "Name"
                        name = "name"
                        id = "name"
                        placeholder = "Enter Name ...."
                        htmlFor = "name"
                        onChange = {this.onChange}
                        value = {name}  />
                        <TextInputGroup 
                        label = "Email"
                        name = "email"
                        id = "email"
                        placeholder = "Enter Email ...."
                        htmlFor = "email"
                        onChange = {this.onChange}
                        value = {email}  />
                        <TextInputGroup 
                        label = "Phone"
                        name = "phone"
                        id = "phone"
                        placeholder = "Enter Phone ...."
                        htmlFor = "phone"
                        onChange = {this.onChange}
                        value = {phone}  />
                        <input type="submit" className="btn btn-danger btn-block" value="Add"/>
                    </form>
                </div>
            </div>
                    );
            }}
            </Consumer>
        );
    }
}

export default AddContact;
