import React from "react";
import "./signup.css";

export const SignUp = () => {
  return (
    <div className="signup">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="div">
              <div className="rectangle" />
              <p className="the-espees-market">
                <span className="text-wrapper">The </span>
                <span className="span">Espees Market</span>
                <span className="text-wrapper">
                  .<br />
                  Buy, Sell, and Use your espees any way you wish
                  <br />
                </span>
              </p>
              <div className="text-wrapper-2">Create Account</div>
              <div className="button-create">
                <div className="overlap-group-2">
                  <div className="rectangle-2">
                  <div className="text-wrapper-3">Create Account</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-4">Already have an account?</div>
              <div className="text-wrapper-5"><a href="/signin" style={{border:0,backgroundColor:"transparent"}}>Login</a></div>
              <div className="sign-up-with-google">
                <div className="overlap-2">
                  <div className="text-wrapper-6">Sign up with google</div>
                  <div className="rectangle-3" />
                  <img
                    className="google-g-logo"
                    alt="Google g logo"
                    src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/google--g--logo-1.png"
                  />
                </div>
              </div>
              <div className="sign-up-with-FB">
                <div className="overlap-3">
                  <div className="text-wrapper-7">Sign up with Kingchat</div>
                  <div className="rectangle-4" />
                  <div className="group">
                    <img
                      className="image"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/image-3@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="full-name">
                <div className="overlap-4">
                  <input placeholder="firstname" className="input" />
                  
                </div>
              </div>
              <div className="email-address">
                <div className="overlap-4">
                  <input placeholder="Email" className="input" />
                  
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-4">
                  <input placeholder="Phone" className="input" />
                  
                </div>
              </div>
              <div className="password">
                <div className="overlap-4">
                  <input placeholder="Password" className="input" />
                  
                </div>
              </div>
              <img
                className="eye-off"
                alt="Eye off"
                src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/eye-off.svg"
              />
              <img
                className="emarketmockup"
                alt="Emarketmockup"
                src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/emarketmockup-1.png"
              />
              <img
                className="element"
                alt="Element"
                src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/4000663-1.png"
              />
            </div>
            <img
              className="img"
              alt="Image"
              src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/image-2.png"
            />
          </div>
          <div className="text-wrapper-8">English(UK)</div>
          <img
            className="polygon"
            alt="Polygon"
            src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/polygon-1.svg"
          />
        </div>
      </div>
    </div>
  );
};
