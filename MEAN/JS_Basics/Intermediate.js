function isArgumentInt(argument){
    if (argument.constructor != Number) {
        console.log("Please use a Number for the starString function.");
        return false
    }
    return true;
}
function isArgumentArray(element) {
    if (!Array.isArray(element)) {
        console.log("Error: Please input an array");
        return false
    }
    return true
}

function starString(int){
    if(isArgumentInt(int)){
        str =""
        for(int; int > 0; int--){
            str += "*";
        }
        return str;
    }
}
// let stars = starString(100)
// console.log(stars);
function drawStars(array){
    if(isArgumentArray(array)){
        array.forEach(element => {
            console.log(starString(element));
        });
    }
}
//js equates Bool Ture to 1
// drawStars([1,2,"ten",4,true,20, false, true])
function drawStrings(array){
    if(isArgumentArray(array)){
        array.forEach(element => {
            if (element.constructor === Number) {
                console.log(starString(element));
            }
            else if (element.constructor === String) {
                var letter = element[0];
                var size = element.length;
                var answer = ""
                for(size; size > 0; size--){
                    answer += letter; 
                }
                console.log(answer);
            }
            else{
                console.log("??????????");
            }
        });
    }
}
drawStrings(["jay","bobby","timothy"])