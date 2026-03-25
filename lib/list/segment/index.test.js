const segment = require('.')

test("segment with blockSize = 1", () => {
    const input = [1, 2, 3, 4]
    const blockSize = 1
    const output = [
        [1],
        [2],
        [3],
        [4]
    ]
    expect(segment(input, blockSize)).toStrictEqual(output)
})

test("segment with blockSize <= 0 throws error", () => {
    const input = [1, 2, 3]
    expect(() => segment(input, 0)).toThrow()
    expect(() => segment(input, -1)).toThrow()
    expect(() => segment(input, undefined)).toThrow()
    expect(() => segment(input, null)).toThrow()
    expect(() => segment(input, "not a number")).toThrow()
})

test("segment with blockSize = 2 with incomplete last item", () => {
    const input = [1, 2, 3, 4, 5]
    const blockSize = 2
    const output = [
        [1, 2],
        [3, 4],
        [5]
    ]
    expect(segment(input, blockSize)).toStrictEqual(output)
})