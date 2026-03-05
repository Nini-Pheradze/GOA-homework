const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// ყველა ფილმის წამოღება (GET)
router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
    });

    // ახალი ფილმის დამატება (POST)
    router.post('/', async (req, res) => {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
    });

    // ფილმის განახლება (PUT)
    router.put('/:id', async (req, res) => {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMovie);
    });

    // ფილმის წაშლა (DELETE)
    router.delete('/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "ფილმი წაიშალა" });
});

module.exports = router;


// const express = require('express');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// const movieRoutes = require('./routes/movieRoutes');

// const app = express();
// app.use(express.json());

// // მონაცემთა ბაზასთან კავშირი
// mongoose.connect('mongodb://localhost:27017/moviesDB')
//   .then(() => console.log("ბაზასთან კავშირი დამყარებულია"))
//   .catch(err => console.error("შეცდომა კავშირისას:", err));

// // Route-ების გამოყენება
// app.use('/auth', authRoutes);
// app.use('/movies', movieRoutes);

// app.listen(3000, () => console.log("სერვერი მუშაობს პორტზე 3000"));