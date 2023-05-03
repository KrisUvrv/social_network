import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app_reducer";

let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

});

type RootReducerType = typeof rootReducer; //(globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>

<<<<<<< HEAD:src/redux/redux_store.tsx
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

=======
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878:src/redux/redux_store.ts
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// noinspection TypeScriptUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// noinspection TypeScriptUnresolvedVariable
window.__store__ = store;

export default store;