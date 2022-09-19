import config from 'config';
import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import router from './routes/index';
import connectToDb from './dbConnect';

const startServer = async () => {
    try {
        const port = config.get('port');
        const appName = config.get('app_name');
        const expressApp = Express();
        expressApp.use(Cors());
        expressApp.use(Express.json());
        expressApp.use(Express.urlencoded({ extended: true }));
        expressApp.use(Helmet());
        expressApp.use(router); // Register the router object we will be using with this server

        // Connect to cloud MongoDB
        await connectToDb();

        // Start up server on configured port
        const server = expressApp.listen(port, () => {
            console.log(
                `[SERVER STARTUP - ${appName}] Listening on port: ${port}`
            );
        });
    } catch (e: any) {
        console.log(
            '[SERVER ERROR] An error has occurred to the server. Shutting down'
        );
        console.log(e);
    }
};

startServer();
