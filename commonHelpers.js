import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as g}from"./assets/vendor-77e16229.js";const o=document.querySelector("button[data-start]"),c=document.getElementById("datetime-picker"),r=document.querySelector(".timer"),S=r.querySelector("[data-days]"),b=r.querySelector("[data-hours]"),w=r.querySelector("[data-minutes]"),D=r.querySelector("[data-seconds]");let i,u;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){i=e[0],C()}};p(c,q);function C(){i<=new Date?(o.disabled=!0,g.warning({title:"Warning",message:"Please choose a date in the future",position:"topCenter"})):o.disabled=!1}function s(e){return e.toString().padStart(2,"0")}function l(e,n,t,d){S.textContent=s(e),b.textContent=s(n),w.textContent=s(t),D.textContent=s(d)}function E(){u=setInterval(()=>{const e=new Date().getTime(),n=i-e;if(n<=0){clearInterval(u),l(0,0,0,0),o.disabled=!0,c.disabled=!1;return}const t=a(n);l(t.days,t.hours,t.minutes,t.seconds)},1e3)}o.addEventListener("click",function(){E(),o.disabled=!0,c.disabled=!0});function a(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));
//# sourceMappingURL=commonHelpers.js.map
