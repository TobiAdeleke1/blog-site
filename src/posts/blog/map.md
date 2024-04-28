---
title: "Map"
category: "JavaScript"
date: "2024-04-01 12:00:00 +09:00"
desc: "Test Markdown Code Highlight"
thumbnail: "./images/code-blockmap_design.png"
alt: "code block graphic"
---

### Map() ### 

Map evaluates every item in the array, using the input functions. The results would be an array of the function output based on each item in the initial array, if the initial array contains immuatable variable types. Alternatively, it could be also be used to make in-place operations. 

Using the two example arrays below to demostrate the effect of map function.

```js
const userArray = [['Jenny', 15], ['Peter',28], ['Ope', 30] ]
const intArray = [50, 90, 12,14,13,19,21]
```
1. Using an example of adding a unique identifier inplace to an existing userArray. 

    const __useMod__= ````userArray.map((user) => user.push(crypto.randomUUID()));````

      ```js
      > userArray
      [
        [ 'Jenny', 15, '92e14471-541c-4b0d-a517-d86efbeddd36' ],
        [ 'Peter', 28, '69fb9d17-f67c-4504-931e-061eb8c10188' ],
        [ 'Ope', 30, '3e694ab2-be4a-4cf6-bf1f-15e2f93157b5' ]
      ] 
      > useMod 
        [3, 3, 3]
      ```
2. Applying an expression to every item in the array and a result is stored in an new array.

    const __intSqrt__ = ```intArray.map((val)=> val**2 );```

    ```js 
    > intArray 
      [ 50, 90, 12, 14, 13, 19, 21 ]

    > intSqrt
      [ 2500, 8100, 144, 196,  169, 361, 441]

    ```
