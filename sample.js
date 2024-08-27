function findGreatest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return 'Both numbers are equal';
    }
}

const number1 = parseFloat(process.argv[2]);
const number2 = parseFloat(process.argv[3]); 

if (isNaN(number1) || isNaN(number2)) {
    console.log('Please provide two valid numbers.');
} else {
const greatest = findGreatest(number1, number2);
    console.log(`The greatest number is: ${greatest}`);
}
