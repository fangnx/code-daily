export const parseHtmlEntities = (str) => {
  return str.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
    var num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
};
