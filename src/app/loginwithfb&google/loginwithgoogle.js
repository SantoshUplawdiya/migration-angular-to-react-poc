import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function LoginWithGoogle() {
  const clientId =
    "505564613940-u1v2pmm2nat6naq9lrs8vbphbp50anip.apps.googleusercontent.com";
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    console.clear();
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
              className="btngoogle"
              id="googleBtn"
              data-testid="btn-google"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login with Google
            </button>
          )}
          buttonText="Login with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          isSignedIn={true}
          style={{ width: 50, height: 50, fontSize: 40 }}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default LoginWithGoogle;
