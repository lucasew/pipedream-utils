const mustString = require('../../../type/mustString')

/**
 * Convert a base64 string to a buffer, use method toString to convert to a string
 * @param {string} b64data 
 * @returns {Buffer}
 */
function fromBase64(b64data) {
    const data = mustString(b64data)
    return Buffer.from(data, 'base64')
}

module.exports = fromBase64