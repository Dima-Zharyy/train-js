"use strict";

function getMiddle(s) {
  const stringArr = s.split("");
  const stringLength = s.length;
  const evenMiddle = stringArr
    .slice(s.length / 2 - 1, s.length / 2 + 1)
    .join("");
  const oddMiddle = s[Math.floor(s.length / 2)];

  return stringLength % 2 === 0 ? evenMiddle : oddMiddle;
}

console.log(getMiddle(""));
