const baseUrl = 'http://127.0.0.1:8000/api';

export const fetchGetOwners = (endpoint, method, data) => {
    const url = `${baseUrl}/${endpoint}`;
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

export const fetchGetPlots = (endpoint, method, data) => {
    const url = `${baseUrl}/${endpoint}`;
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}