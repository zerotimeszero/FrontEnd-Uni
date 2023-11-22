const str = "всеМ прИвЕт, прИяТно ПоЗНакоМиТьсЯ!"
str = str.toLocaleLowerCase();

var modifiedStr = str.charAt(0).toUpperCase() + str.slice(1);
console.log(modifiedStr)


modifiedStr = modifiedStr.replace("привет","пока");
console.log(modifiedStr)

console.log(modifiedStr.length);
console.log(modifiedStr.charAt(modifiedStr.length - 1))