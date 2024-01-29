import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [formvalues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });

  const [error, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  });
  //navigation setup
  const navigate = useNavigate();
  const handlesubmit = () => {
    let isError = false;
    //name error
    if (formvalues.name.length === 0) {
      setErrors((prev) => {
        return { ...prev, name: "Name is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, name: null };
      });
    }
    //username error handler
    if (formvalues.username.length === 0) {
      setErrors((prev) => {
        return { ...prev, username: "UserName is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, username: null };
      });
    }
    //email error handler
    if (formvalues.email.length === 0) {
      setErrors((prev) => {
        return { ...prev, email: "Email is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, email: null };
      });
    }
    //mobile error handler
    if (formvalues.mobile.length === 0) {
      setErrors((prev) => {
        return { ...prev, mobile: "Mobile is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, mobile: null };
      });
    }
    //checkbox error handler
    if (formvalues.registerbox === false) {
      setErrors((prev) => {
        return { ...prev, registerbox: "please check the box" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, registerbox: null };
      });
    }
    if (isError) {
      return;
    } else {
      window.localStorage.setItem("userInfo", JSON.stringify(formvalues));
      navigate("./info");
    }
  };
  return (
    <div className={styles.container}>
      <h1>Super app</h1>
      <p className={styles.belowheading}>create your account</p>
      <div className={styles.inputforform}>
      <p>{error.name}</p>
        <input
          value={formvalues.name}
          onChange={(e) => {
            setFormValues((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          type="text"
          placeholder="Name"
        />
        <p>{error.username}</p>
        <input
          value={formvalues.username}
          onChange={(e) => {
            setFormValues((prev) => {
              return { ...prev, username: e.target.value };
            });
          }}
          type="text"
          placeholder="UserName"
        />
        <p>{error.email}</p>
        <input
          value={formvalues.email}
          onChange={(e) => {
            setFormValues((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type="text"
          placeholder="Email"
        />
        <p>{error.mobile}</p>
        <input
          value={formvalues.mobile}
          onChange={(e) => {
            setFormValues((prev) => {
              return { ...prev, mobile: e.target.value };
            });
          }}
          type="text"
          placeholder="Mobile"
        />
        <p>{error.registerbox}</p>
        <label value={formvalues.registerbox} htmlFor="registerbox">
          <input
            onChange={(e) => {
              setFormValues((prev) => {
                return { ...prev, registerbox: e.target.value };
              });
            }}
            id="registerbox"
            type="checkbox"
            name="registerbox"
            className={styles.box}
          />{" "}
          I have a boat
        </label>
      </div>
      <button onClick={handlesubmit}>Sign up</button>
    </div>
  );
}

export default RegisterForm;
