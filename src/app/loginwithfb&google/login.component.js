import React, { Component } from "react";

import "./login.css";
import axios from "axios";
import { Redirect } from "react-router";
import Facebook from "./facebooklogin";
import LoginWithGoogle from "./loginwithgoogle";

import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import { Formik } from "formik";

export default class Login extends Component {
  componentDidMount() {
    if (!!localStorage.getItem("token")) {
      this.props.history.push("/dashboard");
    }
  }

  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };
    axios
      .post("login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.setState({
          loggedIn: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={"/dashboard"} />;
    }
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
            }, 5000);
          }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              errors.email = "*Required";
            } else if (!EmailValidator.validate(values.email)) {
              errors.email = "Invalid email address.";
            }

            if (!values.password) {
              errors.password = "*Required";
            } else if (values.password.length < 8) {
              errors.password = "Password must be 8 characters long.";
            }
            return errors;
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("invalid email address")
              .required("email is required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum."),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;

            return (
              <div className="logidiv">
                <div className="auth">
                  <button
                    className="btn-logo"
                    data-testid="btn-logo"
                    id="LogoBtn"
                  >
                    Yms
                  </button>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        data-testid="email-field"
                        placeholder="Username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                        onChange={(e) => (this.email = e.target.value)}
                        required
                      />
                      {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}{" "}
                    </div>
                    <br />
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        data-testid="password-field"
                        minLength="10"
                        maxLength="10"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password && "error"
                        }
                        onChange={(e) => (this.password = e.target.value)}
                        required
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                    </div>
                    <br />
                    <div>
                      <button
                        className="btnlogin"
                        id="LoginBtn"
                        data-testid="btn-login"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {" "}
                        Login
                      </button>
                      <span> </span>
                      <button
                        className="cancel"
                        type="reset"
                        id="CancelBtn"
                        data-testid="cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                    <h2>{""}</h2>
                  </form>
                  <small className="or">OR</small>
                  <Facebook />
                  <br />
                  <LoginWithGoogle />
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    );
  }
}
