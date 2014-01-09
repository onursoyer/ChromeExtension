// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when a message is passed.  We assume that the content script
// wants to show the page action.
// function onRequest(request, sender, sendResponse) {
//   // Show the page action for the tab that the sender (content script)
//   // was on.
//   chrome.pageAction.show(sender.tab.id);

//  	// $('body').highlight('with');//, "onur");


// 	// $('.highlight').data({ placement: 'n' });
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   }); 
// });

// // alert("Zaaa");

//   // Return nothing to let the connection be cleaned up.
//   sendResponse({});
// };

	chrome.browserAction.onClicked.addListener(function(tab) {
7	  // No tabs or host permissions needed!
8	  console.log('Turning ' + tab.url + ' red!');
9	  chrome.tabs.executeScript({
10	    code: 'document.body.style.backgroundColor="red"'
11	  });
12	});
// chrome.tabs.executeScript( {
//   code: "window.getSelection().toString();"
// }, function(selection) {
//   document.getElementById("output").value = selection[0];
//   alert(selection[0]);
// });

// Listen for the content script to send a message to the background page.
// chrome.extension.onRequest.addListener(onRequest);
