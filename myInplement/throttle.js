function throttle (fn, wait) {
  const prev = new Date();
  return function () {
    const context = this;
    const args = arguments;
    const now = new Date();
    if (now - prev >= wait) {
      fn.apply(context, args);
    }
  };
}

export default throttle;
