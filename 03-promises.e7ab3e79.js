var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");function l(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const o=e.currentTarget.elements.delay.value,t=e.currentTarget.elements.step.value,n=e.currentTarget.elements.amount.value;let i=Number(o),a=Number(t);const s=Number(n);console.log("start load cache");const c=Date.now();for(let e=1;e<=s;e+=1)e>1&&(i+=a),l(e,i).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`);const t=Date.now();console.log("cache load ok executed in",(t-c)/1e3)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`);const t=Date.now();console.log("cache load1 ok executed in",(t-c)/1e3)}))}));
//# sourceMappingURL=03-promises.e7ab3e79.js.map