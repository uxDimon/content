const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};f();class E{constructor(t,e=()=>!1){this.selectEl=t,this.optionsWidth={},this.callbackChange=e,this._created()}_created(){this._createdOptionsWidth(),this.selectEl.addEventListener("change",t=>{this._setWidth(),this.callbackChange(t.currentTarget.value)})}_createdOptionsWidth(){window.addEventListener("load",()=>{const t=[];for(const e of this.selectEl.options){let r=document.createElement("span");r.innerHTML=e.text,t.push(r),this.selectEl.insertAdjacentElement("afterend",r)}for(const e of t)this.optionsWidth[e.innerText]=e.offsetWidth+24,e.remove();this._setWidth()})}_setWidth(){this.selectEl.style.width=this.optionsWidth[this.selectEl.selectedOptions[0].value]+"px"}}class p{constructor(){this.SIZE_CLASS="_size",this.demoWrapEl=document.querySelector("[data-demo-wrap]"),this.itemEl=this.demoWrapEl.querySelector("[data-demo-item]"),this.endEl=this.demoWrapEl.querySelector("[data-demo-end]"),this.itemListEl=[],this._created()}_created(){this.itemEl.remove();for(let t=0;t<3;t++)this._itemConstructor(t)}_itemConstructor(t){let e=this.itemEl.cloneNode(!0),r=1;const i=e.querySelector("[data-demo-item-name]"),s=e.querySelectorAll("[data-demo-item-order]"),o=e.querySelector('[data-demo-item-btn="minus"]'),c=e.querySelector('[data-demo-item-btn="plus"]'),a=e.querySelector('[data-demo-item-btn="remove"]'),m=e.querySelector('[data-demo-item-btn="size"]'),h=e.querySelector('[data-demo-item-btn="add"]'),l=n=>{for(const u of s)u.innerText=n;e.style.order=n};i.innerText=i.innerText+" "+(t+1),a.addEventListener("click",()=>{this.itemListEl.length>1&&this._removeItem()}),m.addEventListener("click",()=>{if(e.classList.contains(this.SIZE_CLASS))e.style.height="",e.classList.remove(this.SIZE_CLASS);else{const n=50*(Math.random()+1.5);e.style.height=n+"px",e.classList.add(this.SIZE_CLASS)}}),h.addEventListener("click",()=>{this._addItem()}),s&&o&&c&&(e.classList.add("item_"+(t+1)),l(r),o.addEventListener("click",()=>{l(--r)}),c.addEventListener("click",()=>{l(++r)})),this.endEl.insertAdjacentElement("beforebegin",e),this.itemListEl.push(e)}_removeItem(){const t=this.itemListEl.length-1;this.itemListEl[t].remove(),this.itemListEl.splice(t,1)}_addItem(){this._itemConstructor(this.itemListEl.length)}}export{E as C,p as D};
