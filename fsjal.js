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
