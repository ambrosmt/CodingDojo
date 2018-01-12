Time(11, 45,"PM");
var Period = "AM" || "PM";
function Time(H, M, P){
    if (M < 15){
        var quality = "just after ";
    }
    if (M >= 15 && M < 30){
        var quality = "quarter after ";
    }
    if (M >= 30 && M < 45){
        var quality = "half past ";
    }
    if (M >= 45){
        var quality = "almost "
        if (H == 12){
            H = 1;
            if (P == "AM"){
                P = " in the morning.";
            }
            else{
                P = " in the Afternoon."
            }
        }
        else {
        H++;
        }
    }
    if (P == "AM" && H < 12){
        P = " in the morning ";
    }
    if (P == "PM" && H == 12){
        P = " noon.";
    }
    if (P == "PM" && H < 12 && H > 6){
        P = " in the afternoon."
    }
    if (P == "PM" && H >= 6){
        P = " at night.";
    }
    if (P == "AM" && H == 12){
        P = " midnight."
    }
console.log("It's " + quality + H + P);
}