/**
 * Mock classes to avoid calling MongoDB during tests
 */
export default class UrlModel {
    originalUrl = 'testUrl';
    urlCode = 'testCode';
    constructor(originalUrl, urlCode) {
        this.originalUrl = originalUrl;
        this.urlCode = urlCode;
    }
    save() {
        return;
    }

    static findOne({ urlCode }) {
        if (urlCode === 1) {
            return 'fakeUrl';
        }
        return '';
    }
}
