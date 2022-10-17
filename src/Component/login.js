import { Button, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginData } from "../Redux/Action/action";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
    };
  }
  signIn() {
    let login_object = this.state;
    this.props.dispatch(loginData(login_object));
  }
  componentDidMount() {
    let token = localStorage.getItem("token");
    console.log(44444,token)
  }
  render() {
    return (
      <>
        <div className="form">
          <h4>Login here...</h4>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
              size="small"
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>
          <div className="form-field">
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              size="small"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <div className="form-field">
            <Button
              variant="contained"
              onClick={() => {
                this.signIn();
              }}
            >
              Login
            </Button>
          </div>
          <p>
            If you have no Account Please <a href="/register">Register</a>
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ state });

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ loginData });
  return { ...actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
