jest.mock('../../models/url.model');

import UrlShortener from '../urlShortener';
import config from 'config';

describe('UrlShortener tests', () => {
    let urlShortener;

    beforeAll((done) => {
        urlShortener = new UrlShortener();
        done();
    });

    test('Unit test: CreateRandomId, default length created', () => {
        const result = urlShortener.createRandomId();
        const expectedLength = config.get('id_length');
        expect(result.length).toBe(expectedLength);
    });

    test('Unit test: getUrl, url retrieved', async () => {
        const urlCode = 1;
        const result = await urlShortener.getUrl(urlCode);
        expect(result).toBeDefined();
    });

    test('Unit test: getUrl, url not retrieved, error thrown', async () => {
        try {
            const urlCode = 0;
            await urlShortener.getUrl(urlCode);
        } catch (e) {
            expect(e.message).toBe('Invalid URL Code: Item cannot be found');
        }
    });

    test('Integration test: createShortenedUrl, success', async () => {
        const result = await urlShortener.createShortenedUrl('originalTestUrl');
        console.log(result);
        expect(result.originalUrl.originalUrl).toBe('originalTestUrl');
        const expectedLength = config.get('id_length');
        expect(result.originalUrl.urlCode.length).toBe(expectedLength);
    });
});
