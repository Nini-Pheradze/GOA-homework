// Find The Parity Outlier

const findOutlier = arr =>
    arr.filter(n => n % 2 === 0).length === 1
    ? arr.find(n => n % 2 === 0)
    : arr.find(n => n % 2 !== 0);



// Who has the most money?

function mostMoney(students) {
    if (students.length === 1) return students[0].name;

    let max = -1;
    let richest = "";
    let same = true;

    const firstTotal =
        students[0].fives * 5 +
        students[0].tens * 10 +
        students[0].twenties * 20;

    for (let student of students) {
        const total =
        student.fives * 5 +
        student.tens * 10 +
        student.twenties * 20;

        if (total !== firstTotal) same = false;

        if (total > max) {
        max = total;
        richest = student.name;
        }
    }

    return same ? "all" : richest;
}


// The most common letter

function replaceMostCommonLetter(str, repl) {
    const counts = {};
    
    for (let char of str) {
        if (char !== ' ') counts[char] = (counts[char] || 0) + 1;
    }

    let maxCount = 0;
    let mostCommon = '';
    for (let char of str) {
        if (char !== ' ' && counts[char] > maxCount) {
        maxCount = counts[char];
        mostCommon = char;
        }
    }

    const regex = new RegExp(mostCommon, 'g');
    return str.replace(regex, repl);
}
