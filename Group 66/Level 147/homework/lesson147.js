// upsert არის MongoDB-ში ოპცია (boolean), რომელიც გამოიყენება update ოპერაციებში (updateOne, updateMany, findOneAndUpdate).
// მისი მნიშვნელობა ასეთია:


// თუ upsert: false (default) → მხოლოდ განახლდება უკვე არსებული დოკუმენტი


// თუ upsert: true →
// თუ დოკუმენტი არსებობს → განახლდება
// თუ დოკუმენტი არ არსებობს → შეიქმნება ახალი დოკუმენტი


// ანუ: update + insert = upsert