// use socialmedia;

db.posts.find({}, { title: 0, sharesCount: 0 });

db.posts.find({ tags: { $all: ["films", "drama"] } });

db.posts.find({$or: [
    { years: { $gte: 2010 } },
    { years: { $lt: 2000 } }]
});

db.posts.deleteMany({ tags: "sports" });