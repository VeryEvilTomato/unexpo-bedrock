import axios from 'axios';

export const GET_TOKEN = "GET_TOKEN"
export const RECEIVE_TOKEN = "RECEIVE_TOKEN"
export const INVALIDATE_TOKEN = "INVALIDATE_TOKEN"
export const DECODE_JWT = "DECODE_JWT"


const requestToken = () => {
    return {
        type: GET_TOKEN,
    }
}

const receiveToken = (token) => {
    return {
        type: RECEIVE_TOKEN,
        token,
    }
}

export const invalidateToken = () => {
    return {
        type: INVALIDATE_TOKEN,
    }
}

export const decodeJWT = () => {
    return {
        type: DECODE_JWT,
    }
}

export function authenticateUser(credentials, request) {
    return function (dispatch) {
        dispatch(requestToken());

        const baseURL = request.baseURL;
        const api = axios.create({
            baseURL,
        })

        return api({
            method: 'post',
            url: '/token/',
            data: credentials,
        }).then(function (response) {
            dispatch(receiveToken(response.data));
        }).then(() => {
            dispatch(decodeJWT())
        });
    }
}