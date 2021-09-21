import shuffle from './shuffle';

const partOfWordsInGroup = 3;
const maxNumberOfGroups = 6;

export default function shuffleTranslate(words) {
  let massWords = [];
  const setShuffleWord = [];

  words.forEach((item, index) => {
    const isPartOfWordsInGroup = (index + 1) % partOfWordsInGroup === 0;
    if (isPartOfWordsInGroup) {
      massWords.push(item);
      const word = shuffle(massWords);
      setShuffleWord.push(word);
      massWords = [];
    } else if (setShuffleWord.length >= maxNumberOfGroups) {
      setShuffleWord.push(item);
    } else {
      massWords.push(item);
    }
  });

  return setShuffleWord.flat();
}
