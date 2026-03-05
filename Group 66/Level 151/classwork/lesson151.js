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