var Tuple = function(a, b) {
  this.a = () => a;
  this.b = () => b;
  this.array = () => [a, b];
  Object.freeze(this);
  return this;
};
var list = function(array) {
  if (array.length > 1) {
    var b = array.pop();
    var a = array.pop();
    array.push(new Tuple(a, b))
    return list(array);
  } else if (array.length == 1) {
    return array[1];
  } else {
    return new Tuple(null, null);
  }
};
