import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _state: {

        profile: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 25},
                {id: 2, message: 'It\'s my first post', likesCount: 79},
                {id: 3, message: 'da-da-da', likesCount: 9},
                {id: 4, message: 'blabla', likesCount: 7},
            ],
            newPostText: 'hello'
        },
        dialogs: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Aylin'},
                {id: 3, name: 'Ksenia'},
                {id: 4, name: 'Nastya'},
                {id: 5, name: 'Ksyu'},
                {id: 6, name: 'Olga'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Salut'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessageBody: ""

        },
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;