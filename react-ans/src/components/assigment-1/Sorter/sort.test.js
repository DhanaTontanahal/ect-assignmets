const sortBy = require("./sort-util");


const stocks = [
    { id: 12, name: 'Tesla', dor: '1998-10-05', price: 1001 },
    { id: 123, name: 'IBM', dor: '1993-02-15', price: 1002 },
    { id: 45, name: 'Google', dor: '1996-01-31', price: 1003 },
    { id: 67, name: 'Microsoft', dor: '1998-04-09', price: 1004 },
    { id: 89, name: 'Amazon', dor: '1996-07-08', price: 1005 },
    { id: 34, name: 'Facebook', dor: '1994-09-12', price: 1006 },
    { id: 234, name: 'Blake', dor: '2000-01-01', price: 1007 }
];

const sortedResult = [3, 2, 1, 87].sortBy(function (o) { return o });
const sortedStocksByIdResult = stocks.sortBy(function (o) { return o.id });
const expectedSortedStocksResById = [{
    dor: "1998-10-05",
    id: 12,
    name: "Tesla",
    price: 1001
}, {
    dor: "1994-09-12",
    id: 34,
    name: "Facebook",
    price: 1006
}, {
    dor: "1996-01-31",
    id: 45,
    name: "Google",
    price: 1003
}, {
    dor: "1998-04-09",
    id: 67,
    name: "Microsoft",
    price: 1004
}, {
    dor: "1996-07-08",
    id: 89,
    name: "Amazon",
    price: 1005
}, {
    dor: "1993-02-15",
    id: 123,
    name: "IBM",
    price: 1002
}, {
    dor: "2000-01-01",
    id: 234,
    name: "Blake",
    price: 1007
}];

const sortedStocksByPriceResult = stocks.sortBy(function (o) { return o.price });
const expectedStocksResSortedByPrice=[{
    dor: "1998-10-05",
    id: 12,
    name: "Tesla",
    price: 1001
  }, {
    dor: "1993-02-15",
    id: 123,
    name: "IBM",
    price: 1002
  }, {
    dor: "1996-01-31",
    id: 45,
    name: "Google",
    price: 1003
  }, {
    dor: "1998-04-09",
    id: 67,
    name: "Microsoft",
    price: 1004
  }, {
    dor: "1996-07-08",
    id: 89,
    name: "Amazon",
    price: 1005
  }, {
    dor: "1994-09-12",
    id: 34,
    name: "Facebook",
    price: 1006
  }, {
    dor: "2000-01-01",
    id: 234,
    name: "Blake",
    price: 1007
  }];
test("1.)sort and check the sorted result length ", () => {
    expect(sortedResult).toHaveLength(4);
});

test("2.)sort and check the number array", () => {
    expect(sortedResult).toEqual([1, 2, 3, 87]);
});

test("3.)sort and test for sorted first id value ", () => {
    expect(sortedStocksByIdResult[0].id).toEqual(expectedSortedStocksResById[0].id);
});

test("3.)sort and check for the third id value ", () => {
    expect(sortedStocksByIdResult[3].id).toEqual(expectedSortedStocksResById[3].id);
});


test("4.)sort by price and check the expected result ", () => {
    expect(sortedStocksByPriceResult).toEqual(expectedStocksResSortedByPrice);
});

