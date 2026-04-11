// 2) შექმენით გლობალური ერორის მმართველი ფუნქცია, ყველგან სადაც აბვრუნებთ ერორებს კლიენტთან გამოიძახეთ next და გადაეცით ობიექტი  statusCode და message კუთვნილებებით გლობალურ მმართველ ფუნქციაში დაბეჭდეთ ეს მესიჯი და თან დააბრუნეთ ერორი სტატუსის კოდით/მესიჯით

Router.param('posyId', (req, res, next, postId) => {
    const post = postMessage.find(p => p.id === postId * 1);

    if (!post) {
        const error = new Error("Post can not be found by this id!");
        error.statusCode = 404;

        return next(error);
    }

    req.post = post;
    next();
});
