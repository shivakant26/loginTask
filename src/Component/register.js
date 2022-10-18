import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registerData } from "../Redux/Action/action";
import { SignupSchema } from "../schemaValidation";

class Register extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="form">
          <Formik
            initialValues={{
              userName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values , {resetForm}) => {
              this.props.dispatch(registerData(values))
              resetForm({ values: "" });
            }}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form>
                <div className="form-field">
                  <TextField
                    error={errors.userName}
                    id="userName"
                    name="userName"
                    label="User Name"
                    size="small"
                    variant="outlined"
                    fullWidth
                    onBlur={handleChange}
                    onChange={handleChange}
                    helperText={errors.userName && errors.userName}
                  />
                </div>

                <div className="form-field">
                  <TextField
                    error={errors.email}
                    id="email"
                    name="email"
                    label="Email"
                    size="small"
                    variant="outlined"
                    fullWidth
                    onBlur={handleChange}
                    onChange={handleChange}
                    helperText={errors.email && errors.email}
                  />
                </div>

                <div className="form-field">
                <TextField
                    error={errors.password}
                    id="password"
                    name="password"
                    label="Password"
                    size="small"
                    variant="outlined"
                    fullWidth
                    onBlur={handleChange}
                    onChange={handleChange}
                    helperText={errors.password && errors.password}
                  />
                </div>
                <div className="form-field">
                  <Button variant="contained" type="submit">
                    Register
                  </Button>
                </div>
                <p>
                  If you have allReady Account. Please <a href="/">Login</a>
                </p>
              </Form>
            )}
          </Formik>
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
