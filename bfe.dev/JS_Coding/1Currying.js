function curry(f) { // curry(f) 执行柯里化转换
    return function(a) {
      return function(b) {
        return function(c){
            return f(a, b,c);
        }
       
      };
    };
  }
  
  // 用法
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
  
  let curriedSum = curry(join);
  
  console.log( curriedSum(1)(2)(3) ); // 3