// 2)

// Fetch User Data:
// Write a function that uses fetch and async/await to retrieve user data from a public API (e.g., https://jsonplaceholder.typicode.com/users). Log the names of all users.

(async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log({error: error});
    }
})()

// 3)

// Handle API Errors:
// Fetch data from an invalid API link inside a try...catch block. Display a custom error message if the request fails.

async function fetchData() {
    try {
        const response = await fetch("https://invalid-api-link.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Unable to fetch!")
    }
}

fetchData()

// 4)

// Retry on Failure:
// Create a function that attempts to fetch data from an API. If the request fails, it retries up to 3 times before throwing an error.

async function fetchWithRetry(url, retries = 3) {
    for (let i = 1; i <= retries; i++) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
}

            const data = await response.json();
            console.log("✅ Data fetched successfully:", data);
            return data;

        } catch (error) {
            console.log(`Attempt ${i} failed: ${error.message}`);

            if (i === retries) {
                console.log("⚠️ All retry attempts failed. Please try again later.");
            } else {
                console.log("🔁 Retrying...");
            }
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/users");



// 5)

// Sequential Requests:
// Make two API calls one after the other using await. For example, first fetch a list of posts, then fetch details for the first post’s author.

async function getPostAndAuthor() {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsResponse.json();

    console.log("✅ Posts loaded.");

    const firstPost = posts[0];
    console.log("📝 First Post:", firstPost.title);

    const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstPost.userId}`);
    const author = await authorResponse.json();

    console.log("Author Info:");
    console.log(author);
}

getPostAndAuthor();
