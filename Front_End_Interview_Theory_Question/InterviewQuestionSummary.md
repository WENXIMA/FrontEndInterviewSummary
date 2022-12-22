

### Interview Question Summary:

## Today is 52th day which I did not find a job as Front End Developer.

- [1.Introduction] (#introduction)




# Introduction
    This Interview Question guide including React,JavaScript(ES6),CSS and HTML content.
    Most of part are focus on ReactJS and JavaScript.
    There are including coding questions, theory questions and algorithm(data structure Question )
    Reference from BFE.dev and LeetCode


# Section 1 JavaScript Coding Question (Front End)

  - Currying
    -  Transform function from f(a,b,c) to f(a)(b)(c)
    -  It will NOT call function, it will ONLY transform function.
    -  return a function (返回一个function)

# Section 2 LeetCode
  # Section 2.1 Data Structure
    - Contain Duplicates
      - Use sort() method to sort the whole array and compare to the next one is same.
      - 2nd method: create a new object, doing loop, if this element are in the object then return true. Before End of the loop, add this element into this object
    - Maximum Subarray
      - Using Greedy Algorithm
        - Set 2 variables (currentSum and maxSum)
        - Traverse the whole array, set 1st element as the initial sum
        - If NEXT element are greater than the previous sum(previous sum + current element). THEN, we will deprecated previous sum
        - For each time, we will compare the currentSum to history MAX SUM. if current sum greater, then we will update the MAX SUM.