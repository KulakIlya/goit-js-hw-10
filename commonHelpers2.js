import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as t}from"./assets/vendor-651d7991.js";const i={position:"topRight",maxWidth:"383px",titleColor:"#ffffff",messageColor:"#ffffff"},s=document.querySelector(".form");s.addEventListener("submit",m);function n(o,e){return new Promise((r,f)=>{setTimeout(()=>{if(o)return t.success({...i,title:"OK",message:`Fulfilled promise in ${e}ms`,backgroundColor:"#59A10D",iconUrl:"../img/icon-success.svg"});t.error({...i,title:"Error",message:`Rejected promise in ${e}ms`,backgroundColor:"#EF4040",iconUrl:"../img/icon-error.svg"})},e)})}function m(o){o.preventDefault();const{delay:e,state:r}=o.target.elements;n(r.value==="fulfilled",Number(e.value))}
//# sourceMappingURL=commonHelpers2.js.map