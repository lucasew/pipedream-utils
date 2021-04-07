const diffList = require('.')

test("diff simple list", () => {
    const a = [0,1,2,3,4]
    const b = [2,3,4,5,6]
    const expectedAdd = [0,1]
    const expectedRemove = [5,6]
    expect(diffList(a, b)).toStrictEqual([expectedAdd, expectedRemove])
})