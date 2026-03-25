/**
 * Transforms a list in a list of lists with at most blockSize elements each
 * @param {Array} list The list to be segmented
 * @param {Number} blockSize How many items you want in the sublists
 * @returns {Array}
 */

function segment(list, blockSize) {
    if (!(blockSize > 0)) {
        throw new Error("blockSize must be a number greater than 0")
    }
    let ret = []
    while (list.length !== 0) {
        const cur = list.slice(0, blockSize)
        ret.push(cur)
        list = list.slice(blockSize)
    }
    return ret
}

module.exports = segment