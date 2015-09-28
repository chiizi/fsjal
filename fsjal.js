var Tuple = function(a, b) {
  Object.defineProperties(this, {
    car: {
      value: function() {
        return a;
      },
      writable: false
    },
    cdr: {
      value: function() {
        return b;
      },
      writable: false
    },
    toArray: {
      value: function() {
        return [a, b];
      },
      writable: false
    }
  });
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
