import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ენდფოინთები
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// MongoDB დაკავშირება და სერვერის ჩართვა
mongoose
    .connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('MongoDB connected successfully!');
        app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
    })
    .catch((err) => console.error('there is an error connecting to MongoDB', err));