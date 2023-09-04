// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {

  //roman numerals can only represent numbers from 1 to 3999
  if (typeof num !== "number" || num < 1 || num > 3999) return;

  let numStr = num.toString();

  const arr = [
    ['I', 'V', 'X'],
    ['X', 'L', 'C'],
    ['C', 'D', 'M'],
    ['M']
  ] 

  let roman = '';
  let romanArr = [];
  let arrInd = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {

    switch (numStr[i]) {
      case '1':
      case '2':
      case '3':
        roman = arr[arrInd][0].repeat(numStr[i]);
        break;
      case '4':
        roman = arr[arrInd][0] + arr[arrInd][1];
        break;
      case '5':
      case '6':
      case '7':
      case '8':
        roman = arr[arrInd][1] + arr[arrInd][0].repeat(numStr[i] % 5);
        break;
      case '9':
        roman = arr[arrInd][0] + arr[arrInd][2];
        break;
    }

    romanArr.unshift(roman);
    roman = '';
    arrInd += 1;
  }

  return romanArr.join('');
}

//test here
console.log(convertToRoman(2)); //II
console.log(convertToRoman(3)); //III
console.log(convertToRoman(4)); //IV
console.log(convertToRoman(5)); //V
console.log(convertToRoman(9)); //IX
console.log(convertToRoman(12)); //XII
console.log(convertToRoman(16)); //XVI
console.log(convertToRoman(29)); //XXIX
console.log(convertToRoman(44)); //XLIV
console.log(convertToRoman(45)); //XLV
console.log(convertToRoman(68)); //LXVIII
console.log(convertToRoman(83)); //LXXXIII
console.log(convertToRoman(97)); //XCVII
console.log(convertToRoman(99)); //XCIX
console.log(convertToRoman(400)); //CD
console.log(convertToRoman(500)); //D
console.log(convertToRoman(501)); //DI
console.log(convertToRoman(649)); //DCXLIX
console.log(convertToRoman(798)); //DCCXCVIII
console.log(convertToRoman(891)); //DCCCXCI
console.log(convertToRoman(1000)); //M
console.log(convertToRoman(1004)); //MIV
console.log(convertToRoman(1006)); //MVI
console.log(convertToRoman(1023)); //MXXIII
console.log(convertToRoman(2014)); //MMXIV
console.log(convertToRoman(3999)); //MMMCMXCIX