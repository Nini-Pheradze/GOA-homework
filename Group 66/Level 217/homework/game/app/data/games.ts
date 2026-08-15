export interface Game {
    id: string, // სავალდებულო ველები სტრიქონული ტიპით
    name: string, // სავალდებულო ველები სტრიქონული ტიპით
    genre: string, // სავალდებულო ველები სტრიქონული ტიპით მაგ. "action", "rpg", "racing"
    description: string, // სავალდებულო ველები სტრიქონული ტიპით
    fullDetails?: string // arasavaldebulo veli
};

// objects array, by using const it's said that it can't be changed, as about Game[] it's for creating array
export const GAMES : Game[] = [
    {
        id: "1",
        name: "The Witcher 3: Wild Hunt",
        genre: "rpg",
        description: "An open-world action RPG set in a dark fantasy universe.",
        fullDetails: "Geralt of Rivia searches for Ciri while navigating political chaos and deadly monsters."
    },
    {
        id: "2",
        name: "Elden Ring",
        genre: "action",
        description: "A dark fantasy action-RPG featuring massive open world exploration.",
        fullDetails: "Journey through the Lands Between to claim the power of the Elden Ring and become an Elden Lord."
    },
    {
        id: "3",
        name: "Forza Horizon 5",
        genre: "racing",
        description: "Vibrant and ever-evolving open-world landscapes of Mexico.",
        fullDetails: "Drive hundreds of the world's greatest cars through vibrant open-world deserts and jungles."
    }
];


// usual array which saves valid genres
export const VALID_GENRES = ["action", "rpg", "racing"];