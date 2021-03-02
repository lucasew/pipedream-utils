function mustString(value) {
    if (typeof value === 'number') {
        return String(value)
    }
    if (typeof value === 'boolean') {
        return String(value)
    }
    if (typeof value != "string") {
        throw new Error(`'${value}' is not a string but its a ${typeof value}`)
    }
    return value
}

module.exports = mustString