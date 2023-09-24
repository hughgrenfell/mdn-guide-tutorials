const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};

const btn = document.querySelector('button');
const person1 = new Person('Dude');

const output = document.querySelector('#output');
function handleClick() {
    output.textContent = `You have created ${person1.name}! ${person1.introduceSelf()}`;
}

btn.addEventListener('click', handleClick);
