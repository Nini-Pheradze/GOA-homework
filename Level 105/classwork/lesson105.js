// Write a function that takes an object and a key, and returns true only if the key is an own property of the object. Test it with at least three different objects.

const myObj = {
    name: "Nini",
    logName: function(){
        console.log(this.name)
    }
}

const myobj2 = {
    surname: "Pheradze"
}

const myobj3 = {
    isStudent: true
}

const checkKey= (obj, key) => Object.hasOwn(obj, key);

console.log(checkKey(myObj, "name"))
console.log(checkKey(myobj2, "surname"))
console.log(checkKey(myobj3, "isGOAMentor"))