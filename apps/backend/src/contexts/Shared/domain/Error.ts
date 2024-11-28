/**
 * If parameter received is a string a new Error is thrown
 * otherwise a new Error with the error message passed is thrown
 * @function handleError
 * @throws new Error from the passed string or error.message
 * @returns {never}
 */
const RESET = '\x1b[0m';
const BRIGHT = '\x1b[1m';
const RED = '\x1b[31m';

export function handleError(err: Error | unknown): never {
  if (typeof err === 'string') {
    const error = new Error(RED + BRIGHT + err + RESET);
    if (process.env.NODE_ENV !== 'production') {
      console.trace();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      error.stack;
    }
    throw error;
  }
  if (err instanceof Error) {
    const isTest = process.env.NODE_ENV === 'test';
    if (!isTest) {
      console.log('ERROR STACK: ', err.stack);
    }
    throw new Error(err.message);
  }
  throw new Error('Invalid handleError received parameters');
}
