// ==UserScript==
// @name         IPRedirect
// @namespace    JayBrown
// @version      1.0
// @description  JavaScript to redirect IPFS URLs to localhost
// @author       Joss Brown, NeoTeo, loadletter
// @match        *://*/ipfs/*
// @match        *://*/ipns/*
// @exclude      http://localhost*
// @grant        none
// @run-at       document-start
// ==/UserScript==

var regExp = /.?(\/ipfs\/|\/ipns\/)?(Qm.+)/;
var matchURL = regExp.exec(window.location.toString());

if (matchURL !== null && matchURL.length > 1) {

    // IPFS protocol
    var theProtocol = matchURL[1];
    ipProtocol = (theProtocol === null) ? "/ipfs/" : theProtocol;

    // IPFS hash
    var ipHash = matchURL[2];
    if (ipHash !== null) {
        var newURL = "http://localhost:8080" + ipProtocol + ipHash;
        window.location = newURL;
    }
}

// derived: https://github.com/NeoTeo/ipfs-catcher
// informed: https://github.com/loadletter/ipfs-redirect-userscript
