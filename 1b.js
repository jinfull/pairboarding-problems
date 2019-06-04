// longest_common_substring
// Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring.A substring is defined as any consecutive slice of letters from another string.

//   Bonus: solve it in O(m * n) using O(m * n) extra space. (Hint: the solution involves dynamic programming which will be introduced later in the course.)

// O(m * n^2)

function longestCommonSubstring(str1, str2) {
  let longest = '';

  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j < str1.length + 1; j++) {
      if ((j - i) < longest.length) continue;

      let tempSubstring = str1.slice(i, j);
      if (str2.includes(tempSubstring)) {
        longest = tempSubstring;
      }
    }
  }

  return longest;
}

// Dynamic programming solution (from solutions) - O(m x n) space and time complexities:

function makeMatrix(str1, str2) {
  let matrix = [];

  for (let i = 0; i < str1.length + 1; i++) {
    matrix[i] = [];
    for (let j = 0; j < str2.length + 1; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        matrix[i + 1][j + 1] = matrix[i][j] + 1;
      } else {
        matrix[i + 1][j + 1] = 0;
      }
    }
  }

  return matrix;
}

function longestCommonSubstring(str1, str2) {
  let matrix = makeMatrix(str1, str2);
  longestSubstring = '';
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[1].length; j++) {
      if (matrix[i][j] > longestSubstring.length) {
        longestSubstring = str2.slice(j - matrix[i][j], j);
      }
    }
  }

  return longestSubstring;
}
