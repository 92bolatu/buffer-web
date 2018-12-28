/**
 * Http for web by Cassandra 2018.11.21
 */

let Config = {
    Token: null,
    Headers: {"Content-Type": "application/json; charset=utf-8"}
};


const http = (method, url, data) => {
    let body = JSON.stringify(data);
    let headers = {...Config.Headers, Authorization: Config.Token};
    return fetch(url, {method, headers, body})
        .then(response => response.json().then(json => {
            if (response.ok) {
                return json;
            }
            let {status, statusText} = response;
            return Promise.reject({status, statusText, ...json});
        }));
};

const get = (url) => http('GET', url);

const post = (url, data) => http('POST', url, data);

const put = (url, data) => http('PUT', url, data);

const del = (url) => http('DELETE', url);

export default {
    http,
    get,
    post,
    put,
    del,
    Config
};