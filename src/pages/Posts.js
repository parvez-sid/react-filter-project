import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const posts = await axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/posts/list`);
            setPosts(posts.data.data);
            setLoading(false);
        }
        
        fetchPosts();
    },[])

    return(
       <>
       {loading ? 'loading...........' :
            posts.map((post) => {
                return <li key={post.id}>
                    {post.title}
                </li>
            })
       }
       </>
    )
}

export default Posts