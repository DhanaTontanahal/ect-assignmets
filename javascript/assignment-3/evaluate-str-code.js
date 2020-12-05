function execute(code, variables) {
  //declare the $logger , $math and other required variables
  var $logger, $math, finalSumResult, finalMulRes , finalOutput;

  $logger = function (log) {
    finalOutput=log + (finalSumResult != undefined ? finalSumResult : "") + (finalMulRes != undefined ? finalMulRes : "");
    console.log(finalOutput)
  }
  $math = {
    sum: function () {
      finalSumResult = variables.a + variables.b;
    },
    mul: function () {
      finalMulRes = variables.a * variables.b;
    }
  }
  //evaluates the javascript code inside string
  eval(code)
return finalOutput;
}

module.exports = execute;

// var code = '$logger("Sum is " , $math.sum(1,2))'
// var variables = {a:1 , b:2};
// execute(code,variables);