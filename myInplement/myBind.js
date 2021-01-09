// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (context, ...args) {
  return (...newArgs) => this.apply(context, [...newArgs, ...args]);
};

// text
const test = {
  name: 'hgk',
  showName: function (sth) {
    console.log(this.name + ' is ' + sth);
  }
};

test.showName('handsome');
test.showName.myBind({ name: 'gkk' })('handsome');
