const oneHundredPercent = 100;

function countingResult(answers) {
  const numCorrectAnswers = answers.rightAnswers.length;
  const numWrongAnswers = answers.wrongAnswers.length;

  let sumAllAnswers = numWrongAnswers + numCorrectAnswers;
  sumAllAnswers = sumAllAnswers === 0 ? 1 : sumAllAnswers;

  const percentageCorrectAnswers = (
    (numCorrectAnswers / sumAllAnswers)
    * oneHundredPercent
  ).toFixed(1);

  return { numCorrectAnswers, numWrongAnswers, percentageCorrectAnswers };
}

export default countingResult;
