export async function main() {
    // You can await a plain value (not a promise)
    // it just passes that value right through
    const hello = await "hello world!";
    console.log(hello); // this prints "hello world!"
}

main();