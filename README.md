# Shortify URL Shortener

The **Shortify URL Shortener** allows quick converting of long

This repository contains the source code for both the `url-shortener-api`, as well as the frontend application, `url-shortener-app`.

For more information on the backend API, view the `README.md` in the `url-shortener-api` folder.

---

## Deployment Links

The frontend application utilises the `React` framework, and is deployed online via vercel, which is accessible via:

- https://govtech-tap-url-shortener.vercel.app/

API calls are made to the backend `Express` server, running on `Node.js`. The backend server is hosted by `Heroku`. As such, FE api calls are made to the url on:

- **POST**: https://tap-shortify.herokuapp.com/url/shorten
- **GET**: https://tap-shortify.herokuapp.com/

---

## Quick Start Guide

Quick setup guide for running the project locally.

### URL Shortener API (BE)

To run the URL shortener API locally:

1. `npm install`
1. `npm start`

### URL Shortener App (FE)

To run the URL shortener app locally:

1. `npm install`
1. `npm start`
