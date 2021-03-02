const splitSizeByLine = require('.')

test("if the text is smaller than the block just put it in a list", () => {
    const input = "test"
    const blockSize = 16
    expect(splitSizeByLine(input, blockSize)).toStrictEqual([input])
})

test("if the text is bigger than a block but have a line break then separate the lines", () => {
    const input = `helloworld
world`
    const blockSize = 12
    expect(splitSizeByLine(input, blockSize)).toStrictEqual([
        "helloworld",
        "world"
    ])
})

test("if the line is larger than the block size break the line", () => {
    const input = `helloworld
trabson`
    const blockSize = 6
    expect(splitSizeByLine(input, blockSize)).toStrictEqual([
        "hello",
        "world",
        "trabs",
        "on"
    ])
})