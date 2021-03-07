const fromBase64 = require('.')

const input = "dGVzdGU="
const output = "teste"

test("should decode string", () => {
    expect(fromBase64(input).toString()).toBe(output)
})

test("should convert number to string", () => {
    expect(fromBase64("Mg==").toString()).toBe("2")
})