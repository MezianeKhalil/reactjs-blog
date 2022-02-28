import axios from 'axios'
import setAuthHeader from './setAuthHeader'
import { LOGIN, SIGNUP, UPDATE_PROFILE,EDIT_PROFILE, BLOG } from './endPoints'

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
    return axios.post(BLOG, requestBody)
}

// delete blog call
export const DeleteBlogCall = (id)=>{
    const token = localStorage.getItem("TOKEN")
    setAuthHeader(token)
    return axios.delete(`${BLOG}/${id}`)
}


// edit blog call
export const EditBlogCall = (body,id)=>{
    const token = localStorage.getItem("TOKEN")
    setAuthHeader(token)
    return axios.patch(`${BLOG}/${id}`, body)
}

// edit profile call
export const EditProfileCall = (body)=>{
    const token = localStorage.getItem("TOKEN")
    setAuthHeader(token)
    return axios.patch(EDIT_PROFILE, body)
}