import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as o,i}from"./assets/vendor-651d7991.js";const e=document.querySelector(".btn");let t;e.addEventListener("click",s);const a={enableTime:!0,time_24hr:!0,defaultDate:new Date,onClose(r){if(t=r[0],t-Date.now()<=0)return e.setAttribute("disabled",!0),i.error(n);e.removeAttribute("disabled")}};o("#datetime-picker",a);const n={title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:"./img/icon-error.svg"};function s(){setInterval(updateTime,1e3)}
//# sourceMappingURL=commonHelpers.js.map