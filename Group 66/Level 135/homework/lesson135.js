/*
    Middleware ფუნქცია Express-ში არის ჩვეულებრივი ფუნქცია,
    რომელიც დგას request-სა (req) და response-ს (res) შორის.

    მას აქვს წვდომა:
    - req (მოთხოვნის მონაცემები)
    - res (პასუხის ობიექტი)
    - next (ფუნქცია, რომელიც გადასცემს კონტროლს შემდეგ middleware-ს)

    Middleware გამოიყენება:
    - მონაცემების შემოწმებისთვის (validation)
    - ავტორიზაციისთვის
    - ლოგირებისთვის
    - შეცდომების დამუშავებისთვის
    - request-ის მოდიფიკაციისთვის

    თუ middleware-ში next() არ გამოიძახება,
    request გაჩერდება და route-მდე ვერ მივა.
*/

const exampleMiddleware = (req, res, next) => {
    console.log("Middleware მუშაობს");
    next(); // გადადის შემდეგ ეტაპზე
};
