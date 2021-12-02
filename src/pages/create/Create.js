import './Create.css';

function Create() {
    return (
        <div className="create">
            <div className="postIt">
                <div className="header">
                    <h2>Create Encapsulation</h2>
                </div>
                <div className="post">
                    <button>Post Encapsulation</button>
                </div>
            </div>
            <div className="encaps-post">
                <div className="text-container">
                    <div className="title">
                        <input type="text" className="title-text" placeholder="Give your post a title" id="name" name="name">
                        </input>
                    </div>
                    <div className="post-and-count">
                        <div className="post-text">
                            <input type="text" className="title-text" placeholder="Start typing to Encapsulate..." id="name" name="name"></input></div>
                        <div className="word-count">/ 500 words</div>
                    </div>
                    <div className="topic">
                        <input type="text" className="topic-text" placeholder=" Add topic (optional)" id="name" name="name"></input>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Create;