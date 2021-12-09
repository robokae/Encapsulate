import { useNavigate, useLocation } from 'react-router-dom';
import './SideNavbar.css';

function SideNavbar(props) {
    const { signedInUser, onPostsPage } = props;
    const navigate = useNavigate();
    const location = useLocation();

    const createPost = () => {
        navigate("/create", {state: {signedInUser: signedInUser}});
    }

    return (
        <div className="side-navbar">
            <div className="create-button-container">
                <button 
                    className="create-button"
                    onClick={createPost}
                >
                    Encapsulate
                </button>
            </div>
            <div className="nav-links-container">
                <button 
                    className={`posts-button ${onPostsPage ? "active-link" : ""}`}
                    onClick={() => navigate("/", {state: {onPostsPage: true}})}
                >
                    My Posts
                </button>
                <button 
                    className={`topics-button ${onPostsPage ? "" : "active-link"}`}
                    onClick={() => navigate("/", {state: {onPostsPage: false}})}
                >
                        Topics
                </button>
            </div>
        </div>
    );
}

export default SideNavbar;