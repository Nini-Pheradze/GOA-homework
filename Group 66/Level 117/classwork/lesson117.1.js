// გამოიყენეთ stdin ტერმინალიდან ინფორმაციის შემოსატანად, როგორც მოგეხსენებატ ტერმინალიდან შემოტანილი ინფორმაცია არის ორობით ფორმატში ანუ Buffer ობიექტის სახით, გამოიყენეთ შესაბამისიმეთოდი რომ გარდაქმნათ სტრინგად, თუ მომხმარებელი შემოიტანს რიცხვს გამოუყენეთ Error კლასი რომ გამოიწვიოთ ერრორი throw ოპერატორის გამოყენებით (ერრორი: არ შეიძლება რიცხვის შემოტანა) თუ ის იქნება ჩვეულებრივი სტრინგი ციფრების გარეშე მაშინ დაამატეთ ფაილში სახელად result.txt

const fs = require('fs');

process.stdin.on('data', (data) => {
    try{
        const input = data.toString().trim();

        if(!isNaN(input)) {
            throw new Error("It should not be number!");
        }

        if(/\d/.test(input)) {
            throw new Error("String should not include number!");
        }

        fs.appendFileSync("result.txt", input + "\n");
        console.log('String is added successfully!');
    } catch(error) {
        console.log('Error:', error.mesaage);
    } finally {
        process.exit();
    }
});

