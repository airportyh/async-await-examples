async function oneAsync(): Promise<number> {
    return 1;
}

async function twoAsync(): Promise<number> {
    return 2;
}

// Within an async function, you can use the await
// operator to unbox and therefore "await" the
// result of a promise.
async function sumTwoNumbersAsync(): Promise<number> {
    const aOne = await oneAsync();
    const aTwo = await twoAsync();
    const sum = aOne + aTwo;
    return sum;
}

// The above is equivalent to the example below
// with a nested promise chain:
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

export async function main() {
    const result1 = await sumTwoNumbersAsync();
    console.log(result1);
    const result2 = await sumTwoNumbersTedious();
    console.log(result2);
}