import React, { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import Button from "./Button";

const Login = (props) => {
  const [userData, setUserdata] = useState({ user: "", password: "" });
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    console.log("use effect in login executed ...");
    const timer = setTimeout(() => {
      setDisable(
        userData.user.trim().length === 0 ||
          userData.password.trim().length === 0
      );
    }, 500);

    return () => {
      clearTimeout(timer); //kill timer variable
      console.log("cleanup");
    };
  }, [userData]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userData.user, userData.password);
  };

  const usernameChnangeHandler = (e) => {
    setUserdata((prev) => ({ ...prev, user: e.target.value }));
  };
  const passwordChnangeHandler = (e) => {
    setUserdata((prev) => ({ ...prev, password: e.target.value }));
  };

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={submitHandler}>
        <div className={`${styles.dataContainer} `}>
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            id="username"
            onChange={usernameChnangeHandler}
            value={userData.user}
          />
        </div>

        <div className={`${styles.dataContainer} `}>
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            onChange={passwordChnangeHandler}
            value={userData.password}
          />
        </div>

        <div className={styles.submit}>
          <Button type="submit" disabled={disable}>
            ورود
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
