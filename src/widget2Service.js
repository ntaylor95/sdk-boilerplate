const client = require('./client');

module.exports.get = async (id) => {
    const url = `some/data/${id}`;
    const headers = {
        'Accept': 'application/json'
    };

    const response = await client.post(url, headers);
  
    return response;
};

module.exports.post = async (id, acceptLanguage ) => {
    const url = `some/${id}/action`;
    const headers = {
        Accept: 'application/json',
        'Accept-Language': acceptLanguage
    }; 

    const response = await client.post(url, headers);
    
    return JSON.parse(response);
};