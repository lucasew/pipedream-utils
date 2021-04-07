/**
 * Get the difference between two lists
 * @param {Array} a 
 * @param {Array} b
 * @returns {[Array, Array]} 
 */
function diffList(a, b) {
    return [
        a.filter((v) => !b.includes(v)),
        b.filter((v) => !a.includes(v))
    ]
}

module.exports = diffList