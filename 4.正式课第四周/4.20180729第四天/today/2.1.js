"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var a = 10;

var _loop = function _loop(i) {
    oLis[i].onclick = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3 };
var newObj = _extends({}, obj1, obj2);
