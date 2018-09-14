import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }
  componentDidMount = () => {
    if (localStorage.getItem("JWT") !== null) {
      const JWT = localStorage.getItem("JWT");
      axios
        .get("http://localhost:3300/api/jokes", {
          headers: { Authorization: JWT }
        })
        .then(response => {
          this.setState({
            jokes: response.data
          });
        })
        .catch(error => {
          console.log("error " + error);
        });
    }
  };
  render() {
    return <div >
      <ul> {this.state.jokes.map((e,i)=>{
        return <li key={i}><div>{e.setup}</div><div>{e.punchline}</div></li>
      })}</ul>
     {this.state.jokes.length ===0 ? <div>Please <Link to="/login">login</Link></div>:"" }
    </div>;
  }
}

export default Jokes;