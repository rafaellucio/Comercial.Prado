class Calculator {
  static exec(operator, a, b) {
    switch (operator) {
      case 'sum':
        return Calculator.sum(a, b);
      case 'sub':
        return Calculator.subtract(a, b);
      default:
        return Calculator.sum(10, 10);
    }
  }

  static sum(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static mult(a, b) {
    return a * b;
  }
}

module.exports = Calculator;
