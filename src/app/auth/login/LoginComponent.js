import React from "react";
import "./LoginComponent.css";
// import { FormGroup } from "react-bootstrap";

const LoginComponent = () => {
    return (
        <section className="container">
            <form onSubmit="loginProcess()">
                <label for="yms" id="LogoBtn">YMS</label>
                <div className="mb-3">
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        name="email"
                        formControlName="email"
                        placeholder="Username"
                    />
                    {/* {formGroup.controls['email'].errors && formGroup.controls['email'].touched && (
                            <p className="text-danger"> email id is
                        required </p>
                    )}{" "} */}
                    {/* <p *ngIf="formGroup.controls['email'].errors && formGroup.controls['email'].touched" class="text-danger"> email id is
                        required </p> */}
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        formControlName="password"
                        placeholder="password"
                    />
                    {/* {formGroup.controls['password'].errors && formGroup.controls['password'].touched && (
                            <p className="text-danger"> password
                        is required</p>
                    )}{" "} */}
                    {/* <p *ngIf="formGroup.controls['password'].errors && formGroup.controls['password'].touched" class="text-danger">password
                        is required</p> */}
                </div>
                <div className="mb-3">
                    {/* {showError (
                        <p className="text-danger">Invalid emailId or password</p>
                    )}{" "} */}
                    {/* <p *ngIf="showError" class="text-danger">Invalid emailId or password</p> */}
                    <button type="submit" disabled="!formGroup.valid" id="LoginBtn">Login</button>
                    <button type="button" id="CancelBtn" onClick="cancel()">Cancel</button>
                    </div>
                    <label for="or" id="or">OR</label>
                    <div className="mt-3">
                    <button type="button" id="facebookBtn" onClick="loginWithFacebook()">
                        Login with Facebook</button
                    ><br />
                    <br />
                    <button type="button" id="googleBtn" onClick="loginWithGoggle()">
                        Login with Goggle
                    </button>
                </div>
            </form>
        </section>
    );
};

export default LoginComponent;