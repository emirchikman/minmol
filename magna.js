class Example {
    constructor() {
        this._drop = true;
        this.stamp = Date.now();  // Current timestamp
    }

    checkCell(cell) {
        if (cell.num === 0 && this._drop && cell.stamp < this.stamp) {
            console.log('Condition met');
            // Additional logic here
        } else {
            console.log('Condition not met');
        }
    }
}

const cell = {
    num: 0,
    stamp: Date.now() - 1000  // 1 second earlier than current timestamp
};

const example = new Example();
example.checkCell(cell);  // This should log 'Condition met'
