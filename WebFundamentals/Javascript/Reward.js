
function rewardByLength(days){
    var pay = 0.01;
    var sum = 0;
    for (var i = 0; i<days; i++){
        sum = (sum+pay);
        pay = (pay*2);
    }
    console.log(sum);
}
function earnings(amount){
    var pay = 0.01; 
    var day = 0;
    for (var i = 0; i < amount; day++){
        i = (i + pay); 
        pay = (pay * 2);
    }
    console.log(day);
}
rewardByLength(30);
earnings(10000);
earnings(1000000000);
earnings(Infinity);