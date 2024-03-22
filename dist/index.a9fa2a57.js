// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1ZN8K":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "363d3ee0a9fa2a57";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7LLTF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showImage", ()=>showImage);
var _cors = require("cors");
var _corsDefault = parcelHelpers.interopDefault(_cors);
// chatbox.js
const xy = require("8d66e6a4ba26fcab");
let yAxis = "Age";
let xAxis = "Gender";
let plotType = "line";
let trendLineChecked = false;
let errorBarChecked = false;
let nationalValuesChecked = false;
let selectedHospitals = [];
async function setupEventListeners() {
    const messageInput = document.getElementById("input");
    messageInput.addEventListener("keyup", (event)=>{
        if (event.key === "Enter") sendMessage();
    });
    const sendButton = document.getElementById("send");
    sendButton.onclick = sendMessage;
    const menuButton = document.getElementById("pop-up-button");
    menuButton.onclick = openMenu;
    const thumbnails = document.getElementsByClassName("gallery-image");
    for(let i = 0; i < thumbnails.length; i++)thumbnails[i].addEventListener("click", ()=>{
        showImage(thumbnails[i]);
    });
    const yAxisSelect = document.getElementById("y-axis-select");
    yAxisSelect.addEventListener("change", (event)=>{
        yAxis = event.target.value;
    //sendMessageToRasa('y-axis: ' + yAxis)
    });
    const xAxisSelect = document.getElementById("x-axis-select");
    xAxisSelect.addEventListener("change", (event)=>{
        xAxis = event.target.value;
    //sendMessageToRasa('x-axis: ' + xAxis)
    });
    const plotTypeSelect = document.getElementById("plot-type-select");
    plotTypeSelect.addEventListener("change", (event)=>{
        plotType = event.target.value;
    //sendMessageToRasa('plot-type: ' + plotType)
    });
    const trendLine = document.getElementById("trend-line");
    trendLine.addEventListener("change", (event)=>{
        if (trendLine.checked === true) trendLineChecked = true;
        else trendLineChecked = false;
    //sendMessageToRasa('trend-line: ' + trendLineChecked)
    });
    const errorBar = document.getElementById("error-bar");
    errorBar.addEventListener("change", (event)=>{
        if (errorBar.checked === true) errorBarChecked = true;
        else errorBarChecked = false;
    //sendMessageToRasa('error-bar: ' + errorBarChecked)
    });
    const nationalValues = document.getElementById("national-values");
    nationalValues.addEventListener("change", (event)=>{
        if (nationalValues.checked === true) nationalValuesChecked = true;
        else nationalValuesChecked = false;
    //sendMessageToRasa('national-values: ' + nationalValuesChecked)
    });
    const hospitalComparison = document.getElementById("hospital-select");
    hospitalComparison.addEventListener("change", (event)=>{
        selectedHospitals = Array.from(hospitalComparison.options).filter((option)=>option.selected).map((option)=>option.value);
        if (selectedHospitals.includes("None")) {
            console.log("None selected");
            selectedHospitals = [
                "None"
            ];
        } else console.log(selectedHospitals);
    //sendMessageToRasa('compare with hospitals: ' + selectedHospitals)
    });
}
function showImage(thumbnail) {
    //print out 'this works' to the console
    console.log(thumbnail);
    // create overlay div with thumbnail
    const overlay = document.getElementById("overlay");
    overlay.src = thumbnail.src;
    overlay.classList.remove("hidden");
    const chart = document.getElementById("viz");
    chart.classList.add("hidden");
    const selected = document.getElementsByClassName("thumbnail-selected");
    console.log(selected);
    if (selected.length != 0) {
        console.log("removing class" + selected);
        selected[0].classList.remove("thumbnail-selected");
        thumbnail.classList.add("thumbnail-selected");
    } else thumbnail.classList.add("thumbnail-selected");
}
function openMenu() {
    const menu = document.getElementById("pop-up");
    const menuButton = document.getElementById("pop-up-button");
    if (menu.classList.contains("pop-up-expanded")) {
        menu.classList.remove("pop-up-expanded");
        menuButton.classList.remove("rotate");
    } else {
        menu.classList.add("pop-up-expanded");
        menuButton.classList.add("rotate");
    }
}
document.addEventListener("DOMContentLoaded", async function() {
    // Your code here
    // create an array of all images
    const chartLibrary = [
        "./public/chart1.png",
        "./public/chart2.png",
        "./public/chart1.png",
        "./public/chart2.png",
        "./public/chart1.png",
        "./public/chart2.png"
    ];
    const galleryContainer = document.getElementById("gallery-container");
    //loop through the image array
    for(let i = 0; i < chartLibrary.length; i++){
        //create a new image element
        let img = new Image();
        img = document.createElement("img");
        img.classList.add("gallery-image");
        //set the source of the image element
        img.src = chartLibrary[i];
        galleryContainer.appendChild(img);
    }
    await setupEventListeners();
});
async function sendMessage() {
    const messageInput = document.getElementById("input");
    const message = messageInput.value;
    if (message.trim() !== "") {
        const chatContainer1 = document.getElementById("chat");
        const userMessageContainer = document.createElement("div");
        userMessageContainer.classList.add("message-container");
        const chatbotMessageContainer = document.createElement("div");
        chatbotMessageContainer.classList.add("ca-message-container");
        // User message
        const userMessage = document.createElement("p");
        userMessage.classList.add("user-message");
        userMessage.textContent = message;
        const messengerID = document.createElement("p");
        messengerID.classList.add("messenger-id");
        messengerID.textContent = "User:";
        userMessageContainer.appendChild(messengerID);
        userMessageContainer.appendChild(userMessage);
        // Ship it to frontend
        chatContainer1.appendChild(userMessageContainer);
        messageInput.value = "";
        // Send message to Rasa
        // sendMessageToRasa(message);
        // Bot message
        const botMessage = document.createElement("p");
        botMessage.classList.add("received-message");
        botMessage.textContent = "I am a bot";
        const botMessengerID = document.createElement("p");
        botMessengerID.classList.add("chatbot-id");
        botMessengerID.textContent = "Chatbot:";
        chatbotMessageContainer.appendChild(botMessengerID);
        chatbotMessageContainer.appendChild(botMessage);
        chatContainer1.appendChild(chatbotMessageContainer);
        return;
    }
}
async function sendMessageToRasa(message) {
    const url = "http://localhost:5005/webhooks/rest/webhook"; //'https://dashboards.create.aau.dk/webhooks/rest/webhook';
    //const url = 'https://dashboards.create.aau.dk/webhooks/rest/webhook';
    const data = {
        message: message
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const responseData = await response.json();
        // const responseDataArray = responseData.messages || []
        console.log(response);
        console.log(responseData);
        responseData.forEach((message)=>{
            console.log(message.text);
            const botMessage = document.createElement("div");
            botMessage.classList.add("received-message");
            botMessage.textContent = message.text;
            chatContainer.appendChild(botMessage);
        });
    } catch (error) {
        console.error("Error:", error);
    // Handle the error as needed, e.g., show an error message to the user
    }
    require("2d773bba916997e6").then(function(viz) {
        viz.createLineChart();
    });
    //hide the img #overlay and remove class hidden from #viz
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");
    const chart = document.getElementById("viz");
    chart.classList.remove("hidden");
}
// async function getURL() {
//   const url = 'https://dashboards.create.aau.dk/webhooks/rest/webhook/status';
//   const response = await fetch(url);
//   if (response.status === 200) {
//     return "http://localhost:5005"
//   } else {
//     return "https://dashboards.create.aau.dk:5005"
//   }
// }
const generateXAndYAxisDropdowns = ()=>{
    const xDropdown = document.getElementById("x-axis-select");
    const yDropdown = document.getElementById("y-axis-select");
    Object.keys(xy).forEach((key)=>{
        const xoption = document.createElement("option");
        xoption.value = key;
        xoption.text = key;
        const yoption = document.createElement("option");
        yoption.value = key;
        yoption.text = key;
        xDropdown.appendChild(xoption);
        yDropdown.appendChild(yoption);
    });
};
generateXAndYAxisDropdowns();

},{"8d66e6a4ba26fcab":"iRCMs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","cors":"j1GD8","2d773bba916997e6":"aXzLB"}],"iRCMs":[function(require,module,exports) {
module.exports = JSON.parse('{"Age":{"label":"Age","attribute_type":"Quantitative"},"Gender":{"label":"Gender","attribute_type":"Categorical"},"NIHSS":{"label":"NIHSS","attribute_type":"Quantitative"},"BP systolic":{"label":"BP systolic","attribute_type":"Quantitative"},"BP diastolic":{"label":"BP diastolic","attribute_type":"Quantitative"},"Glucose":{"label":"Glucose","attribute_type":"Quantitative"},"LDL cholesterol":{"label":"LDL cholesterol","attribute_type":"Quantitative"},"mRS 2-5":{"label":"mRS 2-5","attribute_type":"Categorical"},"COVID positive":{"label":"COVID positive","attribute_type":"Categorical_binary"},"In-hospital stroke":{"label":"In-hospital stroke","attribute_type":"Categorical_binary"},"Arrival pre-notified":{"label":"Arrival pre-notified","attribute_type":"Categorical_binary"},"Hypertension":{"label":"Hypertension","attribute_type":"Categorical_binary"},"Diabetes":{"label":"Diabetes","attribute_type":"Categorical_binary"},"Hyperlipidemia":{"label":"Hyperlipidemia","attribute_type":"Categorical_binary"},"Active smoker":{"label":"Active smoker","attribute_type":"Categorical_binary"},"Previous IS/TIA":{"label":"Previous IS/TIA","attribute_type":"Categorical_binary"},"Previous ICH":{"label":"Previous ICH","attribute_type":"Categorical_binary"},"Cor. Artery Disease / Previous MI":{"label":"Cor. Artery Disease / Previous MI","attribute_type":"Categorical_binary"},"Cong. Heart Fail":{"label":"Cong. Heart Fail","attribute_type":"Categorical_binary"},"HIV":{"label":"HIV","attribute_type":"Categorical_binary"},"Type of stroke":{"label":"Type of stroke","attribute_type":"Categorical"},"Arrival":{"label":"Arrival","attribute_type":"Quantitative"},"First received care":{"label":"First received care","attribute_type":"Quantitative"},"Hospitalized at unit":{"label":"Hospitalized at unit","attribute_type":"Categorical"},"Hospitalized at department":{"label":"Hospitalized at department","attribute_type":"Categorical"},"Anti Diabetics":{"label":"Anti Diabetics","attribute_type":"Categorical_binary"},"Anti Hypertensives":{"label":"Anti Hypertensives","attribute_type":"Categorical_binary"},"Aspirin (ASA)":{"label":"Aspirin (ASA)","attribute_type":"Categorical_binary"},"Cilostazol":{"label":"Cilostazol","attribute_type":"Categorical_binary"},"Clopidogrel":{"label":"Clopidogrel","attribute_type":"Categorical_binary"},"Ticagrelol":{"label":"Ticagrelol","attribute_type":"Categorical_binary"},"Ticlopidine":{"label":"Ticlopidine","attribute_type":"Categorical_binary"},"Prasugrel":{"label":"Prasugrel","attribute_type":"Categorical_binary"},"Dipyridamol, slow release":{"label":"Dipyridamol, slow release","attribute_type":"Categorical_binary"},"Warfarin":{"label":"Warfarin","attribute_type":"Categorical_binary"},"Low molecular weight heparin/heparin":{"label":"Low molecular weight heparin/heparin","attribute_type":"Categorical_binary"},"Dabigatran":{"label":"Dabigatran","attribute_type":"Categorical_binary"},"Rivoroxaban":{"label":"Rivoroxaban","attribute_type":"Categorical_binary"},"Apixaban":{"label":"Apixaban","attribute_type":"Categorical_binary"},"Edoxaban":{"label":"Edoxaban","attribute_type":"Categorical_binary"},"Statin":{"label":"Statin","attribute_type":"Categorical_binary"},"Ischemic stroke etiology":{"label":"Ischemic stroke etiology","attribute_type":"Categorical"},"Stroke mimics":{"label":"Stroke mimics","attribute_type":"Categorical"},"ICH volume":{"label":"ICH volume","attribute_type":"Quantitative"},"Infratentorial bleeding":{"label":"Infratentorial bleeding","attribute_type":"Categorical_binary"},"Source of bleeding found":{"label":"Source of bleeding found","attribute_type":"Categorical"},"Intraventricular bleeding":{"label":"Intraventricular bleeding","attribute_type":"Categorical_binary"},"ICH score":{"label":"ICH score","attribute_type":"Quantitative"},"Neurosurgery for ICH":{"label":"Neurosurgery for ICH","attribute_type":"Categorical_binary"},"Neurosurgery for SAH":{"label":"Neurosurgery for SAH","attribute_type":"Categorical_binary"},"ICH bleeding cause":{"label":"ICH bleeding cause","attribute_type":"Categorical"},"DVT prevention for ICH":{"label":"DVT prevention for ICH","attribute_type":"Categorical_binary"},"Hunt-Hess":{"label":"Hunt-Hess","attribute_type":"Quantitative"},"Imaging modality":{"label":"Imaging modality","attribute_type":"Categorical"},"Site of occlusion":{"label":"Site of occlusion","attribute_type":"Categorical"},"Imaging not done at all":{"label":"Imaging not done at all","attribute_type":"Categorical_binary"},"Imaging done but outside your hospital":{"label":"Imaging done but outside your hospital","attribute_type":"Categorical_binary"},"Door-to-imaging time":{"label":"Door-to-imaging time","attribute_type":"Quantitative"},"CT perfusion score":{"label":"CT perfusion score","attribute_type":"Quantitative"},"CT perfusion hypoperfusion":{"label":"CT perfusion hypoperfusion","attribute_type":"Quantitative"},"Carotid arteries imaging within 7 days after admission":{"label":"Carotid arteries imaging within 7 days after admission","attribute_type":"Categorical_binary"},"Symptomatic carotid stenosis > 70%":{"label":"Symptomatic carotid stenosis > 70%","attribute_type":"Categorical_binary"},"Symptomatic carotid stenosis 50-70%":{"label":"Symptomatic carotid stenosis 50-70%","attribute_type":"Categorical_binary"},"Number of IVT":{"label":"Number of IVT","attribute_type":"Quantitative"},"% IVT of all ischemic strokes":{"label":"% IVT of all ischemic strokes","attribute_type":"Quantitative"},"Onset-to-door time for IVT, median":{"label":"Onset-to-door time for IVT, median","attribute_type":"Quantitative"},"Door-to-needle for IVT, median":{"label":"Door-to-needle for IVT, median","attribute_type":"Quantitative"},"% MT only of all ischemic strokes":{"label":"% MT only of all ischemic strokes","attribute_type":"Quantitative"},"% IVT+MT of all ischemic strokes":{"label":"% IVT+MT of all ischemic strokes","attribute_type":"Quantitative"},"Door-to-groin for MT, median. Direct (primary transport)":{"label":"Door-to-groin for MT, median. Direct (primary transport)","attribute_type":"Quantitative"},"Door-to-groin for MT, median. Drip-and-ship (secondary transport)":{"label":"Door-to-groin for MT, median. Drip-and-ship (secondary transport)","attribute_type":"Quantitative"},"Door-in-door-out, median. For PSC, transport to CSC for MT":{"label":"Door-in-door-out, median. For PSC, transport to CSC for MT","attribute_type":"Quantitative"},"TICI scores":{"label":"TICI scores","attribute_type":"Categorical"},"Bleeding after IVT/MT":{"label":"Bleeding after IVT/MT","attribute_type":"Categorical_binary"},"Complications after MT":{"label":"Complications after MT","attribute_type":"Categorical_binary"},"DVT prevention":{"label":"DVT prevention","attribute_type":"Categorical_binary"},"Decompressive hemicraniectomy of patients >60 years and > NIHSS":{"label":"Decompressive hemicraniectomy of patients >60 years and > NIHSS","attribute_type":"Categorical_binary"},"Carotid artery imaging <= 7 days after admission":{"label":"Carotid artery imaging <= 7 days after admission","attribute_type":"Categorical_binary"},">70% internal carotid artery stenosis":{"label":">70% internal carotid artery stenosis","attribute_type":"Categorical_binary"},"Carotid endarterectomy of patients with >70% ICA stenosis":{"label":"Carotid endarterectomy of patients with >70% ICA stenosis","attribute_type":"Categorical_binary"},"Antipyretic administered for the first elevated temperature":{"label":"Antipyretic administered for the first elevated temperature","attribute_type":"Categorical_binary"},"Was insulin administered for the first elevated glucose (>=10 mmol/L)?":{"label":"Was insulin administered for the first elevated glucose (>=10 mmol/L)?","attribute_type":"Categorical_binary"},"Dysphagia screening performed before given medication/food orally":{"label":"Dysphagia screening performed before given medication/food orally","attribute_type":"Categorical_binary"},"Physiotherapy initiated <= 72 hours after admission":{"label":"Physiotherapy initiated <= 72 hours after admission","attribute_type":"Categorical_binary"},"Patient examined by occupational therapist":{"label":"Patient examined by occupational therapist","attribute_type":"Categorical_binary"},"Who performed swallowing screen":{"label":"Who performed swallowing screen","attribute_type":"Categorical"},"Reasons for not providing IVT":{"label":"Reasons for not providing IVT","attribute_type":"Categorical"},"Test for dysphagia screen":{"label":"Test for dysphagia screen","attribute_type":"Categorical"},"Warfarin for AF":{"label":"Warfarin for AF","attribute_type":"Categorical_binary"},"Low molecular weight heparin/heparin for AF":{"label":"Low molecular weight heparin/heparin for AF","attribute_type":"Categorical_binary"},"Dabigatran for AF":{"label":"Dabigatran for AF","attribute_type":"Categorical_binary"},"Rivoroxaban for AF":{"label":"Rivoroxaban for AF","attribute_type":"Categorical_binary"},"Apixaban for AF":{"label":"Apixaban for AF","attribute_type":"Categorical_binary"},"Edoxaban for AF":{"label":"Edoxaban for AF","attribute_type":"Categorical_binary"},"Statin for non-cardioembolic ischemic stroke":{"label":"Statin for non-cardioembolic ischemic stroke","attribute_type":"Categorical_binary"},"Complications":{"label":"Complications","attribute_type":"Categorical"},"Discharge destination":{"label":"Discharge destination","attribute_type":"Categorical"},"Modified ranking scale discharge":{"label":"Modified ranking scale discharge","attribute_type":"Categorical"},"Modified ranking scale 3 month":{"label":"Modified ranking scale 3 month","attribute_type":"Categorical"},"NIHSS discharge":{"label":"NIHSS discharge","attribute_type":"Quantitative"},"Patients treated with door-to-needle time <= 60 minutes":{"label":"Patients treated with door-to-needle time <= 60 minutes","attribute_type":"Categorical_binary"},"Patients treated with door-to-needle time <= 45 minutes":{"label":"Patients treated with door-to-needle time <= 45 minutes","attribute_type":"Categorical_binary"},"Patients treated with door-to-groin time <= 120 minutes":{"label":"Patients treated with door-to-groin time <= 120 minutes","attribute_type":"Categorical_binary"},"Patients treated with door-to-groin time <= 90 minutes":{"label":"Patients treated with door-to-groin time <= 90 minutes","attribute_type":"Categorical_binary"},"Recanalization rate out of total ischemic incidence":{"label":"Recanalization rate out of total ischemic incidence","attribute_type":"Quantitative"},"Suspected stroke patients undergoing CT/MRI":{"label":"Suspected stroke patients undergoing CT/MRI","attribute_type":"Categorical_binary"},"Stroke patients undergoing dysphagia screening":{"label":"Stroke patients undergoing dysphagia screening","attribute_type":"Categorical_binary"},"Ischemic stroke patients discharged with antiplatelets":{"label":"Ischemic stroke patients discharged with antiplatelets","attribute_type":"Categorical_binary"},"Atrial fibrillation patients discharged with anticoagulants":{"label":"Atrial fibrillation patients discharged with anticoagulants","attribute_type":"Categorical_binary"},"Stroke patients hospitalized in a dedicated stroke unit / ICU":{"label":"Stroke patients hospitalized in a dedicated stroke unit / ICU","attribute_type":"Categorical_binary"}}');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"j1GD8":[function(require,module,exports) {
(function() {
    "use strict";
    var assign = require("7d6f4cc4aa59d781");
    var vary = require("a19c3ef113830b18");
    var defaults = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    };
    function isString(s) {
        return typeof s === "string" || s instanceof String;
    }
    function isOriginAllowed(origin, allowedOrigin) {
        if (Array.isArray(allowedOrigin)) {
            for(var i = 0; i < allowedOrigin.length; ++i){
                if (isOriginAllowed(origin, allowedOrigin[i])) return true;
            }
            return false;
        } else if (isString(allowedOrigin)) return origin === allowedOrigin;
        else if (allowedOrigin instanceof RegExp) return allowedOrigin.test(origin);
        else return !!allowedOrigin;
    }
    function configureOrigin(options, req) {
        var requestOrigin = req.headers.origin, headers = [], isAllowed;
        if (!options.origin || options.origin === "*") // allow any origin
        headers.push([
            {
                key: "Access-Control-Allow-Origin",
                value: "*"
            }
        ]);
        else if (isString(options.origin)) {
            // fixed origin
            headers.push([
                {
                    key: "Access-Control-Allow-Origin",
                    value: options.origin
                }
            ]);
            headers.push([
                {
                    key: "Vary",
                    value: "Origin"
                }
            ]);
        } else {
            isAllowed = isOriginAllowed(requestOrigin, options.origin);
            // reflect origin
            headers.push([
                {
                    key: "Access-Control-Allow-Origin",
                    value: isAllowed ? requestOrigin : false
                }
            ]);
            headers.push([
                {
                    key: "Vary",
                    value: "Origin"
                }
            ]);
        }
        return headers;
    }
    function configureMethods(options) {
        var methods = options.methods;
        if (methods.join) methods = options.methods.join(","); // .methods is an array, so turn it into a string
        return {
            key: "Access-Control-Allow-Methods",
            value: methods
        };
    }
    function configureCredentials(options) {
        if (options.credentials === true) return {
            key: "Access-Control-Allow-Credentials",
            value: "true"
        };
        return null;
    }
    function configureAllowedHeaders(options, req) {
        var allowedHeaders = options.allowedHeaders || options.headers;
        var headers = [];
        if (!allowedHeaders) {
            allowedHeaders = req.headers["access-control-request-headers"]; // .headers wasn't specified, so reflect the request headers
            headers.push([
                {
                    key: "Vary",
                    value: "Access-Control-Request-Headers"
                }
            ]);
        } else if (allowedHeaders.join) allowedHeaders = allowedHeaders.join(","); // .headers is an array, so turn it into a string
        if (allowedHeaders && allowedHeaders.length) headers.push([
            {
                key: "Access-Control-Allow-Headers",
                value: allowedHeaders
            }
        ]);
        return headers;
    }
    function configureExposedHeaders(options) {
        var headers = options.exposedHeaders;
        if (!headers) return null;
        else if (headers.join) headers = headers.join(","); // .headers is an array, so turn it into a string
        if (headers && headers.length) return {
            key: "Access-Control-Expose-Headers",
            value: headers
        };
        return null;
    }
    function configureMaxAge(options) {
        var maxAge = (typeof options.maxAge === "number" || options.maxAge) && options.maxAge.toString();
        if (maxAge && maxAge.length) return {
            key: "Access-Control-Max-Age",
            value: maxAge
        };
        return null;
    }
    function applyHeaders(headers, res) {
        for(var i = 0, n = headers.length; i < n; i++){
            var header = headers[i];
            if (header) {
                if (Array.isArray(header)) applyHeaders(header, res);
                else if (header.key === "Vary" && header.value) vary(res, header.value);
                else if (header.value) res.setHeader(header.key, header.value);
            }
        }
    }
    function cors(options, req, res, next) {
        var headers = [], method = req.method && req.method.toUpperCase && req.method.toUpperCase();
        if (method === "OPTIONS") {
            // preflight
            headers.push(configureOrigin(options, req));
            headers.push(configureCredentials(options, req));
            headers.push(configureMethods(options, req));
            headers.push(configureAllowedHeaders(options, req));
            headers.push(configureMaxAge(options, req));
            headers.push(configureExposedHeaders(options, req));
            applyHeaders(headers, res);
            if (options.preflightContinue) next();
            else {
                // Safari (and potentially other browsers) need content-length 0,
                //   for 204 or they just hang waiting for a body
                res.statusCode = options.optionsSuccessStatus;
                res.setHeader("Content-Length", "0");
                res.end();
            }
        } else {
            // actual response
            headers.push(configureOrigin(options, req));
            headers.push(configureCredentials(options, req));
            headers.push(configureExposedHeaders(options, req));
            applyHeaders(headers, res);
            next();
        }
    }
    function middlewareWrapper(o) {
        // if options are static (either via defaults or custom options passed in), wrap in a function
        var optionsCallback = null;
        if (typeof o === "function") optionsCallback = o;
        else optionsCallback = function(req, cb) {
            cb(null, o);
        };
        return function corsMiddleware(req, res, next) {
            optionsCallback(req, function(err, options) {
                if (err) next(err);
                else {
                    var corsOptions = assign({}, defaults, options);
                    var originCallback = null;
                    if (corsOptions.origin && typeof corsOptions.origin === "function") originCallback = corsOptions.origin;
                    else if (corsOptions.origin) originCallback = function(origin, cb) {
                        cb(null, corsOptions.origin);
                    };
                    if (originCallback) originCallback(req.headers.origin, function(err2, origin) {
                        if (err2 || !origin) next(err2);
                        else {
                            corsOptions.origin = origin;
                            cors(corsOptions, req, res, next);
                        }
                    });
                    else next();
                }
            });
        };
    }
    // can pass either an options hash, an options delegate, or nothing
    module.exports = middlewareWrapper;
})();

},{"7d6f4cc4aa59d781":"7OXxh","a19c3ef113830b18":"lFBRS"}],"7OXxh":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ "use strict";
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"lFBRS":[function(require,module,exports) {
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ "use strict";
/**
 * Module exports.
 */ module.exports = vary;
module.exports.append = append;
/**
 * RegExp to match field-name in RFC 7230 sec 3.2
 *
 * field-name    = token
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 */ var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
/**
 * Append a field to a vary header.
 *
 * @param {String} header
 * @param {String|Array} field
 * @return {String}
 * @public
 */ function append(header, field) {
    if (typeof header !== "string") throw new TypeError("header argument is required");
    if (!field) throw new TypeError("field argument is required");
    // get fields array
    var fields = !Array.isArray(field) ? parse(String(field)) : field;
    // assert on invalid field names
    for(var j = 0; j < fields.length; j++){
        if (!FIELD_NAME_REGEXP.test(fields[j])) throw new TypeError("field argument contains an invalid header name");
    }
    // existing, unspecified vary
    if (header === "*") return header;
    // enumerate current values
    var val = header;
    var vals = parse(header.toLowerCase());
    // unspecified vary
    if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) return "*";
    for(var i = 0; i < fields.length; i++){
        var fld = fields[i].toLowerCase();
        // append value (case-preserving)
        if (vals.indexOf(fld) === -1) {
            vals.push(fld);
            val = val ? val + ", " + fields[i] : fields[i];
        }
    }
    return val;
}
/**
 * Parse a vary header into an array.
 *
 * @param {String} header
 * @return {Array}
 * @private
 */ function parse(header) {
    var end = 0;
    var list = [];
    var start = 0;
    // gather tokens
    for(var i = 0, len = header.length; i < len; i++)switch(header.charCodeAt(i)){
        case 0x20:
            /*   */ if (start === end) start = end = i + 1;
            break;
        case 0x2c:
            /* , */ list.push(header.substring(start, end));
            start = end = i + 1;
            break;
        default:
            end = i + 1;
            break;
    }
    // final token
    list.push(header.substring(start, end));
    return list;
}
/**
 * Mark that a request is varied on a header field.
 *
 * @param {Object} res
 * @param {String|Array} field
 * @public
 */ function vary(res, field) {
    if (!res || !res.getHeader || !res.setHeader) // quack quack
    throw new TypeError("res argument is required");
    // get existing header
    var val = res.getHeader("Vary") || "";
    var header = Array.isArray(val) ? val.join(", ") : String(val);
    // set new header
    if (val = append(header, field)) res.setHeader("Vary", val);
}

},{}],"aXzLB":[function(require,module,exports) {
module.exports = require("5bf27e11bd6e4ca5")(require("172d5feef6c8e54d").getBundleURL("4EIhp") + "viz.b2f83f57.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("dNh3d"));

},{"5bf27e11bd6e4ca5":"61B45","172d5feef6c8e54d":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["1ZN8K","7LLTF"], "7LLTF", "parcelRequirefe81")

//# sourceMappingURL=index.a9fa2a57.js.map
