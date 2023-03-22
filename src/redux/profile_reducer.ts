import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 25},
        {id: 2, message: 'It\'s my first post', likesCount: 79},
        {id: 3, message: 'da-da-da', likesCount: 9},
        {id: 4, message: 'blabla', likesCount: 7},
    ] as Array<PostType>,
    profile: null as ProfileType | null ,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};

        case SAVE_PHOTO_SUCCES:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType };

        default:
            return state;
    }
}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({type: ADD_POST, newPostText});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCES
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCES, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //
    }

};

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit_profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;