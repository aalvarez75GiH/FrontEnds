import React from 'react'
import { useLocation } from 'react-router'
import { posts } from '../data' 

const Post = () => {
    const location = useLocation()
    console.log(location.pathname) 
    const path = location.pathname.split("/")[2]
    console.log(path)
    const post = posts.find(postFound => postFound.id.toString() === path)
    return (
        <div className="post">
            <img src={post.img} alt="" className="postImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    )
}

export default Post