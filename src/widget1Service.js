import {post as clientPost} from './fakeClient';
import '@babel/polyfill';

const post = async (id, title, locale = 'en-US') => {
    const body = {
        id,
        title,
    };

    console.log(`PostComment body = ${JSON.stringify(body)}`);
  
    const url = 'some/endpoint';
    const headers = {
        'Accept': 'application/json',
        'Accept-Language': locale,
    };

    const response = await clientPost(url, body, headers);
  
    return response;
};

export {
    post
};