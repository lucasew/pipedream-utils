const { reportError } = require('./errorReporter')

function mustString(value) {
    if (typeof value === 'number') {
        return String(value)
    }
    if (typeof value === 'boolean') {
        return String(value)
    }
    if (typeof value != "string") {
        const error = new Error(`'${value}' is not a string but its a ${typeof value}`)
        reportError(error, { value, type: typeof value })
        throw error
    }
    return value
}

module.exports = mustString
