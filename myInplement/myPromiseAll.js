function isPromise (obj) {
  return obj && (typeof obj === 'function' || typeof obj === 'object') && typeof obj.then === 'function';
}

// eslint-disable-next-line no-unused-vars
function myPromiseAll (arr) {
  // eslint-disable-next-line prefer-const
  let res = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (isPromise(arr[i])) {
        arr[i].then(data => {
          res[i] = data;
          if (res.length === arr.length) {
            resolve(res);
          }
        }).catch(error => {
          reject(error);
        });
      } else {
        res[i] = arr[i];
      }
    }
  });
}
