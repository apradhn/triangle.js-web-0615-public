'use strict';

function Triangle(a, b, c){
  if (a === 0 || b === 0 || c === 0) { throw new TriangleError(); }
  else if (a < 0 || b < 0 || c < 0) { throw new TriangleError(); }
  else if (a + b < c || a + c < b || b + c < a) { throw new TriangleError(); }
  else if (a === b + c || b === a + c || c === a + b) { throw new TriangleError(); }
  else {
    this.a = a;
    this.b = b;
    this.c = c;    
  }

};

Triangle.prototype.kind = function() {
  if (this.a === this.b && this.a === this.c && this.b === this.c) { return "equilateral"; }
  else if (this.a === this.b || this.c === this.a || this.b === this.c) { return "isosceles"; }
  else if (this.a !== this.b && this.a !== this.c && this.b !== this.c) { return "scalene"; }
}

function TriangleError() {}