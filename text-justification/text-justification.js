 const fullJustify = function(words, maxWidth) {

  if (!words || !Array.isArray(words)) return [];

  const justifiedText = [];

  let charCount = 0;
  let newLine = '';

  for (let i = 0; i < words.length; i++) {

    const word = words[i];

    newLine += charCount === 0 ? word : ' ' + word;
    charCount += word.length;

    let length = newLine.length;
    if (length === maxWidth) {
      justifiedText.push(newLine);
      charCount = 0;
      newLine = '';
    } else if (length > maxWidth) {
      newLine = newLine.substring(0, length - (word.length + 1));
      charCount -= word.length;
      justifySpacing(newLine, maxWidth - charCount);
      charCount = 0;
      newLine = '';
      i--;
    } else if (i === words.length - 1) {
      justifySpacing(newLine);
    }

  }

  function justifySpacing (string, spaces) {
    if (spaces === undefined) {
      justifiedText.push(string.padEnd(maxWidth, ' '));
      return;
    }
    let wordArray = string.split(' ');
    if (wordArray.length === 1) {
      justifiedText.push(wordArray[0].padEnd(maxWidth, ' '));
      return;
    }
    for (let i = 0; i < wordArray.length; i++) {
      if (spaces === 0) {
        justifiedText.push(wordArray.join(''));
        break;
      } else {
        if (i === wordArray.length - 1) {
          i = -1;
        } else {
          wordArray[i] += ' ';
          spaces--;
        }
      }
    }
  }
   // space evenly
    // no leading or trailing spaces
    /*
      last line is only left justified with no extra spaces
      between words
    */
   // add to end result
   // return end result
   return justifiedText;
};