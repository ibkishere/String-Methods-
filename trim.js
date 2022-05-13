function trim (string) {
let regex = /\s+|\r+|\t+|\n+/
    let trimmedStartString = []
    for (i = 0; i < string.length; i++) {
        if ((regex.test(string[i]) === false)) {
             trimmedStartString.push(string.slice(i,string.length))
        }
    }
    let trimmedEndString = trimmedStartString[0]
    for (i = trimmedEndString.length - 1; i > -1; i--) {
        if ((regex.test(trimmedEndString[i]) === false)) {
            return trimmedEndString.slice(0,i + 1)
        }
    }
    return  "error"

}

console.log(trim("     confident        "))


// [
//     'confident        ',
//     'onfident        ',
//     'nfident        ',
//     'fident        ',
//     'ident        ',
//     'dent        ',
//     'ent        ',
//     'nt        ',
//     't        '
//   ]

// Because of this bug as i pushed it to the trimmedStartString array, i used the first element ->  trimmedStartString[0]
//And assigned it to a variable


// function trim(str) {
//     let reg = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; 
//     let newStr = str.replace(reg, '');
//     return newStr;
// }

// let str = "   Yes ";
// let trimmedStr = trim (str);

// console.log(trimmedStr);
