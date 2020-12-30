import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from "../layout/TextInputGroup";
//import {v1 as uuid} from "uuid"; 
import axios from "axios";
class EditContact extends Component {
    state = {
        name:'',
        email:'',
        phone:''
    };

    async componentDidMount(){
        const { id }  = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email:contact.email,
            phone:contact.phone
        });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
       const {name, email, phone} = this.state;
       if(name === ''){
           this.setState({
               errors: {name: 'Name is Required'}
           });
           return;
       }

       if(email === ''){
        this.setState({
            errors: {email: 'Email is Required'}
        });
        return;
    }

    if(phone === ''){
        this.setState({
            errors: {phone: 'Phone is Required'}
        });
        return;
    }
       const { id } = this.props.match.params;
       const updContact = {
           name,
           email,
           phone
       }

       const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);

       dispatch({type: 'UPDATE_CONTACT',payload:res.data});

       // Redirection
       //history.push('contacts')


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
                <div className="card-header">Edit Contat</div>
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
                        <input type="submit" className="btn btn-danger btn-block" value="Update"/>
                    </form>
                </div>
            </div>
                    );
            }}
            </Consumer>
        );
    }
}

export default EditContact;
