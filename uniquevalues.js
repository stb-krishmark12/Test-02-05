var arr = [1, 2, 1, 2, 5];
var sorted = arr.slice().sort(); 

var sol = [];
for (var i = 0; i < 5; i++) {
    var foundDuplicate = false;
 for (var j = i + 1; j < 5; j++) {
        if (sorted[i] === sorted[j]) {
          foundDuplicate = true;
            break; 
        }
    }
    if (!foundDuplicate) {
        sol.push(sorted[i]); 
    }
}

console.log(sol); 
