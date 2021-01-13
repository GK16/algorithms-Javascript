function debounce (fn, wait) {
  let timeout = null;
  return function () {
    const context = this;
    const args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

export default debounce;
