import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SocialNetworking } from './socialNetworking.svg';
import './SignInPopup.css';

// let url = "http://localhost:5000/";


function SignInForm(props) {
    const { setForm, closePopup, loggedIn } = props;

    const navigate = useNavigate();

    // getting and setting the user login credentials
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const signInUser = e => {
        // Prevent page from refreshing upon submit
        e.preventDefault();

        let url = "/signIn";

        const signInData = {
            username: signInUsername,
            password: signInPassword   
        };

        // Send sign in data to back end
        axios.post(url, signInData)
            .then(res => {
                if (res.status === 200) {
                    closePopup();
                    loggedIn();
                    navigate("/home");
                }
            });
    };

    return (
        <div className="sign-in-form-container">
            <h2>Sign Into Account</h2>
            <form 
                className="sign-in-form" 
                action="" 
                autoComplete="false"
                onSubmit={signInUser}
            >
                <input 
                    type="text" 
                    placeholder="Username" 
                    autoComplete="false" 
                    // update username as user types it in the input
                    onChange={(e) => setSignInUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="false" 
                    // update password as user types it in the input
                    onChange={(e) => setSignInPassword(e.target.value)}
                />
                <a className="forgot-password-link" href="/">Forgot Password?</a>
                <button type="submit">Sign in</button>
                <p>Don't have an account? Create one <span onClick={setForm} className="sign-in-link">here</span></p>
            </form>
        </div>
    );
}

function SignUpForm(props) {
    const { setForm, closePopup, loggedIn } = props;

    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");

    const navigate = useNavigate();

    const signUpUser = e => {
        e.preventDefault();
    
        let url = "/signUp";
        
        const signUpInfo = {
            username: signUpUsername,
            email: signUpEmail,
            password: signUpPassword
        };
    
        // Send sign up data to back end
        axios.post(url, signUpInfo)
            .then(res => {
                if (res.status === 200) {
                    closePopup();
                    loggedIn();
                    navigate("/home");
                } 
            });
    }

    return (
        <div className="sign-up-form-container">
            <h2>Sign up</h2>
            <form 
                action="" 
                className="sign-up-form" 
                autoComplete="false"
                onSubmit={signUpUser}
            >
                <div className="label-input-group">
                    {/* <label className="error-label" htmlFor="username">Username already exists</label> */}
                    <input 
                        type="text" 
                        id="username"
                        placeholder="Username" 
                        autoComplete="false" 
                        onChange={(e) => setSignUpUsername(e.target.value)}
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Email address" 
                    autoComplete="false" 
                    onChange={(e) => setSignUpEmail(e.target.value)}
                />
                <div className="label-input-group">
                    {/* Display error label when the password is less than 8 characters */}
                    {/* {signUpPasswordLengthIsGood
                        ? null
                        : <label className="error-label" htmlFor="confirm-password">Password must be at least 8 characters</label>} */}
                    <input 
                        type="password" 
                        placeholder="Password" 
                        autoComplete="false" 
                        onChange={(e) => setSignUpPassword(e.target.value)}
                    />
                </div>
                <div className="label-input-group">
                    {/* Display error label when the passwords do not match */}
                    {/* {signUpPasswordMatches
                        ? null
                        : <label className="error-label" htmlFor="confirm-password">Password does not match</label>} */}
                    <input 
                        type="password" 
                        id="confirm-password"
                        placeholder="Confirm password" 
                        autoComplete="false" 
                        onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Create Account</button>
                <p>Already have an account? Sign in <span onClick={setForm} className="sign-up-link">here</span></p>
            </form>
        </div>
    );
}

function SignInPopup(props) {
    const { closePopup, login } = props;

    // form state
    const [showForm, setForm] = useState('signIn');

    return (
        <div className="sign-in-popup-container">
            <div className="sign-in-popup">
                <div className="sign-in-popup-left">
                    <div className="welcome-msg-container">
                        <SocialNetworking className="social-networking"/>
                        <h2>Welcome</h2>
                        <p>Join a community of passionate Encapsulaters today!</p>
                    </div>
                </div>
                <div className="sign-in-popup-right">
                    <FontAwesomeIcon className="close-button" icon={faTimes} onClick={closePopup}/>
                    {/* Determining which form to display (default is sign in form) */}
                    {showForm === "signIn"
                        ? <SignInForm setForm={() => setForm("signUp")} closePopup={closePopup} loggedIn={login} />
                        : <SignUpForm setForm={() => setForm("signIn")} closePopup={closePopup} loggedIn={login} />
                    }
                </div>
            </div>
        </div>
    );
}

export default SignInPopup;