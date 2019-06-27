import { setUserSession, getCurrentUser } from './localStorageServices'
import { setCookie, getTokenFromCookie } from './cookieServices'
import store from '../store'
import {SET_OBJECT_LIST} from "../actionTypes";

export function authentificateUser(userCredintials) {
    let url = 'http://localhost:3001/api/v4/auth';
    let requestOpts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredintials)
    };
    fetch(url, requestOpts)
        .then((response) => {return response.json()})
        .then((data) => {
            if(data.token) {
                setUserSession(data.current_user);
                setCookie('auth_token', data.token);
                window.location = '/profile'
            }
            else {
                console.log('nope')
            }
        })
}

export function syncronizeCurrentUser() {
    if(!getCurrentUser()) {
        let url = 'http://localhost:3001/api/v4/sync';
        let requestOpts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getTokenFromCookie()
            },
        };
        fetch(url, requestOpts)
            .then((response) => { return response.json() })
            .then((data) => {
                if(data.current_user) {
                    setUserSession(data.current_user);
                }
            });
    }
    return getCurrentUser()
}
