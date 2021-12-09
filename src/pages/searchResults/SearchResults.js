import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/Post/Post.js';
import SideNavbar from '../../components/sideNavbar/SideNavbar.js';
import './SearchResults.css';

function SearchResults() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    const [relevantPosts, setRelevantPosts] = useState([]);

    if (location.state.searchTerm !== searchTerm)
        setSearchTerm(location.state.searchTerm);

    const getRelevantPosts = (searchTerm) => {
        const url = "/search";

        const searchData = {
            searchTerm: searchTerm
        };

        axios.post(url, searchData)
            .then(res => {
                setRelevantPosts(res.data);
            });

    };
    useEffect(() => {
        getRelevantPosts(location.state.searchTerm);
    }, [searchTerm]);

    return (
        <div className="search-results">
            <Post posts={relevantPosts} />
            <SideNavbar />
        </div> 
    );
}

export default SearchResults;