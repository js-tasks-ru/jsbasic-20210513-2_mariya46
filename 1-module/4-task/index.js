function checkSpam(str) {
  const strLower = str.toLowerCase();

  return strLower.includes('1xbet')|| strLower.includes('xxx');
 }

alert( checkSpam('1XbeT now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam('innocent rabbit') );