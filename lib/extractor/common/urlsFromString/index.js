const mustString = require('../../../type/mustString')
const urlRegexSafe = require('url-regex-safe')

/**
 * Extract all urls from a string
 * @param {string} text Text to have urls being extracted 
 * @returns {Array<string>} Links extracted
 */
function extractURLsFromString(text) {
    const matches = mustString(text).match(urlRegexSafe())
    if (!matches) {
        return []
    }
    let ret = []
    for (const match of matches) {
        ret.push(match)
    }
    return ret
}

module.exports = extractURLsFromString