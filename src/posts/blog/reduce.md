---
title: "Reduce"
category: "JavaScript"
date: "2024-04-21 12:00:00 +09:00"
desc: "Test Markdown Code Highlight"
thumbnail: "./images/code-block/thumbnail.jpg"
alt: "code block graphic"
---
### Reduce()
This is an aggregating method, that applies a function to the array it called upon, and returns a single item.

An example would be 
```js
const stringList = ['gas', 'apple','pizza','tomato','shoes', 'cabbages'];
const numberList = [20, 90,100,88,123, 4];
```
1. Calculate the mean of of the number list 
    ```js 
      const numAverage = numberList.reduce((currRes, currValue) => currRes+currValue)/ numberList.length;
      > numAverage
      70.83
    ```

2. Create a new string from the sum of every second item of the string in the array. 
   ```js 
    const newStr = stringList.reduce((currentRes, curValue) => {
                                return currentRes +=curValue.charAt(curValue.length -1)});
    > newStr
    'gaseaoss'                         
    ```

