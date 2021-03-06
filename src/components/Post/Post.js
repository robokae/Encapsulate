import { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as WelcomeImage } from './welcome.svg';
import './Post.css';

// let samplePosts = [
//     {
//         title: "Hello there!",
//         author: "John Smith",
//         date: "2021-12-08",
//         text: "This is my second post!",
//         topic: "Movies",
//         numLikes: 5,
//         numComments: 2
//     },
//     {
//         title: "My first post!",
//         author: "John Smith",
//         date: "2021-12-08",
//         text: "This is my very first post on Encapsulate!",
//         topic: "Sports",
//         numLikes: 10,
//         numComments: 6
//     }
// ]

function Post(props) {
    const { posts } = props; 

    const handleLike = () => {
        
    };

    return (
        <div className="posts-container"> 
            {posts.length > 0 
                ? posts.map((post, index) => {
                    return (
                        <div key={index} className="post-container">
                            <div className="post-content">
                                <div className="post-content-top">
                                    <div className="post-content-top-left">
                                        <h3 className="post-author">{post.author}</h3>
                                        <p className="post-date">Posted {post.date}</p>
                                    </div> 
                                    <div className="post-content-top-right"> 
                                        <div className="post-topic-container">
                                            <p className="post-topic">{post.topic}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content-text">
                                    <p className="post-title">{post.title}</p>
                                    <p className="post-text">{post.text}</p>
                                </div>
                                {/* <div className="post-content-bottom">
                                    <div className="num-likes-container"> 
                                        <p 
                                            className="num-likes"
                                            onClick={handleLike}
                                        >
                                            {post.numLikes} Likes
                                        </p>
                                    </div>
                                    <div className="num-comments-container">
                                        <p className="num-comments">{post.numComments} Comments</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )}) 
                : (
                    <div className="welcome-container">
                        <div className="welcome-container-top">
                            <WelcomeImage className="welcome-image" />
                        </div>
                        <div className="welcome-container-bottom">
                            <h1 className="welcome-heading">Welcome to Encapsulate!</h1>
                            <p className="welcome-subheading">Post your first story by clicking on the Encapsulate button on the top left!</p>
                        </div>
                    </div>
                ) 
            }
        </div>
    );
}

export default Post;