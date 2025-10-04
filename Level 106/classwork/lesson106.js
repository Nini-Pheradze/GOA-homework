// Create a Promise that resolves after 3 seconds with the message "Task complete" using setTimeout.

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task complete");
    }, 3000); 
});

myPromise.then((message) => {
    console.log(message); 
});