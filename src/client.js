import request from 'request-promise-native';

let baseUrl;

//good place to define any global vars you will need based on environ
switch (process.env.STAGE) {
    default:
    case 'dev': {
        baseUrl = 'https://my-domain/dev/';
        break;
    }
    case 'qa': {
        baseUrl = 'https://my-domain/qa/';
        break;
    }
    case 'sandbox': {
        baseUrl = 'https://my-domain/sandbox/';
        break;
    }
    case 'prod': {
        baseUrl = 'https://my-domain/prod/';
        break;
    }
}

//good generic GET call
async function get(relativeUrl, headers = {}) {
    const url = `${baseUrl}${relativeUrl}`;
    headers['X-Api-Key'] = apiKey;
    const response = await request({
        uri: url,
        headers: headers,
    });

    return response;
}

//good generic POST call
async function post(relativeUrl, body, headers = {}) {
    const url = `${baseUrl}${relativeUrl}`;
    headers['X-Api-Key'] = apiKey;
    const response = await request({
        uri: url,
        method: 'POST',
        headers: headers,
        body: {
            id: body.Id,
            title: body.title
        },
        json: true
    });
    return response;
}

export {
    get,
    post
};