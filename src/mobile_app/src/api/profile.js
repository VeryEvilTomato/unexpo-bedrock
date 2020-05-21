import axios from 'axios';
import { URL } from '@constants'


export const requestProfile = (id, baseURL, token) => {
    return (axios.create({
        method: 'get',
        baseURL,
        url: `${URL.GET_USER}/${id}/`,
        responseType: `json`,
        headers: {
            Authorization: `Bearer ${token.access}`
        }
    }))();
}

export const requestAllProfiles = (baseURL, token) => {
    return (axios.create({
        method: 'get',
        baseURL,
        url: `${URL.GET_USER}/`,
        responseType: `json`,
        headers: {
            Authorization: `Bearer ${token.access}`
        }
    }))();
}

export const modifyProfile = (id, baseURL, token, data) => {
    return (axios.create({
        method: 'post',
        baseURL,
        url: `${URL.GET_USER}/${id}/`,
        data,
        responseType: `json`,
        headers: {
            Authorization: `Bearer ${token.access}`
        }
    }))();
}