import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registerData } from "../Redux/Action/action";
import { SignupSchema } from "../schemaValidation";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      email: null,
    };
  }
  Register() {
    let register_object = this.state;
    this.props.dispatch(registerData(register_object));
    this.setState({
      username: "",
      password: "",
      email: "",
    });
  }
  render() {
    return (
      <>
        <div className="form">
          <h4>SignUp Form</h4>
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
              label="email"
              variant="outlined"
              size="small"
              onChange={(e) => {
                this.setState({ email: e.target.value });
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
                this.Register();
              }}
            >
              Register
            </Button>
          </div>
          <p>
            If you have allReady Account. Please <a href="/">Login</a>
          </p>
          {/* <Formik
            initialValues={{
              userName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-field">
                  <TextField
                    id="outlined-basic"
                    label="username"
                    name="userName"
                    variant="outlined"
                    size="small"
                  />
                  {errors.userName && touched.userName ? (
                    <div className="error">{errors.userName}</div>
                  ) : null}
                </div>
                <div className="form-field">
                  <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    size="small"
                    name="email"
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-field">
                  <TextField
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    size="small"
                    name="password"
            />
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-field">
                  <Button variant="contained" type="submit">Register</Button>
                </div>
                <p>
            If you have allReady Account. Please <a href="/">Login</a>
          </p>
              </Form>
            )}
          </Formik> */}
        </div>
      </>
    );
  }
}
const mapStateToProps = (registerData) => ({ registerData });

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ registerData });
  return { ...actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
