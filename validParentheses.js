//Link de: https://leetcode.com/problems/valid-parentheses/description/
//Valid Parentheses
function isValid(s) {
  const convertStoArray = s.split("");
  const openBracker = [];
    for (let i = 0; i < convertStoArray.length; i++) {
        if (convertStoArray[i] === "(" || convertStoArray[i] === "{" || convertStoArray[i] === "[") {
            openBracker.push(convertStoArray[i]);
          } else if (convertStoArray[i] === ")" || convertStoArray[i] === "}" || convertStoArray[i] === "]") {
            const closeBracker = openBracker.pop();
            if (
              (convertStoArray[i] === ")" && closeBracker !== "(") ||
              (convertStoArray[i] === "}" && closeBracker !== "{") ||
              (convertStoArray[i] === "]" && closeBracker !== "[")
            ) {
              return false;
            }
          }
    }
  return openBracker.length === 0;
}
console.log(isValid("[]{}(){[]}("));