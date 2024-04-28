---
title: "Filter"
category: "JavaScript"
date: "2024-04-08 12:00:00 +09:00"
desc: "Using Dilter() method on arrays"
thumbnail: "./images/code-block/filter.png"
alt: "code block graphic"
---

### Filter()
Filter evaluates every item in array, using the input functions as well, with an additional constraint that the function can only return a boolean (i.e True or False). The results of this evaluation is that only items that are __True__ would be in the array, so of lenght less or equal to initial array. 

Using the array below to demostrate the effect of filter function.
```js
const mixedData = [50,true, 90, 'apple',14,13,'potato',21, '10']
```

const __strData__ = ```mixedData.filter((item) => {return (typeof item==="string")});```

  ```js
  > mixedData
  [
    50,  true,  90,  'apple',
    14,  13, 'potato', 21,  '10'
  ]
  > strData
  [ 'apple', 'potato', '10' ]

  ```
