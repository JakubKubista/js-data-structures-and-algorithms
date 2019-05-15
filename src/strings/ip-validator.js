"use strict";

/**
 * Check if is a string valid IP address.
 * Time Complexity: O(1)
 * @param {string} str
 */
function isValidIP(str) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str))
    {
        return (true)
    }
    console.log("You have entered an invalid IP address!")
    return (false)
}

function testIP() {
    console.log("Iput data: 192.168.13.2, 999.248.4.78")
    console.log(isValidIP("192.168.13.2"))
    console.log(isValidIP("999.248.4.78"));
}
testIP();