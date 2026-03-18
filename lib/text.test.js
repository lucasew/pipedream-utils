const { splitSizeByLine, toBase64, fromBase64 } = require('./text')

describe('text domain', () => {
    describe('splitSizeByLine', () => {
        test("if the text is smaller than the block just put it in a list", () => {
            const input = "test"
            const blockSize = 16
            expect(splitSizeByLine(input, blockSize)).toStrictEqual([input])
        })

        test("if the text is bigger than a block but have a line break then separate the lines", () => {
            const input = `helloworld\nworld`
            const blockSize = 12
            expect(splitSizeByLine(input, blockSize)).toStrictEqual([
                "helloworld",
                "world"
            ])
        })

        test("if the line is larger than the block size break the line", () => {
            const input = `helloworld\ntrabson`
            const blockSize = 6
            expect(splitSizeByLine(input, blockSize)).toStrictEqual([
                "hello",
                "world",
                "trabs",
                "on"
            ])
        })
    })

    describe('toBase64', () => {
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
    })

    describe('fromBase64', () => {
        const input = "dGVzdGU="
        const output = "teste"

        test("should decode string", () => {
            expect(fromBase64(input).toString()).toBe(output)
        })

        test("should convert number to string", () => {
            expect(fromBase64("Mg==").toString()).toBe("2")
        })
    })
})