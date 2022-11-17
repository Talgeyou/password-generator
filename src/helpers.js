import {
  LOWERCASE_SYMBOLS,
  NUMBER_SYMBOLS,
  SPECIAL_SYMBOLS,
  UPPERCASE_SYMBOLS,
} from "./constants";

export function generatePassword(
  length,
  { uppercase, lowercase, numbers, symbols }
) {
  if (!uppercase && !lowercase && !numbers && !symbols) {
    return "";
  } else {
    let passwordString = "";
    if (uppercase) {
      passwordString += UPPERCASE_SYMBOLS;
    }
    if (lowercase) {
      passwordString += LOWERCASE_SYMBOLS;
    }
    if (numbers) {
      passwordString += NUMBER_SYMBOLS;
    }
    if (symbols) {
      passwordString += SPECIAL_SYMBOLS;
    }
    let passwordForState = "";
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * passwordString.length);
      passwordForState += passwordString.substring(
        randomNumber,
        randomNumber + 1
      );
    }
    return passwordForState;
  }
}
