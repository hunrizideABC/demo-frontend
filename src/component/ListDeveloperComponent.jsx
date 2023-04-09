import React, { Component } from "react";
import DeveloperService from "../service/DeveloperService.js";


class ListDeveloperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        developers: [],
        msg: null,
    };
    this.refreshDevelopers = this.refreshDevelopers.bind(this);
  }

  componentDidMount() {
    this.refreshDevelopers();
  }

  refreshDevelopers() {
    DeveloperService.retrieveAllDevelopers() //HARDCODED
      .then((response) => {
        console.log(response.data.res);
        this.setState({developers: response.data.res, msg: response.data.resultCode});
      });
  }
  viewDeveloper(id){
    this.props.history.push(`/view_developer/${id}`);
  }

  deleteDeveloper(id){
    DeveloperService.deleteDeveloper(id).then( response => {
        this.setState({developers: this.state.developers.filter(developer => developer.id !== id)});
    });
  }

  editDeveloper(id){
    this.props.history.push(`/edit_developer/${id}`);
  }

  insert_developer(){
    this.props.history.push(`/insert_developer`);
  }
  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>All </h3>
        {this.state.msg && (
          <div class="alert alert-success">{this.state.msg}</div>
        )}
        <button onClick={ () => this.insert_developer()} className="btn btn-info">Insert </button>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Field</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.developers.map((developer) => (
                <tr key={developer.id}>
                  <td>{developer.id}</td>
                  <td>{developer.name}</td>
                  <td>{developer.field}</td>
                  <td>
                  <button onClick={ () => this.editDeveloper(developer.id)} className="btn btn-info">Update </button>
                  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDeveloper(developer.id)} className="btn btn-danger">Delete </button>                       
                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewDeveloper(developer.id)} className="btn btn-info">View </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListDeveloperComponent;
