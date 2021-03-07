const mustString = require("../../../type/mustString")

/**
 * Extracts the video id from a youtube url
 * @param {string} url 
 */
function extractYoutubeIDFromURL(url) {
    return mustString(url)
    .replace(/https?:/, '')
    .replace(/\//g, '')
    .replace("youtu.be", '')
    .replace("www.", '')
    .replace("youtube.com", '')
    .replace("watch?v=", '')
}

module.exports = extractYoutubeIDFromURL