function intersection(arr1, arr2) {
    var intersect = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersect.includes(arr1[i])) {
            intersect.push(arr1[i]);
        }
    }
    return intersect;
}

var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];
var intersectArr = intersection(arr1, arr2);
console.log(intersectArr); 
