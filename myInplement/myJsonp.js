// eslint-disable-next-line prefer-const
let newScript = document.createElement('script');

newScript.src = 'https://www.abc.com?callback=fn';

document.appendChild(newScript);

// eslint-disable-next-line no-unused-vars
function fn (data) {
  console.log(data);
}
