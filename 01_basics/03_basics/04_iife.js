// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // Unnond IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Nitin')
