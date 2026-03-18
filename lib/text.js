const { segment } = require('./list')
const mustString = require('./type')

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

/**
 *
 * @param {string | Buffer} data
 * @returns string
 */
function toBase64(data) {
    let input = data
    if (!Buffer.isBuffer(input)) {
        input = Buffer.from(mustString(input))
    }
    return input.toString('base64')
}

/**
 * Convert a base64 string to a buffer, use method toString to convert to a string
 * @param {string} b64data
 * @returns {Buffer}
 */
function fromBase64(b64data) {
    const data = mustString(b64data)
    return Buffer.from(data, 'base64')
}

module.exports = {
    splitSizeByLine,
    toBase64,
    fromBase64
}
