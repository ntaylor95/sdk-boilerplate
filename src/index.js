const widget1Service = require('./widget1Service');
const widget2Service = require('./widget2Service');

module.exports = {
    widget1: {
        post: widget1Service.post
    },
    widget2: {
        get: widget2Service.getById,
        post: widget2Service.post
    }
};
