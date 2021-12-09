import { useNavigate } from 'react-router-dom';
import './SideNavbar.css';

function SideNavbar(props) {
    const { signedInUser } = props;
    const navigate = useNavigate();

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
                <button className="posts-button">Posts</button>
                <button className="topics-button">Topics</button>
            </div>
        </div>
    );
}

export default SideNavbar;