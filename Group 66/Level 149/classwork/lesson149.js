const express = require('express');
const app = express();
const PORT = 3000;

// Middleware JSON-ის წასაკითხად
app.use(express.json());

// მთავარი Route
app.get('/', (req, res) => {
    res.send('სერვერი წარმატებით გაეშვა!');
});

// მარტივი API ენდპოინტი მაგალითისთვის
app.get('/api/info', (req, res) => {
    res.json({
        status: 'success',
        message: 'Express პროექტი მუშაობს'
    });
    });

app.listen(PORT, () => {
    console.log(`სერვერი ჩართულია პორტზე: http://localhost:${PORT}`);
    });