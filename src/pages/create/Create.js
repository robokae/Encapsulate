import { useState } from 'react';
import './Create.css';

function Create() {
    const [postText, setPostText] = useState("");

    return (
        <div className="create-post-container">
            <div className="create-post-top">
                <h2 className="heading">Create Encapsulation</h2>
                <button className="post-button">Post Encapsulation</button>
            </div>
            <div className="create-post-bottom">
                <div className="form-container">
                    <input type="text" className="post-title-input" placeholder="Give your post a title" name="post-title"/>

                    <div className="post-text-container">
                        <textarea 
                            type="text" 
                            className="post-input" 
                            placeholder="Start typing to Encapsulate..." 
                            name="post"
                            onChange={e => setPostText(e.target.value)}
                        />
                        <div className="word-count-container">
                            <p className="word-count">{postText === "" ? 0 : postText.split(" ").length}/500 words</p>
                        </div>
                    </div>

                    <input type="text" className="topic-input" placeholder="Add topic (optional)" name="topic"></input>
                </div>
            </div>
        </div>
    );
}

export default Create;