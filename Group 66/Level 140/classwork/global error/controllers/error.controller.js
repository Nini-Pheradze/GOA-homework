// 2) შექმენით გლობალური ერორის მმართველი ფუნქცია, ყველგან სადაც აბვრუნებთ ერორებს კლიენტთან გამოიძახეთ next და გადაეცით ობიექტი  statusCode და message კუთვნილებებით გლობალურ მმართველ ფუნქციაში დაბეჭდეთ ეს მესიჯი და თან დააბრუნეთ ერორი სტატუსის კოდით/მესიჯით

    exports.getPost = (req, res, next) => {
    if (!req.post) {
        const error = new Error('პოსტის მონაცემები არ მოიძებნა რექვესტში');
        error.statusCode = 404;
        return next(error);
    }

    res.status(200).json({
        status: 'success',
        data: {
        post: req.post
        }
    });
};


exports.updatePost = (req, res, next) => {
    if (!req.body.title) {
        const error = new Error('გთხოვთ მიუთითოთ სათაური განსაახლებლად');
        error.statusCode = 400; // Bad Request
        return next(error);
    }

    const updatedPost = { ...req.post, ...req.body };

    res.status(200).json({
        status: 'success',
        data: {
        post: updatedPost
        }
    });
};