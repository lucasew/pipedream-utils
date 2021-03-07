const toBase64 = require('.')

const input = "teste"
const output = "dGVzdGU="

test("should encode string", () => {
    expect(toBase64(input)).toBe(output)
})

test("should encode a Buffer", () => {
    expect(toBase64(Buffer.from(input))).toBe(output)
})

test("should convert number to string", () => {
    expect(toBase64(2)).toBe("Mg==")
})