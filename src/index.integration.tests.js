const index = require('../src/index');
const casual = require('casual');

describe('integration tests', () => {
    it.skip('Post to Widget 1', async () => {
        await index.widegt1.post(79601408, casual.sentence);
    }, 15000);
  
    it.skip('POST to Widget 2', async () => {
        await index.widget2.post(83197445);
    }, 15000);
  
    it.skip('Get Widget Html', async () => {
        await index.widget2.get(456252456);
    }, 15000);
});