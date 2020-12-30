import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props){
        super();
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value
        }

        console.log(contact);
    }

    static defaultProps = {
        name:"Ramakrishna",
        email:"ramakris.vegoti@gmail.com",
        phone:"966-669-2068"
    }
    render() {
        const {name,email,phone} = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contat</div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name" id="name" type="text" className="form-control form-control-lg" placeholder="Enter name..."
                            defaultValue = {name}
                            ref = {this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" id="email" type="email" className="form-control form-control-lg" placeholder="Enter email..."
                            defaultValue={email}
                            ref = {this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" id="phone" type="text" className="form-control form-control-lg" placeholder="Enter phone..."
                            defaultValue={phone}
                            ref = {this.phoneInput}
                            />
                        </div>
                        <input type="submit" className="btn btn-danger btn-block" value="Add"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;
