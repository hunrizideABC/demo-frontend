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
        this.setState({developers: response.data.res,msg: response.data.resultCode});
      });
  }


  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>All </h3>
        {this.state.msg && (
          <div class="alert alert-success">{this.state.msg}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Field</th>
              </tr>
            </thead>
            <tbody>
              {this.state.developers.map((developer) => (
                <tr key={developer.id}>
                  <td>{developer.id}</td>
                  <td>{developer.name}</td>
                  <td>{developer.field}</td>
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
