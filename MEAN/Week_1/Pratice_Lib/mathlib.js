module.exports = function () {
    return {
        add: function (num1, num2) {
            if (typeof num1 === "number"){
                if (typeof num1 === typeof num2){
                    return (num1 + num2)
                }
            }
        },
        multiply: function (num1, num2) {
            if (typeof num1 === "number") {
                if (typeof num1 === typeof num2) {
                    return (num1 * num2)
                }
            }
        },
        square: function (num) {
            if(typeof num === "number"){
                return (num * num)
            }
        },
        random: function (num1, num2) {
            if (typeof num1 === "number") {
                if (typeof num1 === typeof num2) {
                    min = Math.ceil(num1);
                    max = Math.floor(num2)+1;
                    return Math.floor(Math.random()*(max-min))+min;
                }
            }
        }
    }
};