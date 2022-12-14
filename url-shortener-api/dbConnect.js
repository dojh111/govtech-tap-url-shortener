import mongoose from 'mongoose';
import config from 'config';

const connectToDb = async () => {
    try {
        const connectionString = config.get('mongodb_connection_string');
        await mongoose.connect(connectionString);
        console.log('[MONGODB CONNECT] Mongodb has successfully connected');
    } catch (e) {
        console.log(
            '[MONGODB CONENCT ERROR] An error has occurred connecting to MongoDB'
        );
        console.log(e);
    }
};

export default connectToDb;
