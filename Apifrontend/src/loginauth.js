

export const getUser = () => {
    const userSession = localStorage.getItem('user');
    if (userSession) return JSON.parse(userSession);
    else return null;
}

export const getToken = () => {
    return localStorage.getItem('token') || null;
}

export const setUserSession = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

export const logOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}