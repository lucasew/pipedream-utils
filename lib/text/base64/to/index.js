const mustString = require('../../../type/mustString')

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

module.exports = toBase64