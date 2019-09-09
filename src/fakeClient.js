//good generic GET call
async function get(relativeUrl, headers = {}) {
    return {
        statusCode: 200
    };
}

//good generic POST call
async function post(relativeUrl, body, headers = {}) {
    return {
        statusCode: 201
    };
}

export {
    get,
    post
};