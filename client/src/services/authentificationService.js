import { setUserSession, getCurrentUser, deleteUserSession } from './localStorageServices'
import { setCookie, getTokenFromCookie, deleteCookie } from './cookieServices'
import store from '../store'
import { AUTHENTICATE, LOG_OUT } from "../actionTypes";

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
                store.dispatch({type: AUTHENTICATE, currentUser: data.current_user});
                window.location = '/profile'
            }
            else {
                console.log('nope')
            }
        })
}

export function logout() {
    deleteUserSession();
    deleteCookie('auth_token');
    store.dispatch({ type: LOG_OUT });
    window.location = '/login'
}

export function syncronizeCurrentUser() {
    if(!getCurrentUser()) {
        let url = 'http://localhost:3001/api/v4/auth/sync';
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
