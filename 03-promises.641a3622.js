!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');function f(e,n){var t={position:e,delay:n},o=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){o?e(t):r(t)}),n)}))}i.addEventListener("submit",(function(n){n.preventDefault();var t=Number(a.value);if(a.value<0||l.value<0||c.value<=0)return void e(u).Notify.failure("Please enter correct value!");for(var o=1;o<=c.value;o+=1)f(o,t).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=Number(l.value)}))}();
//# sourceMappingURL=03-promises.641a3622.js.map
