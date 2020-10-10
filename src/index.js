module.exports = function check(str, bracketsConfig) {
  const brackets = new Map(bracketsConfig);
  const inputBrackets = str.split('');
  let bracketPairs = [];

  if (inputBrackets.length % 2 !== 0) {
    return false;
  }

  while (inputBrackets.length > 0) {
    const bracket = inputBrackets.shift();
    if (brackets.get(bracket)) {
      bracketPairs.unshift(brackets.get(bracket));
      if (bracket === brackets.get(bracket)) {
          if (bracketPairs[0] === bracketPairs[1]) {
            bracketPairs = bracketPairs.slice(2);
        }
        if (bracketPairs.filter(el => el === bracket).length > 1) {
          return false;
        }
      }
    } else if (bracketPairs.length > 0) {
      if (bracket !== bracketPairs.shift()) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
