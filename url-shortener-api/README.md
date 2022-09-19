# URL Shortener API

The url shortener api shortens a provided url, into a shorter version, and returns the shortened url.

This is done by generating a random, unique id for each received URL, and storing it in the database, `MongoDB Cloud`, for retrieval later when queried, where the user will be redirected to the original url.

The backend API is a `Express` application running on, `Node.js`, in `TypeScript` language.

---

## Project Structure

```
|_ config
    |_ default.json (Contains deafult config variables for api)
    |_ test.json (Test config variables)
|_ models
    |_ url.model.ts (Mongoose schema for our url object)
|_ routes
    |_ index.ts (Route registering)
    |_ urlShortener.api.ts (Main route handling)
    |_ urlShortener.ts (URL shortening, MongoDB retrieve/insert)
|_ app.ts (Main entry point for app)
|_ dbConnect.ts (Connects to DB. MongoDB Cloud)
```

---

## Quick Start

To run the API locally:

1. `npm install`
1. `npm run dev` - To start the API server. By default, runs on `localhost:5000`

---

## Routes

This simple URL shortener API only consists of 2 routes:

1. **GET** `/:urlCode` - This route initiates the redirection from the shortened URL, to the original URL
1. **POST** `/url/shorten` - This route creates and returns the created, shortened URL which can be distributed and used

---
