// Defang an IP Address
// Write a function that takes an IP address and returns a defanged version of the IP address.
// Example: 12.34.56.78 → 12[.]34[.]56[.]78
//
// Fang an IP Address
// Given a defanged IP address, write a function that fangs it back.
// Example: 12[.]34[.]56[.]78 → 12.34.56.78
//
// Valid IPs: 1.1.1.1, 23.43.12.1, 123.56.1.8
// Invalid IPs: 5433.123.3.2

function defang(ip_address){

    if (!isValidIP(ip_address)) return false;

    let arr = ip_address.split(".");
    let result = arr.join("[.]");

    return result;
}

function fang(ip_address){

    let arr = ip_address.split("[.]");
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