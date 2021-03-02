const segment = require('../../list/segment')
const mustString = require('../../type/mustString')

/**
 * Splits by line a text to fit in n bytes blocks.
 * @param {string} text Text to be separated
 * @param {number} blockSize Size of each text block
 * @returns {Array<String>}
 */
function splitSizeByLine(text, blockSize) {
    const normalizedText = mustString(text)
    const lines = normalizedText.split("\n")
    let blocks = []
    let current_block = []
    let bytes = 0
    for (let i = 0; i < lines.length; i++) {
        if (bytes + lines[i].length + 1 > blockSize) {
            if (bytes === 0) {
                blocks = [...blocks, ...segment(lines[i], blockSize - 1)]
            } else {
                blocks.push(current_block.join("\n"))
                i--
                current_block = []
                bytes = 0
                continue
            }
        } else {
            current_block.push(lines[i])
            bytes += lines[i].length + 1
        }
    }
    if (current_block.length > 0) {
        blocks.push(current_block.join("\n"))
    }
    return blocks
}

module.exports = splitSizeByLine