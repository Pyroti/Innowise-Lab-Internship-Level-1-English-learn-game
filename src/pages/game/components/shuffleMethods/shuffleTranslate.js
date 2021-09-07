import shuffle from './shuffle';

export default function shuffleTranslate(words) {
  let massWords = [];
  const setShuffleWord = [];

  words.forEach((item, index) => {
    if ((index + 1) % 3 === 0) {
      massWords.push(item);
      const word = shuffle(massWords);
      setShuffleWord.push(word);
      massWords = [];
    } else if (setShuffleWord.length >= 6) {
      setShuffleWord.push(item);
    } else {
      massWords.push(item);
    }
  });

  return setShuffleWord.flat();
}
