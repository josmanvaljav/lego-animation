(()=>{const e=document.querySelector(".modal"),c=document.querySelector(".spm1"),d=document.querySelector(".spm2"),s=document.querySelector(".spm3"),t=document.querySelector("#radio-1"),i=document.querySelector("#radio-2"),o=document.querySelector("#radio-3"),l=document.querySelector(".modal__content--close");c.addEventListener("click",(()=>{t.checked=!0,e.classList.remove("hidden"),e.classList.add("visible")})),d.addEventListener("click",(()=>{i.checked=!0,e.classList.remove("hidden"),e.classList.add("visible")})),s.addEventListener("click",(()=>{o.checked=!0,e.classList.remove("hidden"),e.classList.add("visible")})),l.addEventListener("click",(()=>{e.classList.remove("visible"),e.classList.add("hidden")}))})();