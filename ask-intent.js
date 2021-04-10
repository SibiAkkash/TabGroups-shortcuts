/**
 * TODO open dialog and ask whether you have a reason to open youtube
 * * const pattern = /^(https:\/\/www\.youtube\.com\/)(\w*)/;
 * * listen for tab update for status: loading and url: https://www.youtube.com
 * * note the id of the youtube tab
 * * listen for loading: complete on that tab, that is check whether subsequent "tab loaded" updates have the same id as the newly opened youtube tab
 * * log the opening
 */

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
// 	// console.log(tabId, changeInfo, tab);
// 	const hasStatus = changeInfo.hasOwnProperty("status");
// 	const hasUrl = changeInfo.hasOwnProperty("url");
// 	if (hasStatus && hasUrl) {
// 		// this is a tab loading event
// 		// check whether its youtube
// 		let { url } = changeInfo;
// 		if (url.match(pattern)) {
// 			console.log("Youtube opened");
// 			// open popup page
// 			openPopup();
// 		}
// 	}
// });

// const openPopup = () => {
// 	// wait 2 seconds then open
// 	let wait = setTimeout(() => {

// 	})
// 	chrome.tabs.create({ url: "hello.html" });
// };
