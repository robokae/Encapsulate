import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SocialNetworking } from './socialNetworking.svg';
import './SignInPopup.css';

let url = "http://localhost:5000/";

const signInUser = (username, password) => {
    console.log(username);
    console.log(password);
}

function SignInForm(props) {
    const { setForm } = props;

    // getting and setting the user login credentials
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // const navigate = useNavigate();
    return (
        <div className="sign-in-form-container">
            <h2>Sign Into Account</h2>
            <form className="sign-in-form" action="" autoComplete="false">
                <input 
                    type="text" 
                    placeholder="Username" 
                    autoComplete="false" 
                    // update username as user types it in the input
                    onChange={(e) => setLoginUsername(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="false" 
                    // update password as user types it in the input
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required/>
                <a className="forgot-password-link" href="/">Forgot Password?</a>
                <button 
                    onClick={(e) => signInUser(e)}
                >
                    Sign in
                </button>
                <p>Don't have an account? Create one <span onClick={setForm} className="sign-in-link">here</span></p>
            </form>
        </div>
    );
}

function SignUpForm(props) {
    const { setForm } = props;

    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");

    const signUpUser = e => {
        if (signUpPassword !== signUpConfirmPassword) {
            alert("Passwords do not match");
            return false;
        }
        else if (signUpPassword.length < 8) {
            alert("Password must be 8 characters or longer");
            return false;
        }
    
        let signUpUrl = url + "signUp";
        
        const signUpInfo = {
            username: signUpUsername,
            email: signUpEmail,
            password: signUpPassword
        };

        console.log(signUpInfo);
    
        axios.post(signUpUrl, signUpInfo);
    }

    return (
        <div className="sign-up-form-container">
            <h2>Sign up</h2>
            <form 
                action="" 
                className="sign-up-form" 
                autoComplete="false"
            >
                <input 
                    type="text" 
                    placeholder="Username" 
                    autoComplete="false" 
                    onChange={(e) => setSignUpUsername(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Email address" 
                    autoComplete="false" 
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="false" 
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Confirm password" 
                    autoComplete="false" 
                    onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                    required 
                />
                <button type="button" onClick={signUpUser}>Create Account</button>
                <p>Already have an account? Sign in <span onClick={setForm} className="sign-up-link">here</span></p>
            </form>
        </div>
    );
}

function SignInPopup(props) {
    const { closePopup } = props;

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
                        ? <SignInForm setForm={() => setForm("signUp")} />
                        : <SignUpForm setForm={() => setForm("signIn")} />
                    }
                </div>
            </div>
        </div>
    );
}

export default SignInPopup;