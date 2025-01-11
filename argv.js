const x = parseFloat(process.argv[2]); // Convert to a number
const y = parseFloat(process.argv[3]); // Convert to a number
const sum = x + y;
console.log(sum);

// Explanation:
// process.argv:

// process.argv is an array where:
// process.argv[0] is the Node.js executable path.
// process.argv[1] is the script file path.
// process.argv[2] and onward are the command-line arguments passed.
// parseFloat:

// Converts the string values of process.argv[2] and process.argv[3] into numbers.
// Alternatively, you can use Number() or parseInt() (if working with integers).
