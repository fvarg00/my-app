var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
//document.write("5+2="+theSum1);
var getDiff = function (num1, num2 = 2, num3) {
    if (typeof num3 !== "undefined") {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5-2=" + getDiff(5) + "<br/>");
document.write("5-2-3=" + getDiff(5, 2, 3) + "<br/>");
