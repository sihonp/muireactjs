import { GET_POSTS } from '../actions/types';

const initialState = {};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                postsArry: action.payload
            }
        default:
            return state
    }
}

export default postReducer