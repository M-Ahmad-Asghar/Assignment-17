// 01.Write a js program to check whether a character is uppercase or lowercase alphabet.

var lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
var caseChk = 'a';
if (caseChk.length>1) {
    console.log('Please Enter only One Chracter');
} 
if (lowerCaseAlphabet.includes(caseChk)) {
    console.log(`${caseChk}, is a lower case Character`);
} 
if (upperCaseAlphabet.includes(caseChk)) {
    console.log(`${caseChk}, is a upper case Character`);
}

// 02.Write a js program to input Week number and print week day.

var weekDays = ['','Monday', 'Tuesday','Wedsnesday','Thirsday','Friday','Saturday','Sunday'];
var inputDayNum = 7;
if (inputDayNum<=7 && inputDayNum>0) {
    console.log(weekDays[inputDayNum]);
}
if (inputDayNum>7 || inputDayNum<0) {
    console.log('Please Input valid Day Number i.e 1 to 7');
}

// 03.Write a js program to input month number and print number of days in that month

var jan =31; 
var Feb =28; 
var March =31; 
var April =30; 
var May =31; 
var jun =30; 
var Jul =31; 
var Aug =31; 
var Sep =30; 
var Oct =31; 
var Nov =30;
var Dec =31;  
var Months = ['',jan,Feb,March, April, May, jun, Jul, Aug, Sep, Oct, Nov,Dec];
var stringMonths = ['','jan','Feb','March', 'April', 'May', 'jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'];
var inputMonthNum = 12;
if (inputMonthNum>=1 && inputMonthNum <= 12) {
    console.log(`${stringMonths[inputMonthNum]}, has ${Months[inputMonthNum]} days`);
}
if (inputMonthNum<1 || inputMonthNum > 12) {
    console.log('Please Input Number Between 1 to 12');
}

// 04.Write a js program to count total number of notes in given amount.

var note1 = 5000;
var note2 = 1000;
var note3 = 500;
var amount = 43500

if (amount>=5000) {
    var amountDvdNote1 = amount/ note1
    var roundNote1 = Math.floor(amountDvdNote1);
    var multiplyNote1 = note1*roundNote1;
    var minusNote1 = amount - multiplyNote1
    console.log('5000 Notes',roundNote1);

    if (minusNote1>=note2) {
        var amountDvdNote2 = minusNote1 / note2
        var roundNote2 = Math.floor(amountDvdNote2)
        var multiplyNote2 = note2*roundNote2
        var minusNote2 = minusNote1 - multiplyNote2
        console.log('1000 Notes',roundNote2);

        if (minusNote2>=note3) {
            var amountDvdNote3 = minusNote2 / note3
            var roundNote3 = Math.floor(amountDvdNote3)
            var multiplyNote3 = note3*roundNote3
            var minusNote3 = minusNote2 - multiplyNote3
            console.log('500 Notes',roundNote3);  
        }
    }
        if (minusNote1>=note3 && minusNote1<note2) {
        var amountDvdNote3 = minusNote1 / note3
        var roundNote3 = Math.floor(amountDvdNote3)
        var multiplyNote3 = note3*roundNote3
        var minusNote3 = minusNote1 - multiplyNote3
        console.log('500 Notes',roundNote3);  
        }

}

// 05.Write a js program to input angles of a triangle and check whether triangle is valid or not.

var firstAngle = 60;
var secondAngle = 80;
var thirdAngle = 40;
var sumAngles = firstAngle + secondAngle + thirdAngle;
if (sumAngles===180) {
    console.log('This triangle is valid');
} else {
    console.log('This triangle is not valid');
}

// 06.Write a js program to input all sides of a triangle and check whether triangle is valid or not.

var firstAngle2 = 60;
var secondAngle2 = 80;
var thirdAngle2 = 60;
if (firstAngle2 + secondAngle2 > thirdAngle2 && firstAngle2 + thirdAngle2 > secondAngle2 && secondAngle2 + thirdAngle2 > firstAngle2) {
    console.log('This triangle is valid');
}else{
    console.log('This triangle is not valid');
}

// 07.Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

var firstAngle3 = 61;
var secondAngle3 = 60;
var thirdAngle3 = 62;

if (firstAngle3 == secondAngle3 && firstAngle3 == thirdAngle3 && secondAngle3 == thirdAngle3) {
    console.log('This is equilateral triangle');   
}
if ((firstAngle3 == secondAngle3 || firstAngle3 == thirdAngle3 || thirdAngle3 == secondAngle3 )&&(firstAngle3 != secondAngle3 || firstAngle3 != thirdAngle3 || thirdAngle3 != secondAngle3)) {
    console.log('This is isosceles triangle');   
}
if (firstAngle3 != secondAngle3 && firstAngle3 != thirdAngle3 && thirdAngle3 != secondAngle3) {
    console.log('This is scalene triangle');   
}

// 08.Write a js program to find all roots of a quadratic equation.
// var a = 4
// console.log(Math.sqrt(a));
// ax^2 + bx + c = 0
// a,b,c are real num & a!=0
// (root1,root2) = (-b+-Math.sqrt(b^2-4ac)/2)
var root1;
var root2;
var a = 1;
var b = -3;
var c = 10;
var disc = b * b - 4 * a * c;
console.log('Disk',disc);
if (disc>0) {
    root1 = (-b + Math.sqrt(disc))/(2*a);
    root2 = (-b - Math.sqrt(disc))/(2*a);
   console.log(`Roots of Quadratic equation are ${root1} & ${root2}`); 
}
else if (disc == 0) {
    root1 = root2 = -b/(2*a).toFixed(2);
    console.log(`Roots of Quadratic equation are ${root1} & ${root2}`);
}
else if (disc < 0){
    var realPart = (-b/(2*a).toFixed(2));
    var imgPart = (Math.sqrt(-disc)/(2*a).toFixed(2));
    console.log(`Roots of Quadratic equation are ${realPart} & ${imgPart}`);
}

// 09.Write a js program to calculate profit or loss.

var productcost = 500;
var productSalePrice = 640;
var prftChk = productSalePrice - productcost;
var lossChk = productcost - productSalePrice;
if (productcost < productSalePrice) {
    console.log(`Profit is ${prftChk}-PKR`);
}
if (productcost > productSalePrice) {
    console.log(`Loss is ${lossChk}-PKR`);
}

// 10.Write a js program to search all occurrences of a character in given string.

var coutOccurString = 'ahmad is a good boy';
var coutOccurChracter = 'o';
var coutOccurFind = '';
for (let index = 0; index < coutOccurString.length; index++) {
    if (coutOccurString[index]===coutOccurChracter) {
        coutOccurFind += coutOccurString[index]
    }  
}

console.log(`Chracter '${coutOccurChracter}' all Occure  in this string is/are`,coutOccurFind);

// 11.Write a js program to count occurrences of a character in given string.

var occurString = 'ahmad is a good boy';
var occurChracter = 'o';
var occurFind = '';
for (let index = 0; index < occurString.length; index++) {
    if (occurString[index]===occurChracter) {
        occurFind += occurString[index]
    }  
}

console.log(`Chracter '${occurChracter}' Occure ${occurFind.length} times in this string `,occurFind);

// 12.Write a js program to find highest frequency character in a string.

var freqString = 'Naveed sarwar is out Web development teacher';
var freqFind = '';
var freqFind2 = '';
var freqCounter = 0;
var freqCounter2 = [];
for (let index = 0; index < freqString.length; index++) {
    freqFind += freqString[index];
        for (let i = 0; i < freqString.length; i++) {
            if (freqString[i]===freqFind && freqString[i]!=' ') {
                freqFind2 += freqString[i]
            }
        }
        var cnt = freqFind2.length
        freqFind2 = ''
        freqFind = ''
    freqCounter2.push(cnt)
}
var highFrqChk = Math.max(...freqCounter2)
var frqIndxChk = freqCounter2.indexOf(highFrqChk)
var frqCharChk = freqString.charAt(frqIndxChk)
console.log(`'${frqCharChk}' is highest frequency character in this string that occur ${highFrqChk} times`);

// 13.Write a js program to find lowest frequency character in a string.

var lowFreqString = 'aahhhmmmmmaaaaaadddddd';
var lowFreqFind = '';
var lowFreqFind2 = '';
var lowFreqCounter = 0;
var lowFreqCounter2 = [];
for (let index = 0; index < lowFreqString.length; index++) {
    lowFreqFind += lowFreqString[index];
        for (let i = 0; i < lowFreqString.length; i++) {
            if (lowFreqString[i]===lowFreqFind && lowFreqString[i]!=' ') {
                lowFreqFind2 += lowFreqString[i]
            }
        }
        var lowCnt = lowFreqFind2.length
        lowFreqFind2 = ''
        lowFreqFind = ''
        lowFreqCounter2.push(lowCnt)
}
var freqCounter2NoZero = []
for (let index = 0; index < lowFreqCounter2.length; index++) {
    if (lowFreqCounter2[index]!=0) {
        freqCounter2NoZero.push(lowFreqCounter2[index])
    }
}

var lowFrqChk = Math.min(...freqCounter2NoZero)
var lowFrqIndxChk = lowFreqCounter2.indexOf(lowFrqChk)
var lowFrqCharChk = lowFreqString.charAt(lowFrqIndxChk)

console.log(`'${lowFrqCharChk}' is Lowest frequency character in this string that occur only ${lowFrqChk} times`);

// 14.Write a js program to count frequency of each character in a string.

var eachFrqString = 'his is muhammad ahmad';
var eachFrqFind = '';
var eachFrqFind2 = '';
var eachFrqArray = []
var eachFrqArray2 = []
var counter = 0;
for (let index = 0; index < eachFrqString.length; index++) {
    eachFrqFind2 = '';
    eachFrqFind += eachFrqString[index]
    for (let i = 0; i < eachFrqString.length; i++) {
        if (eachFrqFind===eachFrqString[i]) {
            eachFrqFind2 += eachFrqString[i]
        }
    }
    eachFrqArray.push(eachFrqString[index])
    eachFrqArray.push(eachFrqFind2.length)
    var eachFrqFind = '';
    var eachFrqFind2 = '';
}

for (let index = 0; index < eachFrqString.length; index++) {
    // if (eachFrqArray[index]!=" ") {
        eachFrqArray2.push(eachFrqString[index])
        eachFrqArray2.push(eachFrqArray[index])
    // }
}

console.log(eachFrqArray2);
console.log(eachFrqArray);

