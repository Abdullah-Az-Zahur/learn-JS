function sum(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum = sum + num;
  }
  return sum;
}

console.log(sum([10, 20, 5, 5]));
