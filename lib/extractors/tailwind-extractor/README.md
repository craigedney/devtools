# Tailwind Extractor

Implementation of the extractor function in TypeScript:

```js
function extractValues(obj: object, format: 'JSON' | 'CSS' | 'SCSS'): string {
let output = '';

    if (format === 'JSON') {
        output = JSON.stringify(obj, null, 2);
    } else if (format === 'CSS') {
        output += ':root {\n';
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                for (const subKey in obj[key]) {
                    output += `    --${key}-${subKey}: "${obj[key][subKey]}";\n`;
                }
            } else {
                output += `    --${key}: "${obj[key]}";\n`;
            }
        }
        output += '}';
    } else if (format === 'SCSS') {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                output += `$${key}: (\n`;
                for (const subKey in obj[key]) {
                    output += `        ${subKey}: "${obj[key][subKey]}",\n`;
                }
                output += ');\n';
            } else {
                output += `$${key}: "${obj[key]}";\n`;
            }
        }
    }

    return output;
}
```

This function takes in an object and a string argument specifying the desired format, and returns a string containing the values of the object in the specified format. The function uses the JSON.stringify() method to convert the object to a JSON string if the format is 'JSON', and uses string concatenation to build the output string in the 'CSS' or 'SCSS' format.

You can use the function like this:

```js
const obj = {
firstKey: '',
secondKey: '',
thirdKey: {
firstSubKey: '',
secondSubKey: '',
thirdSubKey: '',
},
}
console.log(extractValues(obj, 'JSON'));
console.log(extractValues(obj, 'CSS'));
console.log(extractValues(obj, 'SCSS'));
```




It will give you the output in required format.
