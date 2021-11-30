import { ReactComponent as SocialNetworking } from './socialNetworking.svg';
import './SignInPopup.css';

function SignInPopup() {
    return (
        <div className="sign-in-popup">
            <div className="sign-in-popup-left">
                <div className="welcome-msg-container">
                    <SocialNetworking className="social-networking"/>
                    <h2>Welcome</h2>
                    <p>Join a community of passionate Encapsulaters today!</p>
                </div>
            </div>
            <div className="sign-in-popup-right">
                <div className="sign-in-form-container">
                    <h2>Sign Into Account</h2>
                    <form className="sign-in-form" action="">
                        <input type="text" placeholder="Username or email" autoComplete="off" required/>
                        <input type="password" placeholder="Password" autoComplete="off" required/>
                        <a href="">Forgot Password?</a>
                        <button>Sign in</button>
                        <span>Don't have an account? Create one <a href="">here</a></span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignInPopup;