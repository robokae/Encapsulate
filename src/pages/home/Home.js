import { useEffect, useState } from 'react';
import { UserContext } from '../../UserContext.js';
import axios from 'axios';
import SideNavbar from '../../components/sideNavbar/SideNavbar.js';
import './Home.css';
import Post from '../../components/Post/Post.js';
import Topics from '../../pages/topics/Topics.js';

function Home(props) {
    const { signedInUser, onPostsPage } = props;

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

    const changePage = () => {

    }

    return (
        <UserContext.Consumer>
            {(username) => (
                <div className="home">
                    <SideNavbar signedInUser={username} onPostsPage={onPostsPage}/>
                    {onPostsPage 
                        ? <Post posts={userPosts} />
                        : <Topics />
                    }
                    
                </div> 
            )}
            
        </UserContext.Consumer> 
    );
}

export default Home;