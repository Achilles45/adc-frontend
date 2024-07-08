"use client"

import { useState } from "react";
import styles from "./input.module.scss";

import { useField } from "formik";

interface InputProps {
  id: string;
  type: "text" | "password" | "tel" | "number" | "email";
  placeholder: string;
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  const [field, meta] = useField(props);

  const [toggleShowPassword, setToggleShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setToggleShowPassword((togglePassword) => !togglePassword);
  };

  const isError = Boolean(meta.error && meta.touched);
  const isSuccess = Boolean(!meta.error && field.value);

  const label = (
    <label
      htmlFor={props.id}
      data-hidelabel={isError || isSuccess ? true : false}
      className={styles["input__label"]}
    >
      {props.label}
    </label>
  );

  const textIcon = (isSuccess || isError) &&
    props.type !== "password" &&
    props.type !== "number" && (
      <div className={styles["input__label-icon"]}>
        {/* <Icon icon={isError ? "fail" : "success"} width={20} height={20} /> */}
      </div>
    );

  const passwordIcon = props.type === "password" && (
    <div className={styles["input__label-icon"]}>
      <button
        type="button"
        aria-label="password"
        onClick={handleToggleShowPassword}
      >
        {/* <Icon
          icon={toggleShowPassword ? "showPassword" : "hidePassword"}
          width={20}
          height={20}
        /> */}
        { toggleShowPassword ? <small style={{ fontWeight: "bold", fontSize: ".8rem", opacity: ".7" }}>Hide</small> : <small style={{ fontWeight: "bold", fontSize: ".8rem", opacity: ".7" }}>Show</small> }
      </button>
    </div>
  );

  const inputType =
    props.type !== "password"
      ? props.type
      : toggleShowPassword
      ? "text"
      : "password";

  return (
    <div className={styles["input"]}>
      <div className={styles["input__field"]}>
        <input
          {...field}
          {...props}
          type={inputType}
          data-success={isSuccess}
          data-error={isError}
        ></input>

        {passwordIcon}
        {textIcon}
        {/* {label} */}
      </div>

      {/* {isError && <p className={styles["input__errors"]}>{meta.error}</p>} */}
    </div>
  );
};

export default Input;
