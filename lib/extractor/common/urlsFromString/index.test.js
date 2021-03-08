const extractURLsFromString = require(".");

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