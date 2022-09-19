import Express from "express";

let router = Express.Router();

import UrlShortenerApi from "./urlShortener.api";
const urlShortenerApiRoute = new UrlShortenerApi();
urlShortenerApiRoute.routes(router);

export default router;
