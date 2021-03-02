const mustString = require('.')

test("string is fine", () => {
    const str = "teste"
    expect(mustString(str)).toBe(str)
})

test("number is fine", () => {
    const n = 3
    expect(mustString(n)).toBe(String(n))
})

test("boolean is fine too", () => {
    const t = true
    expect(mustString(t)).toBe(String(t))
})

test("undefined not fine", () => {
    expect(() => mustString(undefined)).toThrow()
})

test("null not fine", () => {
    expect(() => mustString(null)).toThrow()
})

test("object not fine", () => {
    expect(() => mustString({})).toThrow()
})


