
const arr = [1, 2, 3, 4, 5]

Array.prototype.myMap = function (callback) {
    let result = []

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]))
    }

    return result
}

let arr2 = arr.myMap(function (i) {
    return i * 2
})

console.log(arr2)





const items = [1, 2, 3, 4, 5]

Array.prototype.myReduce = function (func, initialValue) {
    let res = initialValue;
    if (initialValue) {
        if (this.length === 0)
            return res;
        for (let i = 0; i < this.length; i++) {
            res = func(res, this[i]);
        }
    } else {
        if (this.length === 0)
            throw new TypeError('Reduce of empty array with no initial value');
        else if (this.length === 1)
            return this[0];
        else {
            res = this[0];
            for (let i = 1; i < this.length; i++) {
                res = func(res, this[i]);
            }
        }
    }
    return res;
}
let totalItems = items.myReduce((accumulator, current) => {
    console.log(current)
    return accumulator + current
})


console.log(totalItems)


