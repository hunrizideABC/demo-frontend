import React, { Component } from 'react'
import DeveloperService from "../service/DeveloperService.js";

class CreateDeveloperComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            field: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeFieldHandler = this.changeFieldHandler.bind(this);
        this.createDeveloper = this.createDeveloper.bind(this);
    }

    componentDidMount(){

    }

    createDeveloper = (e) => {
        e.preventDefault();
        let developer = {name: this.state.name, field: this.state.field};
        console.log('developer => ' + JSON.stringify(developer));
        DeveloperService.createDeveloper(developer).then( response => {
            this.props.history.push('/');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeFieldHandler= (event) => {
        this.setState({field: event.target.value});
    }


    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Create Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Field: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.field} onChange={this.changeFieldHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.createDeveloper}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateDeveloperComponent