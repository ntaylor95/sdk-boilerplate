import { widget1Post, widget2Post, widget2Get } from '../src/index';
import casual from 'casual';

describe('integration tests', () => {
    it('Post to Widget 1', async () => {
        await widget1Post(79601408, casual.sentence);
    }, 15000);
  
    it('POST to Widget 2', async () => {
        await widget2Post(83197445);
    }, 15000);
  
    it('Get Widget Html', async () => {
        await widget2Get(456252456);
    }, 15000);
});