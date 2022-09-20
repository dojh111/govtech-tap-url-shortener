import { Request, Response } from 'express';
import * as express from 'express';
import UrlShortener from './urlShortener';
import multer from 'multer';
import config from 'config';

export default class UrlShortenerApi extends UrlShortener {
    public routes(router: express.Router): void {
        // Retrieve original URL from MongoDB database and redirect user
        router.get('/:urlCode', async (req: Request, res: Response) => {
            try {
                console.log(
                    '[URL - GET ORIGINAL URL] Retrieving original url and redirecting'
                );
                const url = await this.getUrl(req.params.urlCode);
                // console.log(url);
                console.log(`[SERVER REDIRECT] Redirecting to: `);
                console.log(url.originalUrl);
                res.redirect(url.originalUrl);
            } catch (e: any) {
                console.log('[URL - GET ORIGINAL URL] An error has occured');
                console.log(e);
                res.status(500).send('Failed to get URL');
            }
        });

        // Convert the long URL into the short URL
        router.post(
            '/url/shorten',
            multer().none(), // Middleware to parse data in body
            async (req: Request, res: Response) => {
                try {
                    console.log('[URL - POST NEW URL] Shortening URL');
                    const originalUrl = req.body.url;
                    // Request body is valid
                    if (originalUrl) {
                        const url = await this.createShortenedUrl(originalUrl);
                        const urlCode: string = url.urlCode;
                        const baseUrl: string = config.get('default_url');
                        const shortenedUrl = baseUrl + '/' + urlCode;
                        console.log(
                            `[URL SHORTENER] Url ending with: ${shortenedUrl} returned`
                        );
                        const response = {
                            newUrl: shortenedUrl,
                        };
                        res.send(response);
                        return;
                    }
                    throw new Error('Missing body data');
                } catch (e: any) {
                    console.log('[URL - POST NEW URL] An error has occured');
                    console.log(e);
                    res.status(500).send('Failed to shorten URL: ' + e);
                }
            }
        );
    }
}
