import { useState } from "react";

const UploadPost = () => {
    const { createPost } = usePost();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: e.target.title.value,
            content: e.target.content.value
        };

        e.target.reset();
        createPost(data);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Upload Post</h3>
            <input type="text" name="title" placeholder="Post Title" required/><br />
            <textarea name="content" placeholder="Post content" required>

            </textarea><br />
            <button>Submit</button>
        </form>
    )
};

export default UploadPost;
