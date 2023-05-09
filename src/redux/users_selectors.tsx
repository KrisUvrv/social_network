import { createSelector } from "reselect";
import {AppStateType} from "./redux_store";

const getUsersSelector = (state: AppStateType) => {
    return state.users.users;
}

export const getUsers = createSelector( getUsersSelector, (users) => {
   return users.filter(u => true);
})

export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.users.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.users.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetching;
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.users.followingInProgress;
}

export const getUsersFilter = (state: AppStateType) => {
    return state.users.filter;
}
