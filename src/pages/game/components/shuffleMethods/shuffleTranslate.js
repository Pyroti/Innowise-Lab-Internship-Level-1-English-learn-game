import AppConfig from '../../../../core/constants/AppConfig';
import shuffle from './shuffle';

const threeWordsInGroup = 3;
const sixGroups = 6;

export default function shuffleTranslate(words) {
  let massWords = [];
  const setShuffleWord = [];

  words.forEach((item, index) => {
    if ((index + AppConfig.defaultOne) % threeWordsInGroup === 0) {
      massWords.push(item);
      const word = shuffle(massWords);
      setShuffleWord.push(word);
      massWords = [];
    } else if (setShuffleWord.length >= sixGroups) {
      setShuffleWord.push(item);
    } else {
      massWords.push(item);
    }
  });

  return setShuffleWord.flat();
}
