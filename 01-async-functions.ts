function one(): number {
    return 1;
}

// Async functions are like functions that
// automatically wrap your return value in
// a promise.
async function oneAsync(): Promise<number> {
    return 1;
}

// It's syntax sugar for this:
export function oneAsyncTedious(): Promise<number> {
    return Promise.resolve(1);
}