function binarySearchPosition(numbers, target) {
  // your code here
  let floor = 0;
  let ceiling = numbers.length - 1;
  while (floor <= ceiling) {
    let mid = Math.floor((floor + ceiling) / 2);
    if (target === numbers[mid]) return mid;
    else if (target < numbers[mid]) ceiling = mid - 1;
    else floor = mid + 1;
  }
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7, 8], 6)); // should print 3
