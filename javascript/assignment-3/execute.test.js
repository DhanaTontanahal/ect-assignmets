const execute = require("./evaluate-str-code");


var code = '$logger("Sum is ", $math.sum(1+2))';
var variables = {a:1,b:2};
var expectedOutput = 3;
test("Evaluates string code , returns the output from the processed variables input and matches for correctness ", () => {
    expect(execute(code ,variables)).toContain(expectedOutput);
});
