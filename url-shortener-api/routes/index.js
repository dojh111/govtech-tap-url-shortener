import Express from 'express';

let router = Express.Router();

import UrlShortenerApi from './urlShortener.api.js';
const urlShortenerApiRoute = new UrlShortenerApi();
urlShortenerApiRoute.routes(router);

export default router;
