/**
 * Centralized error reporting function.
 * All unexpected errors should funnel through this function.
 * It is Sentry-aware (can be easily wired to Sentry) and ensures no silent failures.
 *
 * @param {Error} error The error to report
 * @param {Object} [context] Additional context to log
 */
function reportError(error, context = {}) {
    // In a real app with Sentry: Sentry.captureException(error, { extra: context })
    console.error('[ErrorReporter]', error.message || error, context);
}

module.exports = {
    reportError
};