const isEquivalent = require("./is-equivalent");

var obj1 = { a:17 ,b:{c:'Test'} , d:null };
var obj2 = { a:17 ,b:{c:'Test'}}; 
var obj3 = { a:17 ,b:null}; 


test("1.)compares two objects & returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent(obj1 ,obj2)).toBe(true);
});

test("2.)compares two objects & returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent(obj1 , obj3)).toBe(false);
});

test("3.)compares two objects & returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent({1:"dhana"} , {1:"dhana"})).toBe(true);
});

test("4.)compares two objects & returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent({1:"dhanashekhar"} , {1:"dhana"})).toBe(false);
});

test("5.)compares 2 number arrays & returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent([1,2,3,4,5], [1,2,3,4,5])).toBe(true);
});

test("6.)compares 2 string arrays & returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent(['a' , 'b' , 'c'], ['a' , 'b', 'c'])).toBe(true);
});

test("7.)compares null, undefined& returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent(null,undefined)).toBe(true);
});

test("8.)compares null, undefined& returns the boolean result of comparision of equivalency ", () => {
    expect(isEquivalent(undefined,null)).toBe(true);
});