import { useLocation } from 'react-router-dom';
import Home from '../home/Home.js';
import { ReactComponent as SocialFriends } from './social-friends.svg';
import { ReactComponent as SocialSerenity } from './social-serenity.svg';
import './Landing.css';

const getToken = () => {
    let tokenObject = JSON.parse(sessionStorage.getItem("token"));
    
    return tokenObject
}

function Welcome() {
    return (
        <div className="landing">
            <div className="topLanding">
                <div className="topDiv-words">
                    <div className="topDiv-words-container">
                        <h1 className="topDiv-heading">Welcome to Encapsulate</h1>
                        <h3 className="topDiv-subheading">Discover and join a community of people sharing their amazing stories. Find people and topics to Encapsulate with today! </h3>
                    </div>
                </div>
                <div className="topDiv-image">
                    <SocialFriends className="social-friends" />
                </div>
               
                
            </div>
            <div className="bottomLanding">
                <div className="bottomDiv-image">
                    <SocialSerenity className="social-serenity" />
                </div>
                <div className="bottomDiv-words">
                    <div className="bottomDiv-words-container">
                        <h1 className="bottomDiv-heading">About Encapsulate</h1>
                        <h3 className="bottomDiv-subheading">Encapsulate is a free-form application where you can create journal entries about whatever you want, and with a 500 word limit you are able to make a more complex and succinct point, story, or event.</h3>
                    </div>
                </div>
            </div>
        </div> 
    );
}

function Landing(props) {
    let { signedInUser } = props;
    const location = useLocation();
    let token = getToken();

    if (token === null) {
        return <Welcome />;
    } 

    if (location.state === null)
        return <div></div>

    return <Home signedInUser={signedInUser} onPostsPage={location.state.onPostsPage} />;
}

export default Landing;