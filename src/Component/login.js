import { Button, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginData } from "../Redux/Action/action";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export const SigninSchema = Yup.object().shape({
  userName: Yup.string().min(2, "Too Short!").required("Required"),
  password: Yup.string().min(2, "Too Short!").required("Required"),
});

class Login extends React.Component {
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
              password: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={(values ,{resetForm}) => {
              this.props.dispatch(loginData(values))
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
                    Login
                  </Button>
                </div>
                <p>
                  If you have allReady Account. Please <a href="/register">Register</a>
                </p>
              </Form>
            )}
          </Formik>
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
