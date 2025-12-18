// Buffer - ის გამოყენებით, შექმენით 10 ადგილიანი მეხსიერება, მეორე არგუმენტად კი გადაეცით ascii ცხრილიდან რომელიმე სიმბოლო, ასო მაგალითად 'N', საბოლოო შედეგი კი დაბეჭდეთ

const buffer = require('buffer');

const bufferAlloc = Buffer.alloc(10, 'N');

console.log(bufferAlloc);