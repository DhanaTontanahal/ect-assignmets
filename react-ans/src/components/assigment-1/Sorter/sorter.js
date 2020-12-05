import { sortBy } from "./sort-util";
export function sorter(inputData , sortOptions){
    const result = inputData.sortBy(function (o) { return [o[sortOptions[0]], o[sortOptions[1]]] });
    return result;
}



