function count(input) {
  // your code here
  return input.reduce((output, currentElement) => {
    if (output[currentElement] === undefined) output[currentElement] = 1;
    else output[currentElement]++;
    return output;
  }, {});
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  return input.reduce((output, currentElement) => {
    if (output[currentElement.key]) output[currentElement.key] += currentElement.value;
    else output[currentElement.key] = currentElement.value;
    return output;
  }, {});
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
