function trimstart (string) {
    let regex = /\s+|\r+|\t+|\n+/
    for (i = 0; i < string.length; i++) {
        if ((regex.test(string[i]) === false)) {
            return string.slice(i,string.length)
        }
    }
    return "error"
}

console.log("      confident")





// My implementation of the trimstart method works by iterating through the string , and testing each charcter it comes 
// across, using the test method  if it comes across a whitespace character, tab chaarcter, carriage return character,
// It returns true so it continues its iteration until it reaches a charcater that returns false, then it slices the string,
// taking the index of the first character as the starting point and the length of the string as the ending point 
// Or else it returns error
