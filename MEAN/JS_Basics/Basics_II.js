function magic_multiply(x,y){
    if (typeof y === "string"){
        console.log("Error: Can not multiply by string");
    }
    switch(typeof x){
        case "number":
            console.log(x*y);
            break;
        case "object":
            if (Array.isArray(x)){
                var answer = [];
                for(i=0; i < x.length; i++){
                    answer.push(x[i]*y);
                };
                console.log(answer);
                break;
            }
        case "string":
            var answer = ""
            for(i=y; i>0; i--){
                answer += x;
            }
            console.log(answer);
            break;
        default:
            console.log("Error: Invalid format")
    }
}

magic_multiply("Testing",2)