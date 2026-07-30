import { Response } from 'express';
import Post from '../models/Post';
import { AuthRequest } from '../middleware/auth';


export const getPosts = async (req: AuthRequest, res: Response) => {
    try {
        const posts = await Post.find().populate('author', 'username email');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'There is an error while getting posts!' });
    }
};

export const createPost = async (req: AuthRequest, res: Response) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({
            title,
            content,
            author: req.user?.userId,
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error while creating post!" });
    }
};


export const updatePost = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post cannot be found!' });

        if (post.author.toString() !== req.user?.userId) {
        return res.status(403).json({ message: 'You have no right to correct this post!' });
        }

        post.title = title || post.title;
        post.content = content || post.content;
        await post.save();

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Error while updating post!" });
    }
};

export const deletePost = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post cannot be found!' });

        if (post.author.toString() !== req.user?.userId) {
        return res.status(403).json({ message: 'You have no right to delete this post!' });
        }

        await post.deleteOne();
        res.json({ message: 'Post deleteed successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error while deleting post!' });
    }
};

