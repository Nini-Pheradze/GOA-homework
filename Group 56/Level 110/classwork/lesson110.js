// საკლასო დავალება:

// შექმენით ასინქრონული ფუნქცია სახელად getFootballData, სადაც მოცემულ ლინკზე გააგზავნით requests და წამოღებულ ინფორმაციას თან გადაიყვანთ json ფორმატში, რომ შემდეგ დაბეჭდოთ ის.

// https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal

const getFootballData = async () => {
    const url = await fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal");
    const sports = await url.json();
    for (const sport of sports.data.sports){
        console.log(sport);
    }
}

getFootballData()



// შექმენით ფუნქცია, რომელიც დააბრუნებს promise-ს 2 წამში. თუ randomNumber ნაკლები იქნება 0.5-ზე promise-მა მოახდინოს resolve "success" სთრინგით, ხოლო სხვა შემთხვევაში reject "fail სთრინგით".

// შექმენით ასინქრონული ფუნქცია, სადაც გექნებათ try catch კოდის ბლოკი - დაიბეჭდება resolved value / rejected value.

async function getFootballData() {
    const url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("დაფიქსირდა შეცდომა:", error);
    }
}

getFootballData(); 


// საკლასო დავალება:

// შექმენით ასინქრონული ფუნქცია, სადაც აუცილებლად გექნებათ try catch ბლოკი. try-ში fetch ფუნქცია გამოიძახეთ და გადაეცით ნებისმიერი ლინკი. მაგ ლინკიდან ამოღებულ ინფორმაციაზე გამოიძახეთ json მეთოდი და საბოლოოდ დაბეჭდეთ ეგ ინფორმაცია. catch-ში კი დაბეჭდეთ error ობიექტში.

async function getData() {
    try {
        const response = await fetch("https://api.agify.io/?name=michael");
        const data = await response.json();
        console.log(data);
    } catch (error) {
    console.error("დაფიქსირდა შეცდომა:", error);
    }
}

getData();