export default class UrlShortener {
    createRandomId() {
        return 'testId';
    }

    // Creates the shortened URL and saves it into the MongoDB
    async createShortenedUrl(originalUrl) {
        return {
            originalUrl: originalUrl,
            urlCode: 'testCode',
        };
    }

    // Search database and return url object
    async getUrl(urlCode) {
        if (urlCode == 1) {
            return {
                originalUrl: originalUrl,
                urlCode: 'testCode',
            };
        }
        throw new Error('Invalid URL Code: Item cannot be found');
    }
}
