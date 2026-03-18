const { segment, diffList } = require('./list')

describe('list domain', () => {
    describe('segment', () => {
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
    })

    describe('diffList', () => {
        test("diff simple list", () => {
            const a = [0,1,2,3,4]
            const b = [2,3,4,5,6]
            const expectedAdd = [0,1]
            const expectedRemove = [5,6]
            expect(diffList(a, b)).toStrictEqual([expectedAdd, expectedRemove])
        })
    })
})