import { get as clientGet, post as clientPost } from './fakeClient';
import '@babel/polyfill';

const get = async (id) => {
    const url = `some/data/${id}`;
    const headers = {
        'Accept': 'application/json'
    };

    const response = await clientGet(url, headers);
  
    return response;
};

const post = async (id, acceptLanguage ) => {
    const url = `some/${id}/action`;
    const headers = {
        Accept: 'application/json',
        'Accept-Language': acceptLanguage
    }; 

    const response = await clientPost(url, headers);
    
    return response;
};

export {
    get,
    post
};