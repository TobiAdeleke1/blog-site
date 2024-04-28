---
title: "Functional Programming with Map, Filter and Reduce"
category: "JavaScript"
date: "2024-04-21 12:00:00 +09:00"
desc: "Test Markdown Code Highlight"
thumbnail: "./images/code-block/thumbnail.jpg"
alt: "code block graphic"
---

## Using Map(), Filter() and Reduce()
Map(), Filter() and Reduce() are all methods that are called on array objects in JavaScript, allowing for functional programming (sequential execution of programs) to be implemented in JS.

### Combining map(), filter(), reduces()

1. A string to an array. Convert a array into its ASCII equivalent array.
   Then filter to reduce the array to every odd ASCII values, the ASCII values are then aggregated bound to 65535. Lastly, the resultant ASCII value is converted back to a character.  
    const __inputString__ = ```'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';```

    ```js 
      
      function reduceToUni(currentResult, currentValue){
          if (currentResult>  65535){
            return  (currentResult%65535) + currentValue
          }
        return (currentResult + currentValue) ;
      }


      const newStringCode = inputString.split('')
                        .map((inputStr)=> inputStr.charCodeAt(0))
                        .filter((item) => {return item%2 !==0 })
                        .reduce(reduceToUni);
      const newChar = String.fromCodePoint(newStringCode);
      > newChar 
       ᪠                 
    ``` 


