function deepCopy(inputObject){
    let copiedObject , key , value;

    //check if null , because typeof null --> also object &&
    //check if passed value of 'inputObject' is not an object
    if(inputObject == null || typeof inputObject !== "object"){
        return inputObject;
    }
    //if 'inputObject' is array , initialize empty array otherwise initialize empty object
    copiedObject = Array.isArray(inputObject)?[]:{};

    //Enumerate the keys of 'inputObject'
    for(key in inputObject){
        value = inputObject[key];
        //recursively call the deepCopy function along with extracted value of enumerated key
        copiedObject[key]=deepCopy(value);
    }
    //Return the final deep cloned object
    return copiedObject;
}

module.exports=deepCopy;