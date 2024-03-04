/**
 * Coding Challenge #1
 * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 * 
 * 1. Store Mark's and John's mass and height in variables
 * 2. Calculate both their BMIs using the formula (BMI = mass / height ** 2)
 * 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
 * 
 * TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 * TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
 * 
 * GOOD LUCK 😀
 */
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

//You can use the ** operator to calculate the power of a number.
//It's the same as heightJohn * heightJohn
let BMIMark = massMark / heightMark ** 2;
//Different way to calculate BMI, same result
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
let johnHigherBMI = BMIJohn > BMIMark;
console.log(BMIMark, BMIJohn);

/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.
 */

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}