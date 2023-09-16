import React from "react";
import "./style.css";

export default SignIn = () => {
  return (
    <div className="signin">
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
               <a href="/marketPage">
                <button className="button-create">
                  <div className="div-wrapper">
                    <div className="text-wrapper-3">Login</div>
                  </div>
                </button>
              </a>
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper-4">Login with Kingschat</div>
                </div>
              </div>
              <div className="text-wrapper-5">Already have an account?</div>
              <div className="text-wrapper-6"><a href="/signup">Sign Up</a></div>
              <div className="email-address">
                <div className="overlap-3">
                  <input placeholder="Email Address/Phone" className="text-wrapper-7 input"/>
                 
                </div>
              </div>
              <div className="password">
                <div className="overlap-3">
                   <input placeholder="Password" className="text-wrapper-7 input"/>
                    <img
                className="eye-off"
                alt="Eye off"
                src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/eye-off-1.svg"
              />
                </div>
              </div>
             
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
              className="image"
              alt="Image"
              src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/image-2.png"
            />
          </div>
          <div className="text-wrapper-8">English(UK)</div>
          <img
            className="polygon"
            alt="Polygon"
            src="https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/polygon-1-1.svg"
          />
        </div>
      </div>
    </div>
  );
};
