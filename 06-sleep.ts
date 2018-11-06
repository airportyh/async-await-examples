/*

Now with async await, you can create a
sleep function, just like C or Python or Ruby!
You can use this inside of async functions,
and you have to remember to await it. Example:

async function main() {
    console.log("I'll be back in 5");
    await sleep(5);
    console.log("I am back!");
}
*/
export function sleep(seconds) {
    return new Promise<number>((accept) => {
        setTimeout(() => accept(), seconds);
    });
}