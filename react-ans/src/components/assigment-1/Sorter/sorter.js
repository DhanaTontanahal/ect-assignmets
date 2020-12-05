import { sortBy } from "./sort-util";
export function sorter(inputData, sortOptions) {
    var orderBy=[];
    for (var index = 0; index < sortOptions.length; index++) {
        if (sortOptions[index].substring(0, 1) == '-') {
            sortOptions[index]=sortOptions[0].substring(1,sortOptions[0].length);
            orderBy[index]=-1
        }else{
            orderBy[index]=1
        }
    }

    const result = inputData.sortBy(function (o) { return [ (orderBy[0])*o[sortOptions[0]], (orderBy[1])*o[sortOptions[1]]] });
    return result;
}



