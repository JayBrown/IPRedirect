// ==UserScript==
// @name         IPRedirect
// @downloadURL  https://raw.githubusercontent.com/JayBrown/IPRedirect/master/IPRedirect.js
// @updateURL    https://raw.githubusercontent.com/JayBrown/IPRedirect/master/IPRedirect.meta.js
// @namespace    https://github.com/JayBrown
// @version      1.3.0
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

let check = new Image();
check.onload = onlineHook;
// check.onerror = offlineHook;
check.src = 'http://127.0.0.1:' + ipfsPort + '/ipfs/QmPhnvn747LqwPYMJmQVorMaGbMSgA7mRRoyyZYz3DoZRQ/8f70e85e85c6a23c75c6862292d871c0.png?d=' + escape(Date());

function onlineHook() {

    // redirect
    var targetURL = "http://localhost:" + ipfsPort;
    var regExp = /.?(\/ipfs\/|\/ipns\/)(.+)/;
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
}

// inspired by: https://github.com/NeoTeo/ipfs-catcher/blob/826eff1e89db42071355d2767bf21e89ded8aadf/ipfs-catcher.safariextension/startscript.js
// informed by: https://github.com/loadletter/ipfs-redirect-userscript/issues/1
// with @lidel: https://github.com/ipfs/awesome-ipfs/issues/88#issuecomment-300813540
