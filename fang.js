function defang(ip){

    if (!isValidIP(ip)) return false;

    let arr = ip.split(".");
    let result = arr.join("[.]");

    return result;
}

function fang(ip){

    let arr = ip.split("[.]");
    let result = arr.join(".");

    return isValidIP(result) ? result : false;
}

function isValidIP(ip) {
    let arr = ip.split(".");

    if (arr.length != 4) return false;

    for (let i = 0; i < arr.length; i++){
        if ( typeof parseInt(arr[i]) != 'number' || arr[i] >= 999 || arr[i] <= 0) return false;
    }
    return true;
}