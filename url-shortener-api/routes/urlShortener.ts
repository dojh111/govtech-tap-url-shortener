import config from 'config';
import crypto from 'crypto';
import UrlModel, { UrlInterface, UrlInterfaceModel } from '../models/url.model';

export default class UrlShortener {
    private createRandomId(): string {
        const idLength: number = config.get('id_length') || 7;
        const numberOfBytes = Math.floor(idLength / 2);
        let id = crypto.randomBytes(numberOfBytes).toString('hex');
        console.log(`[ID GENERATOR] Generated id of: ${id}`);
        return id;
    }

    // Creates the shortened URL and saves it into the MongoDB
    async createShortenedUrl(originalUrl: string): Promise<UrlInterfaceModel> {
        // Check if already existing
        const existingUrl = await UrlModel.findOne({ originalUrl });
        if (existingUrl) {
            // URL has already been converted before, return the existing one
            console.log(
                '[URL SHORTENER] Existing url found, returning existing item'
            );
            return existingUrl;
        }

        const urlCode = this.createRandomId();
        const newUrl = new UrlModel({
            originalUrl,
            urlCode,
        });
        // Save into MongoDB
        await newUrl.save();
        console.log('[MONGODB] Successfully saved new url object');
        return newUrl;
    }

    // Search database and return url object
    async getUrl(urlCode: string): Promise<UrlInterfaceModel> {
        const url = await UrlModel.findOne({ urlCode });
        if (url) {
            console.log('[MONGODB] Item found');
            return url;
        }
        throw new Error('Invalid URL Code: Item cannot be found');
    }
}
