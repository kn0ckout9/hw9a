
// Create the class
class account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    // Method`````````````````
    credit(val) {
        this.balance +=val;
    }
    describe() {
        return `Owner: ${this.name}, Balance: ${this.balance}`;
    }
}

// Export two of them
module.exports = account;

