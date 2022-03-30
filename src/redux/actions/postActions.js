import axios from 'axios'
import { POST_API_KEY, POST_URL, GET_POSTS } from "./types";

export const getPosts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${POST_URL}token=${POST_API_KEY}&lang=en`)
        await dispatch({ type: GET_POSTS, payload: response.data.articles })
    } catch (error) {
        console.log(error.message)
    }
}