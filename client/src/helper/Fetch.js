export const post = (route, body) => {
    return fetch(process.env.REACT_APP_BACKEND_URL + route, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
        });
}

export const get = (route) => {
    return fetch(process.env.REACT_APP_BACKEND_URL + route, {
        method: "GET",
        headers: headers,
    });
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};