
const asynex2 = function() {
    console.log("Main thtread start");
    const sentence = "Hello world";

    setTimeout(() => {
        process.stdout.write('H');
    }, 0);
    setTimeout(() => {
        process.stdout.write('E');
    }, 100);
    setTimeout(() => {
        process.stdout.write('L');
    }, 200);
    setTimeout(() => {
        process.stdout.write('L');
    }, 300);
    setTimeout(() => {
        process.stdout.write('O\n');
    }, 350);
}

asynex2();
console.log("main thread en'");
