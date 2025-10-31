import React, { useImperativeHandle } from "react";
import { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputFocus = useRef();
  useImperativeHandle(ref, () => {
    return { onFocus: customFocus };
  }); // useful whenever we need to use a function to outside function.(not necessary)

  function customFocus() {
    inputFocus.current.focus();
  }
  return (
    <div>
      <label htmlFor="email">{props.children}</label>
      <div>
        <input
          ref={inputFocus}
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChangeHandler}
          onBlur={props.onBlurHandler}
          className={props.isValid === false ? "invalid" : ""}
        />
      </div>
    </div>
  );
});

export default Input;
