const findTheOldest = function(people){
    theOldestPerson = people.reduce(function(oldestPerson,nextPerson) {
        oldestAge = age(oldestPerson);
        nextAge = age(nextPerson);
        return oldestAge > nextAge ? oldestPerson : nextPerson;
    })
    return theOldestPerson;
}

function age(person){
    const currentYear = new Date().getFullYear();
    if (!person.yearOfDeath) person.yearOfDeath = currentYear;
    return person.yearOfDeath - person.yearOfBirth;
}

// Below answer 'incorrect' since it actually adds a yearOfDeath of the object returned even when they're alive

// const findTheOldest = function(people) {
//     const currentYear = new Date().getFullYear();
//     // if alive, set a 'death' date of currentYear
//     const aliveAge = people.map(person => {
//         if (!("yearOfDeath" in person)) person.yearOfDeath = currentYear;
//         return person
//     });

//     const peopleAge = aliveAge.sort((a,b) => {

//         let firstAge = a.yearOfDeath - a.yearOfBirth;
//         let secondAge = b.yearOfDeath - b.yearOfBirth;
//         return firstAge > secondAge ? -1 : 1;
//     });
//     console.log(peopleAge);
//     return peopleAge[0];
// };

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
      name: "Superman",
      yearOfBirth: 2010,
    },
]


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
