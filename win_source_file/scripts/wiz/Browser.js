'use strict';
var Wiz = Wiz || {};
Wiz.Browser = {
    onRequest : function(){
        try {
//            console.log('Wiz.Browse() onRequest(): ');
//            console.log(arguments);
            return (chrome.runtime.onMessage) ? (chrome.runtime.onMessage) : (chrome.extension.onRequest);
        } catch (err) {
            console.log('Wiz.Browser onRequest() Error : ' + err);
        }
    },
    sendRequest : function (tabId, params, callback) {
        try {
//            console.log('Wiz.Browser() sendRequest(): ');
//            console.log(arguments);
            if (chrome.tabs.sendMessage) {
                chrome.tabs.sendMessage(tabId, params, callback);
            } else {
                chrome.tabs.sendRequest(tabId, params, callback);
            }
//            return (chrome.tabs.sendMessage) ? (chrome.tabs.sendMessage) : (chrome.tabs.sendRequest);
        } catch (err) {
            console.log('Wiz.Browser sendRequest() Error : ' + err);
        }
    }
};