import React, { useState, useReducer, useEffect } from "react";

export default function LoginPage(props) {
  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [validEmail, setValidEmail] = useState(undefined);
  //   const [enteredPassword, setEnteredPassword] = useState("");
  //   const [validPassword, setValidPassword] = useState(undefined);
  const [formValid, setFormValid] = useState(false);

  function emailReducer(state, action) {
    switch (action.type) {
      case "EMAIL_INPUT":
        return { value: action.val, isValid: undefined };
      case "EMAIL_IS_VALID":
        return { value: state.value, isValid: state.value.includes("@") };
      default:
        return state.value;
    }
  }

  function passwordReducer(state, action) {
    switch (action.type) {
      case "PASSWORD_INPUT":
        return { value: action.val, isValid: undefined };
      case "PASSWORD_IS_VALID":
        return { value: state.value, isValid: state.value.trim().length >= 6 };
      default:
        return state.value;
    }
  }

  const [emailState, emailDispatcher] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  const [passwordState, passwordDispatcher] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  useEffect(() => {
    let timerVal = setTimeout(() => {
      //validating logic
      console.log("validating logic");

      setFormValid(
        emailState.value.includes("@") && passwordState.value.trim().length >= 6
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
  }, [emailState.isValid, passwordState.isValid]); // in this case useEffect only gets call on validation execution.

  const handelEmailChange = (event) => {
    //setEnteredEmail(event.target.value);
    emailDispatcher({ val: event.target.value, type: "EMAIL_INPUT" });
  };

  const handelPasswordChange = (event) => {
    //setEnteredPassword(event.target.value);
    passwordDispatcher({ val: event.target.value, type: "PASSWORD_INPUT" });
  };

  const handelValidEmail = () => {
    //setValidEmail(emailState.value.includes("@"));
    emailDispatcher({ val: emailState.value, type: "EMAIL_IS_VALID" });
  };

  const handelValidPassword = () => {
    //setValidPassword(passwordState.trim().length >= 6);
    passwordDispatcher({ val: passwordState.value, type: "PASSWORD_IS_VALID" });
  };

  function handelSubmit(event) {
    event.preventdefault();
    props.onLogin(emailState.value, passwordState.value);
  }

  return (
    <div className="login-card" aria-live="polite">
      <form className="login-form" onSubmit={handelSubmit}>
        <label htmlFor="email">E-Mail</label>
        <div>
          <input
            id="email"
            type="text"
            value={emailState.value}
            onChange={handelEmailChange}
            onBlur={handelValidEmail}
            className={emailState.isValid === false ? "invalid" : ""}
          />
        </div>

        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            value={passwordState.value}
            onChange={handelPasswordChange}
            onBlur={handelValidPassword}
            className={passwordState.isValid === false ? "invalid" : ""}
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
