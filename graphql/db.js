const people = [
    {
        id: 1,
        name: "Yuseon",
        age: 29,
        gender: "female"
    },
    {
        id: 2,
        name: "Sungjun",
        age: 28,
        gender: "male"
    },
    {
        id: 3,
        name: "Mike",
        age: 27,
        gender: "male"
    },
    {
        id: 4,
        name: "Daisy",
        age: 26,
        gender: "female"
    },
    {
        id: 5,
        name: "Hongsam",
        age: 5,
        gender: "female"
    }
];

export const getPeople = () => people;

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

export const deletePerson = (id) => {
    const cleanedPeople = people.filter(person => person.id != id);
    if(people.length > cleanedPeople.length){
        person = cleanedPeople;
        return true;
    } else {
        return false;
    }
};

export const addPerson = (name, age, gender) => {
    const newPerson = {
        id: `${people.length + 1}`,
        name,
        age,
        gender
    };
    people.push(newPerson);
    return newPerson;
}
