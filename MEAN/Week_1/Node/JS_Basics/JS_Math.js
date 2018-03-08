//error Helpers
function isArrayError(element){
    if (!Array.isArray(element)) {
        return console.log("Error: Please input an array")
    }
}

function zero_negativity(array){
    isArrayError(array);
    var warning = false;
    var answer = true;
    array.forEach(element => {
        if(typeof element != "number")
            warning = true;
        if(element < 0)
            answer = false;
        });
    if(warning){
        console.log("Warning: Array contains an elements that are not numbers");
    }
    return console.log(answer);
}
test1 = [1, 2, 3, 4];
test2 = [1, 2, -3, 4];
test3 = [1, 2, "hello", 4];
// zero_negativity(test3);

function is_even(number){
    if(typeof number != "number"){
        console.log("Error: Please input a number");
    }
    if((number % 2) == 0){
        // return console.log(true);
        return true;
    }
    // return console.log(false);
    return false;
}
// is_even(2);
function how_many_even(array){
    isArrayError(array);
    var count = 0;
    array.forEach(element => {
        if(is_even(element)){
            count++;
        }
    });
    return count;
}
// console.log(how_many_even(test2));
function create_dummy_array(size){
    var array = [];
    while(size > 0){
        array.push(Math.floor(Math.random()*10))
        size --;
    }
    return array;
}
// console.log(create_dummy_array(5));
function random_choice(array){
    isArrayError(array);
    var size = array.length; 
    var idx = Math.floor(Math.random()*size)
    return array[idx];
}
console.log(random_choice(test1));