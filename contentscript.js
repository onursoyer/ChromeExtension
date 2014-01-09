/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

var wordArr = {"With": "ile",
 			  "How": "nasil",
 			  "What": "ne",
 			  "can": "-e bilmek",
 			  "Content": "icerik"};

// for (var i = wordArr.length - 1; i >= 0; i--) {
// 	console.log(wordArr[i]);
// };

var regex = /Forum/;
// console.log(document.body.innerText);
// Test the text of the body element against our regular expression.
// if (regex.test(document.body.innerText)) {
for(var word in wordArr){

	console.log(wordArr[word]);
	// $("body").highlight(word, wordArr[word]);

}	
	$(".highlight").powerTip({ placement: 'n' });


// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'alert("onur")'
//   }); 
// });