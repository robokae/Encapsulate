import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SocialNetworking } from './socialNetworking.svg';
import './SignInPopup.css';

function SignInForm(props) {
    const { setForm } = props;
    const navigate = useNavigate();
    return (
        <div className="sign-in-form-container">
            <h2>Sign Into Account</h2>
            <form className="sign-in-form" action="" autoComplete="false">
                <input type="text" placeholder="Username or email" autoComplete="false" required/>
                <input type="password" placeholder="Password" autoComplete="false" required/>
                <a className="forgot-password-link" href="">Forgot Password?</a>
                <button 
                    onClick={() => navigate("/home")}
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
    return (
        <div className="sign-up-form-container">
            <h2>Sign up</h2>
            <form action="" className="sign-up-form" autoComplete="false">
                <input type="text" placeholder="Username" autoComplete="false" required />
                <input type="text" placeholder="Email address" autoComplete="false" required />
                <input type="password" placeholder="Password" autoComplete="false" required />
                <input type="password" placeholder="Confirm password" autoComplete="false" required />
                <button>Create Account</button>
                <p>Already have an account? Sign in <span onClick={setForm} className="sign-up-link">here</span></p>
            </form>
        </div>
    );
}

function SignInPopup(props) {
    const { closePopup } = props;
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