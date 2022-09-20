import { Schema, model } from 'mongoose';
import config from 'config';

const urlSchema = new Schema(
    {
        originalUrl: { type: String },
        urlCode: { type: String },
    },
    {
        collection: config.get('db_collection'),
    }
);

const UrlModel = model('Url', urlSchema);

export default UrlModel;
