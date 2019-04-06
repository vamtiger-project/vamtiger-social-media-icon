import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

export default () => describe('vamtiger-social-media-icon', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-social-media-icon.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-social-media-icon.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});