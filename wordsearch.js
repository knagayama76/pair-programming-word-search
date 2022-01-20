const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

// const transpose = function (matrix) {
//   let newMatrix = [];
//   let rows = matrix[0].length;
//   let column = matrix.length;
//   for (let i = 0; i < rows; i++) {
//     let newRow = [];
//     for (let j = 0; j < column; j++) {
//       newRow.push(matrix[j][i]);
//     }
//     newMatrix.push(newRow);
//   }
//   return newMatrix;
// };

// transpose(letters);
