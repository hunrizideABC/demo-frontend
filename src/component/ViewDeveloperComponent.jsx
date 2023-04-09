import React, { Component } from 'react'
import DeveloperService from "../service/DeveloperService.js";

class ViewDeveloperComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            developer: {}
        }
    }

    componentDidMount(){
        console.log(this.state.id);
        DeveloperService.retrieveDeveloper(this.state.id).then( response => {
            this.setState({developer: response.data.res});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Developer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Name:</label>
                            <div> { this.state.developer.name }</div>
                        </div>
                        <div className = "row">
                            <label>  Field:   </label>
                            <div> { this.state.developer.field }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDeveloperComponent
