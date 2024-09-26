exports.calculate = function (expression) {
  var subStrings = expression.replace(/'/g, "").split(" ").reverse();
  var result = [];

  while (subStrings.length > 0) {
    var subString = subStrings.pop();

    if (["+", "-"].includes(subString)) {
      const value1 = subStrings.pop();
      const value2 = subStrings.pop();
      if (["*", "/"].includes(value1)) {
        const right = parseFloat(subStrings.pop());
        const left = parseFloat(subStrings.pop());
        console.log("Case 3", " Value 1 : ", right, " Value 2 :", left);
        switch (subString) {
          case "+":
            switch (value1) {
              case "*":
                result.push(value2 + left * right);
                break;

              case "/":
                result.push(value2 + left / right);
                break;
            }
            break;

          case "-":
            switch (value1) {
              case "*":
                result.push(value2 - left * right);
                break;

              case "/":
                result.push(value2 - left / right);
                break;
            }
            break;
        }
      } else if (["*", "/"].includes(value2)) {
        const right = parseFloat(subStrings.pop());
        const left = parseFloat(subStrings.pop());
        console.log("Case 4", " Value 1 : ", right, " Value 2 :", left);

        switch (subString) {
          case "+":
            switch (value2) {
              case "*":
                result.push(value1 + left * right);
                break;

              case "/":
                result.push(value1 + left / right);
                break;
            }
            break;

          case "-":
            switch (value2) {
              case "*":
                result.push(value1 - left * right);
                break;

              case "/":
                result.push(value1 - left / right);
                break;
            }
            break;
        }
      } else {
        const right = parseFloat(value1);
        const left = parseFloat(value2);

        switch (subString) {
          case "+":
            result.push(left + right);
            break;

          case "-":
            result.push(left - right);
            break;
        }
      }
    } else if (["*", "/"].includes(subString)) {
      var subString2 = subStrings.pop();

      if (["+", "-"].includes(subString2)) {
        const value1 = parseFloat(subStrings.pop());
        const value2 = parseFloat(subStrings.pop());
        const value3 = parseFloat(subStrings.pop());

        console.log(value1, value2, value3);
        switch (subString) {
          case "*":
            switch (subString2) {
              case "+":
                result.push((value1 + value2) * value3);
                break;

              case "-":
                result.push((value1 - value2) * value3);
                break;
            }
            break;

          case "/":
            switch (subString2) {
              case "+":
                result.push((value1 + value2) / value3);
                break;

              case "-":
                result.push((value1 - value2) / value3);
                break;
            }
            break;
        }
      }
      console.log(subString);
    } else {
      result.push(subString);
    }
    console.log(result);
    return result[0];
  }
};
