function trimend (string) {
    let regex = /\s+|\r+|\t+|\n+/
 for (i = string.length - 1; i > -1; i--) {
    if ((regex.test(string[i]) === false)) {
        return string.slice(0,i + 1)
    }
}
return  "error" 
}

console.log("confident     ")

// My implementation of the trimend method works by iterating through the string from the last character, and testing each charcter it comes 
// across, using the test method  if it comes across a whitespace character, tab chaarcter, carriage return character,
// It returns true so it continues its iteration until it reaches a character that returns false, then it slices the string,
// taking the index of the first character as the starting point and the index of the last character + 1 
// Or else it returns error
