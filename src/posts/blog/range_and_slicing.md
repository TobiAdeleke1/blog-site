---
title: "Python range() and slicing"
category: "Python"
date: "2024-07-06 12:00:00 +09:00"
desc: "A record of python built-in library options for dealing with sequence or sequence like objects in python including range() and slicing."
thumbnail: "./images/code-block/learning.png"
alt: "code block graphic"
---

### Using range() 
We can use the range() function to generate an integer sequence. With optional inputs such as: 
- range(__num__), produces an integer sequence from 0 to num-1.
    ```python
    l1 = list(range(20))
    ```
    ![Output of a single range value ](./images/writings/l1_range.png) 

- range(__start_num__,__end_num__) produces an integer sequence from start_num to end_num-1.
    ```python
     l2 = list(range(12, 21))
    ```
    ![Output of l2 ](./images/writings/l2_range.png)

- range(__start_num__,__end_num__,__step__) produces an integer sequence from start_num to end_num-1 with step has the difference between neighboring integer. 
    ```python
     l3 = list(range(20, 40,3))
    ```
    ![Output of l3](./images/writings/l3_range.png)
    
    ```python
     l4 = list(range(20, 10,-1))
    ```
    ![Output of l4 ](./images/writings/l4_range.png)



### Using Slicing 
Slicing is a technique used to manipulate and access sub-sets of sequences such as list, str and tuple. It uses __[index]__, __[start:end]__, or __[start:end:step]__ syntax on the sequence.

Firstly, let us define some example sequences has the following. 
```python 
    l1 = ['London','Bath', 'York', 'Leeds', 'Norwich', 'Glasgow', 'Liverpool']
    t1 = (1, 13, 25, 60, 8, 97, 360)
    s1 = "potatochips"
```
- example_sequence[__index__] to access the _n-th_ item in the sequence where n = 3.Also example_sequence[0] will return the first item, and example_sequence[-1] will return the last item.
    ![Output of slice 1 ](./images/writings/slice1.png)
   

- example_sequence[__start:end__] to access a consecutive subset of the sequence, up to end-1 items.
    ![Output of slice 2 ](./images/writings/slice2.png)
  
- example_sequence[__start:end:step__] to better control what subset in the sequence we would like returned.
    1. To retrive every second item between the first and the fifth in the sequence. 
        ![Output of slice 3 ](./images/writings/slice3.png)
    
    2. To retrive every second item in the sequence.
        ![Output of slice 4 ](./images/writings/slice4.png)
    
    3. To retrive every item in the sequence starting from the last to the first.
        ![Output of slice 5 ](./images/writings/slice5.png)





