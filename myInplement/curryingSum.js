function sum (...args1) {
  const x = args1.reduce((prev, current) => prev + current);
  return function (...args2) {
    if (args2.length === 0) {
      return x;
    }
    const y = args2.reduce((prev, current) => prev + current);
    return sum(x + y);
  };
}

console.log(sum(1, 2, 2, 5)(7)()); // 17
