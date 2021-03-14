module.exports = function reverse (n) {
  let rever = [];
  n = Math.abs(n);
  while (n){
    let a = n%10;
    n = (n-a)/10;
    rever.push(a);
  }
    let num = rever.join('');
    return num;
}
