class Queue{
    constructor(...items) {
        this.queue = [...items];
    }
    push(...items) {
        return this.queue && this.queue.unshift(...items);
    }
    pop() {
        return this.queue && this.queue.pop();
    }
}

let mocha = require("mocha");
let chai = require("chai");

const {assert} = chai;

describe("queue tests", ()=>{
    it("init test",()=>{
        let test = new Queue(1,2,3);
        assert.deepEqual(test.queue, [1,2,3]);
    });

    it("push test", ()=>{
        let test = new Queue(1,2,3);
        test.push(4,5);
        assert.deepEqual(test.queue, [4,5,1,2,3]);
    });

    it("pop test", ()=> {
        let test = new Queue(1,2,3);
        assert.equal(test.pop(),3);
    });
})