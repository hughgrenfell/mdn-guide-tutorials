class Student extends Person {

    #year;  // The hasthag is used to declare a private variable!

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
    
    canStudyArchery() {
        return this.#year > 1;
    }
}