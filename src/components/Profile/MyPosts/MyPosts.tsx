import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
<<<<<<< HEAD
import {PostType} from "../../../types/types";
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";
=======
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
<<<<<<< HEAD
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

=======

    let postsElements = [...props.posts]
        .reverse()
        .map(p => < Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
<<<<<<< HEAD
            <div className={s.posts}>
=======
            <div className={s.item}>
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;