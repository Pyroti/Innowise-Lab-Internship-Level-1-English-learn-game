export default function shuffle(array) {
  let curIndex = array.length;
  let randomIndex;
  while (curIndex !== 0) {
    randomIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;
    [array[curIndex], array[randomIndex]] = [array[randomIndex], array[curIndex]];
  }
  return array;
}
