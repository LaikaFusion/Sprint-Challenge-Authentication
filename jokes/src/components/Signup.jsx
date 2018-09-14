import React, { Component } from "react";
import axios from "axios";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  submitData = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3300/api/register', {
      username: this.state.username,
      password: this.state.password,
    })
    .then( (response) => {
      this.props.history.push('/signin')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
          <input
            onChange={this.inputChange}
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            required
          />
          <input
            onChange={this.inputChange}
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            required
          />
          <input onClick={this.submitData} type="submit" value="Submit" />
      </div>
    );
  }
}

export default Signup;