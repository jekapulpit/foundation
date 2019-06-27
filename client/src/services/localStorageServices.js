export const setUserSession = (user) => {
    window.localStorage.setItem('currentUser', JSON.stringify(user));
};

export const deleteUserSession = (user) => {
    window.localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
    return JSON.parse(window.localStorage.getItem('currentUser'));
};
