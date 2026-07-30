import { Schema, model, Document, Types } from 'mongoose';


export interface Post extends Document {
    title: string;
    content: string;
    author: Types.ObjectId;
};


const postSchema = new Schema<Post> ({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export default model<Post>('Post', postSchema);