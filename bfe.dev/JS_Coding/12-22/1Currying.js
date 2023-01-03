// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function curried(...args){
    //check the input arguments are greater than the function form
    if(args.length>=fn.length){
      //if it is greater than function form a_b_c then, return the original format
      return fn(...args);
    }else{
      /* if not, we return a function that collects the next arguments passed in next and 
      we recursively call curried, accumalating and spreading the values of args first and then
      the values of next. next will take into consideration a variable amount of next arguments
      e.g (1, 2) (1) (1,2,3) */
      return function(...next){
        return curried(...args,...next);
      }
    }
  }
}



  
  // 用法
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
  
  let curriedSum = curry(join);
  
  console.log( curriedSum(1,2)(3,4) ); // 3
  console.log( curriedSum(1)(2,3) )
  console.log( curriedSum(1)(2)(3) )