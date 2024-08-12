function countDataTypes(arr) {
    // Initialize an object to store the counts of each data type
    let typeCounts = {
        number: 0,
        string: 0,
        boolean: 0,
        object: 0,
        undefined: 0
    };

    // Loop through the array and count the data types
    arr.forEach(item => {
        let type = typeof item;
        if (typeCounts.hasOwnProperty(type)) {
            typeCounts[type]++;
        }
    });

    return typeCounts;
}

// Example usage:
let mixedArray = [1, "hello", true, false, 42, "world", {}, undefined, 3.14];
let result = countDataTypes(mixedArray);
console.log(result); 












function countVowels(str) {
    // Define the vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example usage:
let inputString = "Hello World!";
let endResult = countVowels(inputString);
console.log(endResult); 
