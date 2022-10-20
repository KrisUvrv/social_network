import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 25},
        {id: 2, message: 'It\'s my first post', likesCount: 79},
        {id: 3, message: 'dadada', likesCount: 9},
        {id: 4, message: 'blabla', likesCount: 7},
    ]

    let postsElements = posts.map( p => < Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;