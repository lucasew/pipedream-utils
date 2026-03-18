const { extractURLsFromString, extractYoutubeIDFromURL } = require('./extractor')

describe('extractor domain', () => {
    describe('extractURLsFromString', () => {
        test("should extract a url alone", () => {
            const url = "https://google.com"
            expect(extractURLsFromString(url)).toEqual([url])
        })

        test("should extract a url alone without protocol", () => {
            const url = "google.com"
            expect(extractURLsFromString(url)).toEqual([url])
        })

        test("should extract a newline separated list of urls", () => {
            const urls = [
                "https://stackoverflow.com/questions/6038061/regular-expression-to-find-urls-within-a-string#6041965",
                "https://github.com/"
            ]
            const input = urls.join("\n")
            expect(extractURLsFromString(input)).toEqual(urls)
        })

        test("should extract a space separated list of urls", () => {
            const urls = [
                "https://stackoverflow.com/questions/6038061/regular-expression-to-find-urls-within-a-string#6041965",
                "https://github.com/"
            ]
            const input = urls.join(" ")
            expect(extractURLsFromString(input)).toEqual(urls)
        })

        test("should return a empty list if no matches", () => {
            expect(extractURLsFromString("no matches")).toEqual([])
        })
    })

    describe('extractYoutubeIDFromURL', () => {
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
    })
})