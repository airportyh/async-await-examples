import { sleep } from "./06-sleep";

const numbers = [1, 2, 3, 4];

async function waitAndResolve(seconds) {
    await sleep(seconds);
    return seconds;
}

// If you have an array of promises, you can first
// generate all of them in an array
export async function main() {
    const promises: Promise<number>[] = 
        numbers.map((number) => waitAndResolve(number));
    // then loop through the array of promises
    // and await each one, but this is more tedious
    // that the next solution using Promise.all
    for (let promise of promises) {
        const value: number = await promise;
        console.log(value);
    }
}

// This one does the same thing as the above, but
// using Promise.all to wrap all the promises in a
// parent promise, and then awaits it instead.
export async function main2() {
    const values: number[] = await Promise.all(
        numbers.map((number) => waitAndResolve(number)));
    console.log(values);
}

main2();