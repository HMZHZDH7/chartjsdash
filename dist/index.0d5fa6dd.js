function e(e,t,a,i){Object.defineProperty(e,t,{get:a,set:i,enumerable:!0,configurable:!0})}var t=globalThis,a={},i={},r=t.parcelRequirefe81;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequirefe81=r);var o=r.register;o("27Lyk",function(t,a){e(t.exports,"register",()=>i,e=>i=e),e(t.exports,"resolve",()=>r,e=>r=e);var i,r,o=new Map;i=function(e,t){for(var a=0;a<t.length-1;a+=2)o.set(t[a],{baseUrl:e,path:t[a+1]})},r=function(e){var t=o.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),o("fARoy",function(t,a){e(t.exports,"showImage",()=>l),r("luIYo");var i=r("9V12L");let o=[];async function n(){document.getElementById("input").addEventListener("keyup",e=>{"Enter"===e.key&&c()}),document.getElementById("send").onclick=c,document.getElementById("pop-up-button").onclick=s;let e=document.getElementsByClassName("gallery-image");for(let t=0;t<e.length;t++)e[t].addEventListener("click",()=>{l(e[t])});document.getElementById("y-axis-select").addEventListener("change",e=>{e.target.value}),document.getElementById("x-axis-select").addEventListener("change",e=>{e.target.value}),document.getElementById("plot-type-select").addEventListener("change",e=>{e.target.value});let t=document.getElementById("trend-line");t.addEventListener("change",e=>{t.checked});let a=document.getElementById("error-bar");a.addEventListener("change",e=>{a.checked});let i=document.getElementById("national-values");i.addEventListener("change",e=>{i.checked});let r=document.getElementById("hospital-select");r.addEventListener("change",e=>{(o=Array.from(r.options).filter(e=>e.selected).map(e=>e.value)).includes("None")?(console.log("None selected"),o=["None"]):console.log(o)})}function l(e){console.log(e);let t=document.getElementById("overlay");t.src=e.src,t.classList.remove("hidden"),document.getElementById("viz").classList.add("hidden");let a=document.getElementsByClassName("thumbnail-selected");console.log(a),0!=a.length&&(console.log("removing class"+a),a[0].classList.remove("thumbnail-selected")),e.classList.add("thumbnail-selected")}function s(){let e=document.getElementById("pop-up"),t=document.getElementById("pop-up-button");e.classList.contains("pop-up-expanded")?(e.classList.remove("pop-up-expanded"),t.classList.remove("rotate")):(e.classList.add("pop-up-expanded"),t.classList.add("rotate"))}async function c(){let e=document.getElementById("input"),t=e.value;if(""!==t.trim()){let a=document.getElementById("chat"),i=document.createElement("div");i.classList.add("message-container"),document.createElement("div").classList.add("ca-message-container");let r=document.createElement("p");r.classList.add("user-message"),r.textContent=t;let o=document.createElement("p");o.classList.add("messenger-id"),o.textContent="User:",i.appendChild(o),i.appendChild(r),a.appendChild(i),e.value="",u(t,a)}}async function u(e,t){let a="https://dashboards.create.aau.dk/log_manager";fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,type:"user"})}).then(e=>{if(!e.ok)throw Error("Failed to post message.");console.log("Message posted successfully.")}).catch(e=>{console.error("Error posting message:",e)});try{let i=await fetch("https://dashboards.create.aau.dk/webhooks/rest/webhook",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e})});if(!i.ok)throw Error(`HTTP error! Status: ${i.status}`);let r=await i.json();console.log(i),console.log(r),r.forEach(e=>{console.log(e.text);let i=document.createElement("div");i.classList.add("received-message"),i.textContent=e.text,t.appendChild(i);let r={message:i.textContent,type:"bot"};fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{if(!e.ok)throw Error("Failed to post message.");console.log("Message posted successfully.")}).catch(e=>{console.error("Error posting message:",e)})})}catch(e){console.error("Error:",e)}r("2DXaS").then(function(e){e.createLineChart(!0)}),document.getElementById("overlay").classList.add("hidden"),document.getElementById("viz").classList.remove("hidden")}document.addEventListener("DOMContentLoaded",async function(){let e=[],t=document.getElementById("gallery-container");for(let a=0;a<e.length;a++){let i=new Image;(i=document.createElement("img")).classList.add("gallery-image"),i.src=e[a],t.appendChild(i)}await n()}),(()=>{let e=document.getElementById("x-axis-select"),t=document.getElementById("y-axis-select");Object.keys(i).forEach(a=>{let i=document.createElement("option");i.value=a,i.text=a;let r=document.createElement("option");r.value=a,r.text=a,e.appendChild(i),t.appendChild(r)})})()}),o("luIYo",function(e,t){!function(){var t=r("8coUR"),a=r("3bq9p"),i={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function o(e){return"string"==typeof e||e instanceof String}function n(e,t){var a=t.headers.origin,i=[];return e.origin&&"*"!==e.origin?(o(e.origin)?i.push([{key:"Access-Control-Allow-Origin",value:e.origin}]):i.push([{key:"Access-Control-Allow-Origin",value:!!function e(t,a){if(Array.isArray(a)){for(var i=0;i<a.length;++i)if(e(t,a[i]))return!0;return!1}return o(a)?t===a:a instanceof RegExp?a.test(t):!!a}(a,e.origin)&&a}]),i.push([{key:"Vary",value:"Origin"}])):i.push([{key:"Access-Control-Allow-Origin",value:"*"}]),i}function l(e){return!0===e.credentials?{key:"Access-Control-Allow-Credentials",value:"true"}:null}function s(e){var t=e.exposedHeaders;return t&&(t.join&&(t=t.join(",")),t&&t.length)?{key:"Access-Control-Expose-Headers",value:t}:null}function c(e,t){for(var i=0,r=e.length;i<r;i++){var o=e[i];o&&(Array.isArray(o)?c(o,t):"Vary"===o.key&&o.value?a(t,o.value):o.value&&t.setHeader(o.key,o.value))}}e.exports=function(e){var a=null;return a="function"==typeof e?e:function(t,a){a(null,e)},function(e,r,o){a(e,function(a,u){if(a)o(a);else{var d=t({},i,u),b=null;d.origin&&"function"==typeof d.origin?b=d.origin:d.origin&&(b=function(e,t){t(null,d.origin)}),b?b(e.headers.origin,function(t,a){var i,u,b,p,y,g,m,f,h;t||!a?o(t):(d.origin=a,i=d,u=e,b=r,p=o,h=[],"OPTIONS"===(u.method&&u.method.toUpperCase&&u.method.toUpperCase())?(h.push(n(i,u)),h.push(l(i,u)),h.push(((y=i.methods).join&&(y=i.methods.join(",")),{key:"Access-Control-Allow-Methods",value:y})),h.push((g=i.allowedHeaders||i.headers,m=[],g?g.join&&(g=g.join(",")):(g=u.headers["access-control-request-headers"],m.push([{key:"Vary",value:"Access-Control-Request-Headers"}])),g&&g.length&&m.push([{key:"Access-Control-Allow-Headers",value:g}]),m)),h.push((f=("number"==typeof i.maxAge||i.maxAge)&&i.maxAge.toString())&&f.length?{key:"Access-Control-Max-Age",value:f}:null),h.push(s(i,u)),c(h,b),i.preflightContinue?p():(b.statusCode=i.optionsSuccessStatus,b.setHeader("Content-Length","0"),b.end())):(h.push(n(i,u)),h.push(l(i,u)),h.push(s(i,u)),c(h,b),p()))}):o()}})}}}()}),o("8coUR",function(e,t){var a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var i=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==i.join(""))return!1;var r={};if("abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},r)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,t){for(var o,n,l=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in o=Object(arguments[s]))i.call(o,c)&&(l[c]=o[c]);if(a){n=a(o);for(var u=0;u<n.length;u++)r.call(o,n[u])&&(l[n[u]]=o[n[u]])}}return l}:Object.assign}),o("3bq9p",function(e,t){e.exports=function(e,t){if(!e||!e.getHeader||!e.setHeader)throw TypeError("res argument is required");var a=e.getHeader("Vary")||"";(a=i(Array.isArray(a)?a.join(", "):String(a),t))&&e.setHeader("Vary",a)},e.exports.append=i;var a=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function i(e,t){if("string"!=typeof e)throw TypeError("header argument is required");if(!t)throw TypeError("field argument is required");for(var i=Array.isArray(t)?t:r(String(t)),o=0;o<i.length;o++)if(!a.test(i[o]))throw TypeError("field argument contains an invalid header name");if("*"===e)return e;var n=e,l=r(e.toLowerCase());if(-1!==i.indexOf("*")||-1!==l.indexOf("*"))return"*";for(var s=0;s<i.length;s++){var c=i[s].toLowerCase();-1===l.indexOf(c)&&(l.push(c),n=n?n+", "+i[s]:i[s])}return n}function r(e){for(var t=0,a=[],i=0,r=0,o=e.length;r<o;r++)switch(e.charCodeAt(r)){case 32:i===t&&(i=t=r+1);break;case 44:a.push(e.substring(i,t)),i=t=r+1;break;default:t=r+1}return a.push(e.substring(i,t)),a}}),o("9V12L",function(e,t){e.exports=JSON.parse('{"Time":{"label":"Time","attribute_type":"Quantitative"},"Age":{"label":"Age","attribute_type":"Quantitative"},"Gender":{"label":"Gender","attribute_type":"Categorical"},"NIHSS":{"label":"NIHSS","attribute_type":"Quantitative"},"BP systolic":{"label":"BP systolic","attribute_type":"Quantitative"},"BP diastolic":{"label":"BP diastolic","attribute_type":"Quantitative"},"Glucose":{"label":"Glucose","attribute_type":"Quantitative"},"LDL cholesterol":{"label":"LDL cholesterol","attribute_type":"Quantitative"},"mRS 2-5":{"label":"mRS 2-5","attribute_type":"Categorical"},"COVID positive":{"label":"COVID positive","attribute_type":"Categorical_binary"},"In-hospital stroke":{"label":"In-hospital stroke","attribute_type":"Categorical_binary"},"Arrival pre-notified":{"label":"Arrival pre-notified","attribute_type":"Categorical_binary"},"Hypertension":{"label":"Hypertension","attribute_type":"Categorical_binary"},"Diabetes":{"label":"Diabetes","attribute_type":"Categorical_binary"},"Hyperlipidemia":{"label":"Hyperlipidemia","attribute_type":"Categorical_binary"},"Active smoker":{"label":"Active smoker","attribute_type":"Categorical_binary"},"Previous IS/TIA":{"label":"Previous IS/TIA","attribute_type":"Categorical_binary"},"Previous ICH":{"label":"Previous ICH","attribute_type":"Categorical_binary"},"Cor. Artery Disease / Previous MI":{"label":"Cor. Artery Disease / Previous MI","attribute_type":"Categorical_binary"},"Cong. Heart Fail":{"label":"Cong. Heart Fail","attribute_type":"Categorical_binary"},"HIV":{"label":"HIV","attribute_type":"Categorical_binary"},"Type of stroke":{"label":"Type of stroke","attribute_type":"Categorical"},"Arrival":{"label":"Arrival","attribute_type":"Quantitative"},"First received care":{"label":"First received care","attribute_type":"Quantitative"},"Hospitalized at unit":{"label":"Hospitalized at unit","attribute_type":"Categorical"},"Hospitalized at department":{"label":"Hospitalized at department","attribute_type":"Categorical"},"Anti Diabetics":{"label":"Anti Diabetics","attribute_type":"Categorical_binary"},"Anti Hypertensives":{"label":"Anti Hypertensives","attribute_type":"Categorical_binary"},"Aspirin (ASA)":{"label":"Aspirin (ASA)","attribute_type":"Categorical_binary"},"Cilostazol":{"label":"Cilostazol","attribute_type":"Categorical_binary"},"Clopidogrel":{"label":"Clopidogrel","attribute_type":"Categorical_binary"},"Ticagrelol":{"label":"Ticagrelol","attribute_type":"Categorical_binary"},"Ticlopidine":{"label":"Ticlopidine","attribute_type":"Categorical_binary"},"Prasugrel":{"label":"Prasugrel","attribute_type":"Categorical_binary"},"Dipyridamol, slow release":{"label":"Dipyridamol, slow release","attribute_type":"Categorical_binary"},"Warfarin":{"label":"Warfarin","attribute_type":"Categorical_binary"},"Low molecular weight heparin/heparin":{"label":"Low molecular weight heparin/heparin","attribute_type":"Categorical_binary"},"Dabigatran":{"label":"Dabigatran","attribute_type":"Categorical_binary"},"Rivoroxaban":{"label":"Rivoroxaban","attribute_type":"Categorical_binary"},"Apixaban":{"label":"Apixaban","attribute_type":"Categorical_binary"},"Edoxaban":{"label":"Edoxaban","attribute_type":"Categorical_binary"},"Statin":{"label":"Statin","attribute_type":"Categorical_binary"},"Ischemic stroke etiology":{"label":"Ischemic stroke etiology","attribute_type":"Categorical"},"Stroke mimics":{"label":"Stroke mimics","attribute_type":"Categorical"},"ICH volume":{"label":"ICH volume","attribute_type":"Quantitative"},"Infratentorial bleeding":{"label":"Infratentorial bleeding","attribute_type":"Categorical_binary"},"Source of bleeding found":{"label":"Source of bleeding found","attribute_type":"Categorical"},"Intraventricular bleeding":{"label":"Intraventricular bleeding","attribute_type":"Categorical_binary"},"ICH score":{"label":"ICH score","attribute_type":"Quantitative"},"Neurosurgery for ICH":{"label":"Neurosurgery for ICH","attribute_type":"Categorical_binary"},"Neurosurgery for SAH":{"label":"Neurosurgery for SAH","attribute_type":"Categorical_binary"},"ICH bleeding cause":{"label":"ICH bleeding cause","attribute_type":"Categorical"},"DVT prevention for ICH":{"label":"DVT prevention for ICH","attribute_type":"Categorical_binary"},"Hunt-Hess":{"label":"Hunt-Hess","attribute_type":"Quantitative"},"Imaging modality":{"label":"Imaging modality","attribute_type":"Categorical"},"Site of occlusion":{"label":"Site of occlusion","attribute_type":"Categorical"},"Imaging not done at all":{"label":"Imaging not done at all","attribute_type":"Categorical_binary"},"Imaging done but outside your hospital":{"label":"Imaging done but outside your hospital","attribute_type":"Categorical_binary"},"Door-to-imaging time":{"label":"Door-to-imaging time","attribute_type":"Quantitative"},"CT perfusion score":{"label":"CT perfusion score","attribute_type":"Quantitative"},"CT perfusion hypoperfusion":{"label":"CT perfusion hypoperfusion","attribute_type":"Quantitative"},"Carotid arteries imaging within 7 days after admission":{"label":"Carotid arteries imaging within 7 days after admission","attribute_type":"Categorical_binary"},"Symptomatic carotid stenosis > 70%":{"label":"Symptomatic carotid stenosis > 70%","attribute_type":"Categorical_binary"},"Symptomatic carotid stenosis 50-70%":{"label":"Symptomatic carotid stenosis 50-70%","attribute_type":"Categorical_binary"},"Number of IVT":{"label":"Number of IVT","attribute_type":"Quantitative"},"% IVT of all ischemic strokes":{"label":"% IVT of all ischemic strokes","attribute_type":"Quantitative"},"Onset-to-door time for IVT, median":{"label":"Onset-to-door time for IVT, median","attribute_type":"Quantitative"},"Door-to-needle for IVT, median":{"label":"Door-to-needle for IVT, median","attribute_type":"Quantitative"},"% MT only of all ischemic strokes":{"label":"% MT only of all ischemic strokes","attribute_type":"Quantitative"},"% IVT+MT of all ischemic strokes":{"label":"% IVT+MT of all ischemic strokes","attribute_type":"Quantitative"},"Door-to-groin for MT, median. Direct (primary transport)":{"label":"Door-to-groin for MT, median. Direct (primary transport)","attribute_type":"Quantitative"},"Door-to-groin for MT, median. Drip-and-ship (secondary transport)":{"label":"Door-to-groin for MT, median. Drip-and-ship (secondary transport)","attribute_type":"Quantitative"},"Door-in-door-out, median. For PSC, transport to CSC for MT":{"label":"Door-in-door-out, median. For PSC, transport to CSC for MT","attribute_type":"Quantitative"},"TICI scores":{"label":"TICI scores","attribute_type":"Categorical"},"Bleeding after IVT/MT":{"label":"Bleeding after IVT/MT","attribute_type":"Categorical_binary"},"Complications after MT":{"label":"Complications after MT","attribute_type":"Categorical_binary"},"DVT prevention":{"label":"DVT prevention","attribute_type":"Categorical_binary"},"Decompressive hemicraniectomy of patients >60 years and > NIHSS":{"label":"Decompressive hemicraniectomy of patients >60 years and > NIHSS","attribute_type":"Categorical_binary"},"Carotid artery imaging <= 7 days after admission":{"label":"Carotid artery imaging <= 7 days after admission","attribute_type":"Categorical_binary"},">70% internal carotid artery stenosis":{"label":">70% internal carotid artery stenosis","attribute_type":"Categorical_binary"},"Carotid endarterectomy of patients with >70% ICA stenosis":{"label":"Carotid endarterectomy of patients with >70% ICA stenosis","attribute_type":"Categorical_binary"},"Antipyretic administered for the first elevated temperature":{"label":"Antipyretic administered for the first elevated temperature","attribute_type":"Categorical_binary"},"Was insulin administered for the first elevated glucose (>=10 mmol/L)?":{"label":"Was insulin administered for the first elevated glucose (>=10 mmol/L)?","attribute_type":"Categorical_binary"},"Dysphagia screening performed before given medication/food orally":{"label":"Dysphagia screening performed before given medication/food orally","attribute_type":"Categorical_binary"},"Physiotherapy initiated <= 72 hours after admission":{"label":"Physiotherapy initiated <= 72 hours after admission","attribute_type":"Categorical_binary"},"Patient examined by occupational therapist":{"label":"Patient examined by occupational therapist","attribute_type":"Categorical_binary"},"Who performed swallowing screen":{"label":"Who performed swallowing screen","attribute_type":"Categorical"},"Reasons for not providing IVT":{"label":"Reasons for not providing IVT","attribute_type":"Categorical"},"Test for dysphagia screen":{"label":"Test for dysphagia screen","attribute_type":"Categorical"},"Warfarin for AF":{"label":"Warfarin for AF","attribute_type":"Categorical_binary"},"Low molecular weight heparin/heparin for AF":{"label":"Low molecular weight heparin/heparin for AF","attribute_type":"Categorical_binary"},"Dabigatran for AF":{"label":"Dabigatran for AF","attribute_type":"Categorical_binary"},"Rivoroxaban for AF":{"label":"Rivoroxaban for AF","attribute_type":"Categorical_binary"},"Apixaban for AF":{"label":"Apixaban for AF","attribute_type":"Categorical_binary"},"Edoxaban for AF":{"label":"Edoxaban for AF","attribute_type":"Categorical_binary"},"Statin for non-cardioembolic ischemic stroke":{"label":"Statin for non-cardioembolic ischemic stroke","attribute_type":"Categorical_binary"},"Complications":{"label":"Complications","attribute_type":"Categorical"},"Discharge destination":{"label":"Discharge destination","attribute_type":"Categorical"},"Modified ranking scale discharge":{"label":"Modified ranking scale discharge","attribute_type":"Categorical"},"Modified ranking scale 3 month":{"label":"Modified ranking scale 3 month","attribute_type":"Categorical"},"NIHSS discharge":{"label":"NIHSS discharge","attribute_type":"Quantitative"},"Patients treated with door-to-needle time <= 60 minutes":{"label":"Patients treated with door-to-needle time <= 60 minutes","attribute_type":"Categorical_binary"},"Patients treated with door-to-needle time <= 45 minutes":{"label":"Patients treated with door-to-needle time <= 45 minutes","attribute_type":"Categorical_binary"},"Patients treated with door-to-groin time <= 120 minutes":{"label":"Patients treated with door-to-groin time <= 120 minutes","attribute_type":"Categorical_binary"},"Patients treated with door-to-groin time <= 90 minutes":{"label":"Patients treated with door-to-groin time <= 90 minutes","attribute_type":"Categorical_binary"},"Recanalization rate out of total ischemic incidence":{"label":"Recanalization rate out of total ischemic incidence","attribute_type":"Quantitative"},"Suspected stroke patients undergoing CT/MRI":{"label":"Suspected stroke patients undergoing CT/MRI","attribute_type":"Categorical_binary"},"Stroke patients undergoing dysphagia screening":{"label":"Stroke patients undergoing dysphagia screening","attribute_type":"Categorical_binary"},"Ischemic stroke patients discharged with antiplatelets":{"label":"Ischemic stroke patients discharged with antiplatelets","attribute_type":"Categorical_binary"},"Atrial fibrillation patients discharged with anticoagulants":{"label":"Atrial fibrillation patients discharged with anticoagulants","attribute_type":"Categorical_binary"},"Stroke patients hospitalized in a dedicated stroke unit / ICU":{"label":"Stroke patients hospitalized in a dedicated stroke unit / ICU","attribute_type":"Categorical_binary"}}')}),o("2DXaS",function(e,t){var a=r("Gr8vk");e.exports=a("fovNY").then(()=>r("drorF"))}),o("Gr8vk",function(e,t){e.exports=function(e){return import(r("27Lyk").resolve(e))}}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["iN6FW","index.0d5fa6dd.js","fovNY","viz.39936864.js"]')),r("fARoy");
//# sourceMappingURL=index.0d5fa6dd.js.map
