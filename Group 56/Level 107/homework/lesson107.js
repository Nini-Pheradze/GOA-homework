// 3)

// 🪐 Scenario

// NASA has contracted you to gather and combine information about celestial objects from different data sources. You’ll simulate fetching this data using Promises that resolve or reject after random timeouts.

// 🧠 Instructions

// Create three asynchronous data sources (simulated with Promises):

// One returns basic planet data (e.g., name, size, distance).

// One returns satellite data (e.g., number of moons).

// One returns exploration data (e.g., missions sent).

// Each should randomly succeed or fail after a short delay.

// Use .then() and .catch()

// Handle the success and error of each Promise individually using .then() and .catch().

// Print appropriate success or error messages for each data source.

// Combine all Promises using Promise.all()

// Use Promise.all() to combine the three Promises.

// If all succeed, log a combined “Planet Report” that merges all the information into a single object.

// If any of them fail, handle it gracefully and show which dataset failed.

// Add a small delay simulation

// Each Promise should resolve or reject after a random delay (e.g., between 500ms–2000ms) to mimic real-world async behavior.


const solarSystemPlanets = [
    {
        planetName: "Mercury",
        planetSize: "4,879 km",
        distanceFromEarth: "77 million km",
        numberOfMoons: 0,
        missionSent: true
    },

    {
        planetName: "Venus",
        planetSize: "12,104 km",
        distanceFromEarth: "38 million km",
        numberOfMoons: 0,
        missionSent: false
    },

    {
        planetName: "Mars",
        planetSize: "6,779 km",
        distanceFromEarth: "225 million km",
        numberOfMoons: 2,
        missionSent: true
    },

    {
        planetName: "Jupiter",
        planetSize: "139,820 km",
        distanceFromEarth: "628 million km",
        numberOfMoons: 95,
        missionSent: false
    },

    {
        planetName: "Saturn",
        planetSize: "116,460 km",
        distanceFromEarth: "1.2 billion km",
        numberOfMoons: 146,
        missionSent: true
    },

    {
        planetName: "Uranus",
        planetSize: "50,724 km",
        distanceFromEarth: "2.6 billion km",
        numberOfMoons: 27,
        missionSent: false
    },

    {
        planetName: "Neptune",
        planetSize: "49,244 km",
        distanceFromEarth: "4.3 billion km",
        numberOfMoons: 14,
        missionSent: true
    }
];

const chooseRandomNumber = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const randomPlanet = solarSystemPlanets[Math.floor(Math.random() * solarSystemPlanets.length)]
            resolve(randomPlanet)
        }, 2000)
    })
};


const returnBasicInfo = planet => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({name: planet.planetName, size: planet.planetSize, distance: planet.distanceFromEarth}, 500)
        })
    })
};


const returnMission = planet => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (planet.missionSent) resolve({missions: planet.missionSent})
            else reject({missions: planet.missionSent}, 2000)
        })
    })
};

chooseRandomNumber()
    .then(planet => {
        return Promise.all([returnBasicInfo(planet), returnPlanetMoons(planet), returnMission(planet)])
    })
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected))
