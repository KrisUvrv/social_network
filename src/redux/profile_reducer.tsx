import {profileAPI} from "../api/profile_api";
import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux_store";
import {ResultCodesEnum} from "../api/api";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 25},
        {id: 2, message: 'It\'s my first post', likesCount: 79},
        {id: 3, message: 'da-da-da', likesCount: 9},
        {id: 4, message: 'blabla', likesCount: 7},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST':
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case 'SN/PROFILE/SET-STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'SN/PROFILE/SET-USER-PROFILE':
            return {...state, profile: action.profile};
        case 'SN/PROFILE/DELETE-POST':
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        case 'SN/PROFILE/SAVE-PHOTO-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET-USER-PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET-STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE-POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE-PHOTO-SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {
        //
    }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit_profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
