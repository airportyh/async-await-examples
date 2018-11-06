// To introduce a delay to mimick network
// conditions, we'll use a promise to
// wrap a setTimeout call.
// oneAsync will wait 1 second, and twoAsync will
// wait 2 seconds.
async function oneAsync(): Promise<number> {
    return new Promise<number>((accept) => {
        setTimeout(() => accept(1), 1000);
    });
}

async function twoAsync(): Promise<number> {
    return new Promise<number>((accept) => {
        setTimeout(() => accept(2), 2000);
    });
}

// The following will complete in 3 seconds.
async function sumTwoNumbersAsync(): Promise<number> {
    const aTwo = await twoAsync();
    const aOne = await oneAsync();
    const sum = aOne + aTwo;
    return sum;
}

// Same as above.
function sumTwoNumbersTedious(): Promise<number> {
    return oneAsync()
        .then((aOne) => {
            return twoAsync()
                .then((aTwo) => {
                    const sum = aOne + aTwo;
                    return sum;
                });
        });
}

// The following version will finish in 2 seconds.
async function sumTwoNumbersParallel(): Promise<number> {
    const aOnePromise = oneAsync();
    const aTwoPromise = twoAsync();
    // because at this point,
    // both setTimeouts have be initiated.
    // and there for the awaits that follow
    // are both waiting for things that are
    // already in flight. So, this function
    // will take 2 seconds: the max of the run
    // time of the 2 awaited promises.
    const aOne = await aOnePromise;
    const aTwo = await aTwoPromise;
    const sum = aOne + aTwo;
    return sum;
}

// This version is the classic version, using
// Promise.all, and has the same run time as the one
// above.
function sumTwoNumbersParallelTedious(): Promise<number> {
    const aOnePromise = oneAsync();
    const aTwoPromise = twoAsync();
    return Promise.all([aOnePromise, aTwoPromise])
        .then(([aOne, aTwo]) => {
            const sum = aOne + aTwo;
            return sum;
        });
}

export async function main() {
    const result1 = await sumTwoNumbersParallel();
    console.log(result1);
    const result2 = await sumTwoNumbersParallelTedious();
    console.log(result2);
}

main();
