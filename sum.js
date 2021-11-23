module.exports = function sum(a, b) {
    const res = a + b
    if(Number.isNaN(res)) {
        throw new Error('Invalid Operation')
    }

    return res
}