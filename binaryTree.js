let chai = require("chai");

class Tree{
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value) {
        if (this.value <= value) {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new Tree(value, null, null);
            }
        } else {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new Tree(value, null, null);
            }
        }
    }

    contains(value) {
        if (this.value === value) {
            return true;
        } else if (value > this.value) {
            return !!(this.right && this.right.contains(value));
        } else {
            return !!(this.left && this.left.contains(value));
        }
    }

    depthFirstTraverse(order, callback) {
        order === "pre" && callback(this.value);
        this.left && this.left.depthFirstTraverse(order, callback);
        order === "in" && callback(this.value);
        this.right && this.right.depthFirstTraverse(order, callback);
        order === "post" && callback(this.value);
    }

    breadthFirstTraverse(callback) {
        const queue = [this];
        while (queue.length) {
            var node = queue.pop();
            callback(node.value);
            node.left && queue.unshift(node.left);
            node.right && queue.unshift(node.right);
        }
    }

    getMinValue() {
        if (this.left) {
            return this.left.getMinValue();
        }

        return this.value;
    }

    getMaxValue(){
        if(this.right) {
            return this.right.getMaxValue();
        }

        return this.value;
    }
}

const { assert } = chai;

const tree = new Tree(5);
for (const value of [3, 6, 1, 7, 8, 4, 10, 2, 9]) tree.insert(value);

/*
  5
 3 6
1 4 7
 2   8
          10
         9  
*/

describe("Binary Search Tree", () => {
    it("Should implement insert", () => {
        assert.equal(tree.value, 5);
        assert.equal(tree.left.value, 3);
        assert.equal(tree.right.value, 6);
        assert.equal(tree.left.left.value, 1);
        assert.equal(tree.right.right.value, 7);
        assert.equal(tree.right.right.right.value, 8);
        assert.equal(tree.left.right.value, 4);
        assert.equal(tree.right.right.right.right.value, 10);
        assert.equal(tree.left.left.right.value, 2);
        assert.equal(tree.right.right.right.right.left.value, 9);
    });

    it("Should implement contains", () => {
        assert.equal(tree.contains(2), true);
        assert.equal(tree.contains(9), true);
        assert.equal(tree.contains(0), false);
        assert.equal(tree.contains(11), false);
    });

    it("Should implement depthFirstTraverse", () => {
        const _pre = [];
        const _in = [];
        const _post = [];
        tree.depthFirstTraverse("pre", value => _pre.push(value));
        tree.depthFirstTraverse("in", value => _in.push(value));
        tree.depthFirstTraverse("post", value => _post.push(value));
        assert.deepEqual(_pre, [5, 3, 1, 2, 4, 6, 7, 8, 10, 9]);
        assert.deepEqual(_in, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.deepEqual(_post, [2, 1, 4, 3, 9, 10, 8, 7, 6, 5]);
    });

    it("Should implement breadthDepthTraverse", () => {
        const result = [];
        tree.breadthFirstTraverse(value => result.push(value));
        assert.deepEqual(result, [5, 3, 6, 1, 4, 7, 2, 8, 10, 9]);
    });

    it("Should implement getMinValue", () => {
        assert.equal(tree.getMinValue(), 1);
    });

    it("Should implement getMaxValue", () => {
        assert.equal(tree.getMaxValue(), 10);
    });
});
