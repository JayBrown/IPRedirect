// ==UserScript==
// @name         IPRedirect
// @downloadURL  https://raw.githubusercontent.com/JayBrown/IPRedirect/master/IPRedirect.js
// @updateURL    https://raw.githubusercontent.com/JayBrown/IPRedirect/master/IPRedirect.meta.js
// @namespace    https://github.com/JayBrown
// @version      1.1.1
// @description  Interplanetary Redirect: JavaScript to redirect IPFS & IPNS addresses to localhost in the browser
// @author       Joss Brown
// @match        *://*/ipfs/*
// @match        *://*/ipns/*
// @exclude      *://localhost*
// @exclude      127.0.0.1*
// @grant        none
// @run-at       document-start
// ==/UserScript==

var ipfsPort = "8080";
var targetURL = "http://localhost:" + ipfsPort;
var regExp = /.?(\/ipfs\/|\/ipns\/)?(Qm.+)/;
var matchURL = regExp.exec(window.location.toString());

if (matchURL !== null && matchURL.length > 1) {

    // IPFS protocol
    var theProtocol = matchURL[1];
    ipProtocol = (theProtocol === null) ? "/ipfs/" : theProtocol;

    // IPFS hash
    var ipHash = matchURL[2];
    if (ipHash !== null) {
        var newURL = targetURL + ipProtocol + ipHash;
        window.location = newURL;
    }
}

// inspired by: https://github.com/NeoTeo/ipfs-catcher/blob/826eff1e89db42071355d2767bf21e89ded8aadf/ipfs-catcher.safariextension/startscript.js
// informed by: https://github.com/loadletter/ipfs-redirect-userscript/issues/1
