import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { useState } from 'react';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => { history.push("/") }).catch(error => alert(error.message))
    }

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then(auth => { history.push("/") }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link>
                <img className="login__logo" src="https://privatejobvacancy.in/wp-content/uploads/2022/05/Amazon-Jobs.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton"> Sign In</button>
                </form>

                <p> By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__registerButton">Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;