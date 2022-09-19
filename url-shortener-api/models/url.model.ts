import { Schema, model, Document } from 'mongoose';
import config from 'config';

export interface UrlInterface {
    id?: string;
    originalUrl: string;
    urlCode: string;
}

export interface UrlInterfaceModel extends Document {
    originalUrl: string;
    urlCode: string;
}

const urlSchema = new Schema(
    {
        originalUrl: { type: String },
        urlCode: { type: String },
    },
    {
        collection: config.get('db_collection'),
    }
);

const UrlModel = model<UrlInterfaceModel>('Url', urlSchema);

export default UrlModel;
