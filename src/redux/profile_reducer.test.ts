import profileReducer, {actions} from "./profile_reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 25},
        {id: 2, message: 'It\'s my first post', likesCount: 79},
        {id: 3, message: 'da-da-da', likesCount: 9},
        {id: 4, message: 'blabla', likesCount: 7},
    ],
    profile: null,
    status: '',
};
it(`length of posts should be incremented`,() => {
    // 1. test data
    let action = actions.addPostActionCreator("hello");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
})

it(`message of new post should be correct`,() => {
    // 1. test data
    let action = actions.addPostActionCreator("hello");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].message).toBe("hello");
})

it(`after deleting length should be decremented`,() => {
    // 1. test data
    let action = actions.deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
})

it(`after deleting length shouldn't be decremented if id is incorrect`,() => {
    // 1. test data
    let action = actions.deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
})
