// digital_root
// Write a method, digital_root(num).
// It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.

// recursive
function digitalRoot(num) {
  if (num < 10) return num;
  return digitalRoot(Math.floor(num / 10) + (num % 10));
}

// caesar_cipher
// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation.
// Preserve spaces.

function casearCipher(str, shift) {
  const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += ' ';
      continue;
    }

    let origIdx = alph.indexOf(str[i]);
    let newIdx = (origIdx + shift) % 26;

    newStr += alph[newIdx];
  }

  return newStr;
}