const express = require('express');
const app = express();
app.use(express.json());

const animals = [
    { id: 1, name: "ლომი", age: 5 },
    { id: 2, name: "ვეფხვი", age: 4 },
    { id: 3, name: "სპილო", age: 10 },
    { id: 4, name: "ჟირაფი", age: 7 },
    { id: 5, name: "ზებრა", age: 3 },
    { id: 6, name: "პანდა", age: 6 },
    { id: 7, name: "მგელი", age: 4 },
    { id: 8, name: "მელა", age: 2 },
    { id: 9, name: "დათვი", age: 8 },
    { id: 10, name: "კენგურუ", age: 5 },
    { id: 11, name: "ლეოპარდი", age: 3 },
    { id: 12, name: "გორილა", age: 12 },
    { id: 13, name: "ირემი", age: 4 },
    { id: 14, name: "ცხენი", age: 6 },
    { id: 15, name: "ნიანგი", age: 15 }
];


// მოუსმინეთ GET მოთხოვნას '/animals' ბილიკზე, რომელიც დააბრუნებს მთლიან მასივს

app.get('/animals', (req, res) => {
    res.status(200).json(animals);
});


// 3) მოუსმინეთ GET მოთხოვნას '/animals/:id' ბილკზე, რომელიც id - ის მიხედვით დააბრუნებს შესაბამისი ცხოველის ობიექტს

app.get('/animals/:id', (req, res) => {
    const { id } = req.params;
    const animal = animals.find((a) => a.id === id);

    if (animal) {
        res.status(200).json(animal);
    } else {
        res.status(404).json({ message: "Animal not found" });
    }
});

// 4) მოუსმინეთ POST მოთხოვნას 'animals' მოცემული ბილკზე, რომელიც თქვენს მიერ შექმნილ ობიექტს არსებულ მასივში ჩაამატებს

app.post('/animals', (req, res) => {
    const { name, age } = req.body;

    const newAnimal = {
        id: animals.length > 0 ? animals[animals.length - 1].id + 1 : 1,
        name,
        age
    };

    animals.push(newAnimal);

    res.status(201).json({
        message: "ცხოველი წარმატებით დაემატა",
        animal: newAnimal
    });
});

// 5) მოუსმნიეთ DELETE მოთხოვნას 'animals/:id' მოცემულ ბილიკზე, რომელიც მოცემული id - ით კონკრეტულ ცხოველის ობიექტს მასივიდან წაშლის

app.delete('/animals/:id', (req, res) => {
    const { id } = req.params;

    const animalExists = animals.find((a) => a.id === id);

    if (!animalExists) {
        return res.status(404).json({
            message: `შეცდომა: ცხოველი ID-ით ${id} ვერ მოიძებნა.`
        });
    }
    animals = animals.filter(a => a.id !== id);

    res.status(200).json({
        message: `ცხოველი ID-ით ${id} წარმატებით წაიშალა.`,
        deletedAnimal: animalExists
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// BONUS
// 6) მოუსმინეთ PATCH - მოთხოვნას 'animals/:id' მოცემულ ბილკზე რომელიც კონკრეტული ცხოველის ობიექტის კუთვნილებებს განაახლებს

app.patch('/animals/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const animalIndex = animals.findIndex((a) => a.id === Number(id));

    if (animalIndex === -1) {
        return res.status(404).json({ message: "ცხოველი ვერ მოიძებნა" });
    }

    const updatedAnimal = { 
        ...animals[animalIndex], 
        ...(name && { name }), 
        ...(age && { age }) 
    };

    animals[animalIndex] = updatedAnimal;

    res.status(200).json({
        message: "მონაცემები წარმატებით განახლდა",
        animal: updatedAnimal
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});