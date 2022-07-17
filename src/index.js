module.exports = function toReadable (number) {
    let num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let num10 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let num10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let num100 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    
    if (number <= 9)  {
        return num1[number];
    } else if (number <= 19 && number >= 10) {
        return num10_19[number - 10];
    } else if (number <= 99 && number >= 20 && number % 10 === 0) {
        return num10[number / 10 - 1];
    } else if (number <= 99 && number >= 20 && number % 10 !== 0) {
        return (num10[((number - (number % 10)) / 10) - 1] + ' ' + num1[number.toString()[1]]);
    } else if (number % 100 === 0) {
        return num100[(number / 100) - 1];
    } else if (number > 100 && number <= 999 && number % 100 > 0 && number % 100 <= 9 && number % 100 !== 0) {
        return (num100[number.toString()[0] - 1] + ' ' + num1[number.toString()[2]]);
    } else if (number > 100 && number <= 999 && number % 100 > 10 && number % 100 <= 19 && number % 100 !== 0) {
        return (num100[number.toString()[0] - 1] + ' ' + num10_19[number.toString()[2]]);
    } else if (number > 100 && number <= 999 && number % 10 === 0) {
        // console.log(number.toString()[1]);
        return (num100[number.toString()[0] - 1] + ' ' + num10[number.toString()[1] - 1]);
    } else if ((number > 100 && number <= 999 && number % 10 !== 0)) {
        return (num100[number.toString()[0] - 1] + ' ' + num10[number.toString()[1] - 1] + ' ' + num1[number.toString()[2]]);
    }
}
