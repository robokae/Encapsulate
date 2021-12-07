import './SideNavbar.css';

function SideNavbar() {
    return (
        <div className="side-navbar">
            <div className="create-button-container">
                <button className="create-button">Encapsulate</button>
            </div>
            <div className="nav-links-container">
                <button className="posts-button">Posts</button>
                <button className="topics-button">Topics</button>
            </div>
        </div>
    );
}

export default SideNavbar;