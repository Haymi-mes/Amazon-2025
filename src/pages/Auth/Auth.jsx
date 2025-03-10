import React, { useState, useContext } from "react";
import Layout from "../../Components/Layout/LayOut";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styels from "./Signup.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { BeatLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  // console.log(email, password);

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation()
  console.log(navStateData);
  

  // console.log(user);

  const authHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      //firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          // console.log(userCredential);
          // ...

          dispatch({
            type: Type.SET_USER,
            user: userCredential.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          // console.log(error);
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // console.log(userCredential);

          dispatch({
            type: Type.SET_USER,
            user: userCredential.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          setLoading({ ...loading, signUp: false });
          setError(error.message);
        });
    }
  };

  return (
    <section className={styels.login}>
      <div>
        <Link to="/">
          <img
            src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg"
            alt=""
          />
        </Link>
      </div>
      <div className={styels.login__container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small
            style={{
              padding:"5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
            >
              {navStateData?.state?.msg}
            </small>
          )
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            className={styels.signin_btn}
            name="signin"
          >
            {loading.signIn ? <BeatLoader color="#0c91db" /> : "Sign In"}
          </button>
        </form>
        {/* Aggrement */}
        <p>
          By signing in, you agree to the conditions of use and sale of this
          clone of Amazon. Please see our Privacy Notice, Cookie Notice, and
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          className={styels.register_btn}
          name="sigup"
        >
          {loading.signUp ? (
            <BeatLoader color="#0c91db" />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ padding: "20px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
