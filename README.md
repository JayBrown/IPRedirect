![ipredirect-platform-cross](https://img.shields.io/badge/platform-cross--platform-lightgrey.svg)
![ipredirect-code-js](https://img.shields.io/badge/code-JavaScript-yellow.svg)
[![ipredirect-ipfs](https://img.shields.io/badge/dependency-ipfs%200.4.8-green.svg)](https://ipfs.io)
[![ipredirect-license](http://img.shields.io/badge/license-MIT+-blue.svg)](https://github.com/JayBrown/IPRedirect/blob/master/license.md)

# IPRedirect <img src="https://github.com/JayBrown/IPRedirect/blob/master/img/jb-img.png" height="20px"/>
**IPRedirect** (short for **interplanetary redirect**), a JavaScript to redirect IPFS and IPNS addresses to localhost in your browser.

Install the userscript with e.g. [**Tampermonkey**](http://tampermonkey.net).

The script presupposes that your localhost IPFS port has been set to 8080. If not, you need to manually edit the port number in line 17 of the script.

***Currently testing:*** the script should eventually determine, if your IPFS node is running. If not, it should not redirect, and instead open the URL as is.
