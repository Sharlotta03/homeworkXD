
// function nameFunc (name) {
//   return `Hello ${name}`
// }

// const result = nameFunc("Alex")

// console.log(result)

// const num = [1, 3, 5, 10, 21, 24]


// function numbers(array) {
//   for (i = 0; i < array.length; i++)
//     if (array[i] >= 10) {
//       console.log(array[i])
//     }
// }

// const result = numbers(num)
// console.log(result)


function calc(num1, num2, operator) {
  if (operator == 'plus') {
    return num1 + num2;
  }
  else if (operator == 'minus') {
    return num1 - num2;
  }
  else if (operator == 'multiply') {
    return num1 * num2;
  }
  else if (operator == 'divide') {
    if (num2 === 0) {
      return `You can't divide by zero`
    } else
    return num1 / num2;
  }
  else {
    return 'Error'
  }
}

console.log(calc(3, 5, 'plus'))
console.log(calc(3, 5, 'minus'))
console.log(calc(3, 5, 'multiply'))
console.log(calc(3, 5, 'divide'))
console.log(calc(3, 0, 'divide'))
console.log(calc(3, 5, 'l'))