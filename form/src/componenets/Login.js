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

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setErrors(validate(data, "Login"));
  }, [data, touched]);

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notice("success", "you have Logged In successfully !");
    } else {
      notice("error", "Invalid data");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.containerForm}>
        <h1 className={styles.header}>Login</h1>
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
        <div className={styles.formButtons}>
          <Link to="/signup">Sign UP</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
