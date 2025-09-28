import React, { useState, useReducer, useEffect } from "react";

export default function LoginPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [validEmail, setValidEmail] = useState(undefined);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [validPassword, setValidPassword] = useState(undefined);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    let timerVal = setTimeout(() => {
      //validating logic
      console.log("validating logic");

      setFormValid(
        enteredEmail.includes("@") && enteredPassword.trim().length >= 6
      );
    }, 500);

    //cleanup function
    return () => {
      console.log("cleanup function");
      clearTimeout(timerVal);
    };

    /**
     Here, for the first time always "validating logic" then "cleanup function" will be executed
     from next state change(component render) always "cleanup function" then "validating logic" will be executed
     so that timer always refreshed with new time limit, when user stops typing only then it wait for full time limit.
     */
  }, [enteredEmail, enteredPassword]);

  const handelEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handelPasswordChange = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handelValidEmail = () => {
    setValidEmail(enteredEmail.includes("@"));
  };

  const handelValidPassword = () => {
    setValidPassword(enteredPassword.trim().length >= 6);
  };

  return (
    <div className="login-card" aria-live="polite">
      <form className="login-form">
        <label htmlFor="email">E-Mail</label>
        <div>
          <input
            id="email"
            type="text"
            value={enteredEmail}
            onChange={handelEmailChange}
            onBlur={handelValidEmail}
            className={validEmail === false ? "invalid" : ""}
          />
        </div>

        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            value={enteredPassword}
            onChange={handelPasswordChange}
            onBlur={handelValidPassword}
            className={validPassword === false ? "invalid" : ""}
          />
        </div>

        <div className="button-row">
          <button type="submit" disabled={!formValid} className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
