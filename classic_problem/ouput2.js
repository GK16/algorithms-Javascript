let a = function () { this.b =3; }
let c = new a();
a.prototype.b = 9;
let b = 7;
a();
console.log(b);
console.log(c.b);
