function isEquivalent(a, b) {
    //treating null and undefined as equal as per the requirement
    if((a == null && b == undefined )|| (a == undefined && b == null)){
        return true
    }
    //return the keys of the object
    var aProps = (a != null && typeof a == "object")?Object.getOwnPropertyNames(a):[];
    var bProps = (b!= null && typeof b == "object")?Object.getOwnPropertyNames(b):[];
    //to check for null in the second object
    if(bProps.length == 0)
        return false;
    
    for (var i = 0; i <= aProps.length; i++) {
        var propName = aProps[i];
        //check if the corresponding values of keys inside objects are not equal , return false (not equivalent)
        if (typeof a[propName] !== "object" && a[propName] !== b[propName] ) {
            return false;
        }
        //if the value is object, recursively call isEquivalent function
        else if( (a[propName] != null || b[propName] != null) && typeof a[propName] == "object"){
          return isEquivalent(a[propName] , b[propName])
        }
    }

    //Both objects are equivalent
    return true;
}

module.exports=isEquivalent;