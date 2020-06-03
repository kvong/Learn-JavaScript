// Description: Custom module to be accessed externally

// Use keyword exports to 'export' the function to external file
exports.sayHelloInEnglish = () => {
    return 'hello';
}

exports.sayHelloInSpanish = () => {
    return 'hola';
}

// Another way is to export multiple function as object
// [NOTE: only do it one way or the other, cannot do both]
/*
module.exports = {
    sayHelloInVietnamese : () => {
        return 'sinh chao';
    },
    sayHelloInChinese : () => {
        return 'ni hao';
    }
};
*/

// Show that module is exported
console.log(module);
