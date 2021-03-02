/**
 * Transforms a list in a list of lists with at most blockSize elements each
 * @param {Array} list The list to be segmented
 * @param {Number} blockSize How many items you want in the sublists
 * @returns {Array}
 */

function segment(list, blockSize) {
    let ret = []
    while (list.length !== 0) {
        const cur = list.slice(0, blockSize)
        ret.push(cur)
        list = list.slice(blockSize)
    }
    return ret
}

module.exports = segment