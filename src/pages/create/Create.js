import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Create.css';

function Create() {
    const [postTitle, setPostTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [postTopic, setPostTopic] = useState("");

    const location = useLocation();

    const handleSetPostTitle = e =>
        setPostTitle(e.target.value)

    const handleSetPostText = e =>
        setPostText(e.target.value)

    const handleSetPostTopic = e => 
        setPostTopic(e.target.value)

    const handleCreatePost = () => {
        let url = "/createPost";

        let postAuthor = location.state.username;
        let date = new Date();

        let postDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate().toString().padStart(2, '0')}`;

        console.log(postTopic);
        
        const postData = {
            title: postTitle,
            author: postAuthor,
            date: postDate,
            text: postText,
            topic: postTopic
        };

        axios.post(url, postData);
    }

    return (
        <div className="create-post-container">
            <div className="create-post-top">
                <h2 className="heading">Create Encapsulation</h2>
                <button 
                    className="post-button"
                    onClick={handleCreatePost}
                >
                    Post Encapsulation
                </button>
            </div>
            <div className="create-post-bottom">
                <div className="form-container">
                    <input 
                        type="text" 
                        className="post-title-input" 
                        placeholder="Give your post a title" 
                        name="post-title"
                        onChange={handleSetPostTitle}
                    />

                    <div className="post-text-container">
                        <textarea 
                            type="text" 
                            className="post-input" 
                            placeholder="Start typing to Encapsulate..." 
                            name="post"
                            onChange={handleSetPostText}
                        />
                        <div className="word-count-container">
                            <p className="word-count">{postText === "" ? 0 : postText.length}/1000 characters</p>
                        </div>
                    </div>

                    <input 
                        type="text" 
                        className="topic-input" 
                        placeholder="Add topic (optional)" 
                        name="topic"
                        onChange={handleSetPostTopic}
                    />
                </div>
            </div>
        </div>
    );
}

export default Create;