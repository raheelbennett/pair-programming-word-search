// Transpose function from previous pair programming activity
const transpose = function (matrix) {
  let transformedArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transformedArray.push([]);
    for (let j = 0; j < matrix.length; j++) {
      transformedArray[i].push(matrix[j][i]);
    }
  } return transformedArray;
};

const wordSearch = (letters, word) => {
  if (!letters.length) { //An empty matrix will now return false rather than undefined. 
    return false
  };
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (l.includes(word)) return true
  }
  //We are using code from yesterday's pair programming to transpose our letters array matrix to now have vertical letters run through the loop.
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''))
  for (l of verticalJoin) {
    if (l.includes(word)) return true
  }
  return false;
};

module.exports = { wordSearch };


