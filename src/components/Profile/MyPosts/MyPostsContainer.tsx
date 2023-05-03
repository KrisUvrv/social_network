<<<<<<< HEAD
import React from 'react';
import {actions} from "../../../redux/profile_reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from '../../../redux/redux_store';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profile.posts
=======
import React from "react";
import {actions} from "../../../redux/profile_reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux_store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profile.posts,
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;