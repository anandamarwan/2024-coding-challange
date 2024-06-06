// https://www.codewars.com/kata/5556282156230d0e5e000089

const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((el) => (el == "T" ? "U" : el))
    .join("");
