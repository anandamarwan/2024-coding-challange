// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
  let res = 0;
  const strSlice = s.slice();
  for (let i = 0; i < strSlice.length; i++) {
    if (strSlice[i].charCodeAt(0) - 97 > 12) res++;
  }

  return `${res}/${s.length}`;
}
