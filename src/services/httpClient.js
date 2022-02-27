import axios from 'axios'
import setAuthHeader from './setAuthHeader'
import { LOGIN, SIGNUP, UPDATE_PROFILE, CREATE_BLOG } from './endPoints'

// login call
export const loginCall = (requestBody) => {
    return axios.post(LOGIN, requestBody)
}

// signup call
export const signupCall = (requestBody) => {
    return axios.post(SIGNUP, requestBody)
}

// update profile info
export const UpdateProfileCall = (requestBody)=>{
    const token = localStorage.getItem("TOKEN")
    setAuthHeader(token)
    return axios.post(UPDATE_PROFILE, requestBody)
}

// create blog call
export const CreateBlogCall = (requestBody)=>{
    const token = localStorage.getItem("TOKEN")
    setAuthHeader(token)
    return axios.post(CREATE_BLOG, requestBody)
}