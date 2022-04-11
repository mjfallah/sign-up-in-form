import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Validation Function
import { validate } from "./validate";

// Components
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notice } from "./toast";

// Styles
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  useEffect(() => {
    setErrors(validate(data, "SignUp"));
  }, [data, touched]);

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notice("success", "you have Signed Up successfully !");
    } else {
      notice("error", "Invalid data");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.containerForm}>
        <h1 className={styles.header}>Sing Up</h1>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && touched.name
                ? styles.invalidInput
                : styles.validInput
            }
            type="text"
            name="name"
            autoComplete="off"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && (
            <span className={styles.invalidSpan}>{errors.name}</span>
          )}
          {data.name.trim().length > 0 && (
            <span className={styles.validSpan}> OK !</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>E-mail</label>
          <input
            className={
              errors.email && touched.email
                ? styles.invalidInput
                : styles.validInput
            }
            type="text"
            name="email"
            autoComplete="off"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && (
            <span className={styles.invalidSpan}>{errors.email}</span>
          )}
          {data.email.trim().length > 0 && !errors.email && (
            <span className={styles.validSpan}> OK !</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.invalidInput
                : styles.validInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span className={styles.invalidSpan}>{errors.password}</span>
          )}
          {data.password.trim().length > 0 && !errors.password && (
            <span className={styles.validSpan}> OK !</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.invalidInput
                : styles.validInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className={styles.invalidSpan}>{errors.confirmPassword}</span>
          )}
          {data.confirmPassword.trim().length > 0 &&
            !errors.confirmPassword && (
              <span className={styles.validSpan}> OK !</span>
            )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>Accept our terms of privacy </label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span className={styles.invalidSpan}>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;