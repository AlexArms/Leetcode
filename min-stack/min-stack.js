
var MinStack = function() {
    this.vals = [];
    this.minVals = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.vals.push(val);
    if (this.minVals.length === 0 || this.minVals[this.minVals.length - 1] >= val) {
        this.minVals.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const val = this.vals.pop();
    if (val === this.minVals[this.minVals.length - 1]) {
        this.minVals.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.vals[this.vals.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVals[this.minVals.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */