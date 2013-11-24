
var sets = require("./index.js");

var set1 = [1, 2, 3, 4];
var set2 = [1, 2, 3, 4];

var result = sets.add(set1, set2);

console.log("add result: %s", JSON.stringify(result));


set1 = [1, 2, 3, 4];
set2 = [1, 2, 3, 4];

result = sets.subtract(result, set2);

console.log("subtract result: %s", JSON.stringify(result));


result = sets.intersect(set1, set2);

console.log("intersct result: %s", JSON.stringify(result));
