import { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavbar from '../../components/sideNavbar/SideNavbar.js';
import Posts from '../../components/Post/Post.js';
import './Topics.css';

function Topics() {
    const [topics, setTopics] = useState([]);
    const [clickedOnTopic, setClickedOnTopic] = useState("");
    const [topicPosts, setTopicPosts] = useState([]);

    useEffect(() => {
        clickedOnTopic !== ""
            ? getTopicPosts(clickedOnTopic)
            : getTopics();
    }, [clickedOnTopic]);

    const getTopics = () => {
        let url = "/allTopics";

        setClickedOnTopic("");

        axios.get(url)
            .then(res => {
                setTopics(res.data);
            });
    };

    const getTopicPosts = (topic) => {
        let url = "/topic?topic=" + topic;

        axios.get(url)
            .then(res => {
                setTopicPosts(res.data);
            });
    };

    const handleTopicClick = (topic) => {
        setClickedOnTopic(topic);
    };

    return (
        <div className="topics-container">
            {clickedOnTopic
                ? <Posts posts={topicPosts} />
                : topics.map((topic, index) => {
                    return (
                        <div 
                            key={index} 
                            className="topic-container"
                            onClick={() => handleTopicClick(topic.topic)}
                        >
                            <p className="topic">{topic.topic}</p>
                        </div>
                    )})}
        </div> 
    );
}

export default Topics;