// process.stdin/stdout

// 2) მომხმარებელს იქამდე შემოატანინეთ რაიმე სიტყვა სანამ ის არ ჩაწერს exit, თუ მომხმარებლის მიერ შემოტანილი მნიშვნელობა უდრის exit - ს მაშინ გათიშეთ პროგრამა

process.stdout.write("Enter a word 'exit': "); // მომხმარებელს თხოვს ინფორმაციის შემოტანას

let userInput = (data) => {
    const input = data.toString().trim(); // შემოტანილ ინფორმაციას აქცევს სტრინგად და შემდეგ შლის შფეისებს არსებობის შემთხვევაში

    // შემოტანილი ინფორმაციის შესამოწმებლად
    if (input === "exit"){
        console.log(input);
        process.exit(); // პროგრამიდან გამოსასვლელად
    } else {
        process.stdout.write("Enter a word 'exit': ");
    }
};

// უშვებს კოდს ტერმინალში
process.stdin.on('data', userInput);