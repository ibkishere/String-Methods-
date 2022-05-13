 function replaceAll (sourceStr,searchStr,replacedStr) {
            if (typeof sourceStr !== "string") {
                throw  Error("argument provided is not a string")
            }
           let sourceStrArray = sourceStr.split("") 
            for (i = 0; i < sourceStrArray.length; i++) {
                if (sourceStrArray[i] === searchStr[0] ) {     
                  console.log(replacedStr)
                    sourceStrArray.splice(i, searchStr.length,replacedStr)
        // remove searchStr.length elements from array index i and add replaced strings 
                }
            }
            // I will add a reduce method to concatenate all the strings 
            return sourceStrArray.reduce((a,b) => a + b).toString()
        }
        // It is possible to pass a function—rather than a string—as the second argu- ment to replace.
        // lets try that 
// It cant handle regular expressions though


console.log(replaceAll("abcdefgghhijkl","gh","rt"))




// It cant handle cases ike this... 
console.log(replace("rrrrrrrr","rrr","h"))
