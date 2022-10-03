function sortArray(array){
    for (var i = 0; i < array.length-1; i++){
        for (var j = i + 1; j < array.length-1; j++){
            if(array[i]>array[j]){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}


function divisibles(array){
    var sum = 0;
    for (var q = 0; q < array.length; q++){
        if (array[q]%5===0){
            sum=sum+array[q];
        }
    }
    return sum;
}


function printArray(array){
    for (var q = 0; q<array.length;q++){
        
        console.log(array[q]);
    }
}


var array = [4, 3, 55, 5, 0, 1, -2];
var x = sortArray(array);
console.log("The sum is: "+ divisibles(x));
printArray(x);
