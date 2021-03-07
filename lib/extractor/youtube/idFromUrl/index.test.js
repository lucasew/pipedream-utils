const extractYoutubeIDFromURL = require('.')
const expectedVideoID = "dQw4w9WgXcQ" // RickRoll

/**
 * Do a testcase that expects the same video id
 * @param {string} input 
 */
function testcase(input) {
    expect(extractYoutubeIDFromURL(input)).toBe(expectedVideoID)
}

test('get id from default url form', () => {
   testcase("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
})

test('get id from youtu.be form', () => {
    testcase("https://youtu.be/dQw4w9WgXcQ")
})

test('get id if you only pass the id', () => {
    testcase(expectedVideoID)
})

test('get id if you pass the normal url without protocol', () => {
   testcase("www.youtube.com/watch?v=dQw4w9WgXcQ")
   testcase("youtube.com/watch?v=dQw4w9WgXcQ")
})

test('get id if you pass the youtu.be url without protocol', () => {
   testcase("youtu.be/dQw4w9WgXcQ")
})

