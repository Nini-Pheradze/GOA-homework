// routes/postRoutes.js
router.get('/my-posts', authMiddleware, async (req, res) => {
    try {
        // ვეძებთ პოსტებს, სადაც user ველი ემთხვევა ავტორიზებული მომხმარებლის ID-ს
        const userPosts = await Post.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(userPosts);
    } catch (error) {
        res.status(500).json({ message: "სერვერის შეცდომა პოსტების წამოღებისას" });
    }
});