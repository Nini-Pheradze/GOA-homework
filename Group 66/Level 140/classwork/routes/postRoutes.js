// 1) გამოიყენეთ param მეთოდი, იმისათის რომ შეამოწმოთ პარამეტრი postId, შეამოწმეთ არსებობს თუ არა კონკრეტული პოსტი თუ არ არსებობს დააბრუნეთ ერორი, თუ არსებობს request ობიექტზე დაამაგრეთ post/posts კუთვნილებები და შემდეგ გამოიყენეთ next, ხოლო იმ კონტროლერებში სადაც მეორდება პოსტის შეამოწმებელკი ლოგიკა წაშალეთ. (ახსენით კომენტარებით რაში გვეხმარება param მეთოდი)

// router.param() არის სპეციალური Middleware ფუნქცია Express-ში, რომელიც საშუალებას გაძლევთ მოახდინოთ მოთხოვნის ავტომატური "დაჭერა" მაშინ, როდესაც URL-ში კონკრეტული პარამეტრი (მაგალითად :id) ფიგურირებს.

// მარტივად რომ ვთქვათ, ეს არის ფუნქცია, რომელიც ეუბნება Express-ს: "თუ ნახავ, რომ მომხმარებელი ითხოვს მისამართს, სადაც არის ცვლადი id, ჯერ ეს კოდი გაუშვი და მერე გადადი სხვა საქმეზე".

const posts = [ { id: 1, title: 'First Post' } ];

const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.param('postId', (req, res, next, postId) => {
    const post = posts.find(p => p.id === postId * 1);

    if (!post) {
        return res.status(404).json({
            status: 'fail',
            message: 'Post can not be found by this id!'
        });
    }

    req.post = post;

    next();
});

router.route('/:postId')
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(postController.deletePost);

module.exports = router;