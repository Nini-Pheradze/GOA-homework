// 3. Move a Box (Optional DOM Task):
// Create a box (div) and move it 10px to the right every 200ms using setInterval. Stop after it moves 100px.

let div = document.getElementById("box");

let position = 0;

let interval2 = setInterval(() => {
    position += 10;
    box.style.left = position + 'px';

    if (position >= 100) {
        clearInterval(interval2);
    };
}, 200)