!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function T(e){return c=e,f=setTimeout(O,t),d?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=p();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?m(n,a-(e-c)):n}(e))}function S(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function x(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return T(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=E(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?g(E(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},x.flush=function(){return void 0===f?u:S(p())},x}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var T,j={},O={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea")};O.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Email:",e.target.email.value,"Message:",e.target.message.value),e.currentTarget.reset(),localStorage.removeItem("STORAGE_KEY")})),O.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("STORAGE_KEY",t),j[e.target.name]=e.target.value}),500)),O.form.addEventListener("input",(function(e){j[e.target.name]=e.target.value,console.log(j)})),(T=localStorage.getItem("STORAGE_KEY"))&&(O.textarea.value=T)}();
//# sourceMappingURL=03-feedback.5fa3d9ab.js.map
