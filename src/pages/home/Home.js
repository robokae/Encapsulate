import { useEffect, useState } from 'react';
import { UserContext } from '../../UserContext.js';
import axios from 'axios';
import SideNavbar from '../../components/sideNavbar/SideNavbar.js';
import './Home.css';
import Post from '../../components/Post/Post.js';

function Home(props) {
    const { signedInUser } = props;

    const [userPosts, setUserPosts] = useState([]);

    // Fetches the user's posts when the page loads
    useEffect(() => {
        getPosts(signedInUser);
    }, []);

    
    // Returns array of posts
    const getPosts = (signedInUser) => {
        const url = "/getPosts";

        const username = {
            username: signedInUser
        };

        axios.post(url, username)
            .then((res) => {
                setUserPosts(res.data);
            });
    };

    return (
        <UserContext.Consumer>
            {(username) => (
                <div className="home">
                    <SideNavbar signedInUser={username}/>
                    <Post userPosts={userPosts} />
                </div> 
            )}
            
        </UserContext.Consumer> 
    );
}

export default Home;