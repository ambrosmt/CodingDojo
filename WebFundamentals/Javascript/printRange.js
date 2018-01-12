function printRange(Start, End, Skip){
    var arr = [];
    if (Skip === undefined){
        Skip = 1;
    }
    if (End === undefined){
        End = Start; 
        Start = 0;
    }
    if (End < 0){
        for (var i = Start; i > End; i -= Skip){
            arr.push(i);
        }
    console.log(arr);
    }
    else {
        for (var i = Start; i < End; i += Skip){
        arr.push(i); 
        }
    console.log(arr);
    }
}
printRange(-3);