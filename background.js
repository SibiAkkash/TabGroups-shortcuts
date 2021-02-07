const CREATE_NEW_GROUP = "create_new_group_with_current_tab";
const ADD_TO_GROUP = "add_to_group";

chrome.runtime.onInstalled.addListener(() =>
	console.log("installed extension")
);

chrome.commands.onCommand.addListener((command) => {
	if (command === CREATE_NEW_GROUP) {
		createNewGroup();
	} else if (command === ADD_TO_GROUP) {
		addToGroup();
	}
});

const createNewGroup = () => {
	console.log("creating new group...");
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		console.log(tabs);
		const { id } = tabs[0];
		// create new group and add current tab to it
		chrome.tabs.group({ tabIds: id }, (groupId) =>
			console.log(`tab was added to group: ${groupId}`)
		);
	});
};

const addToGroup = () => {
	console.log("get groups");
	// get all tab groups
	chrome.tabGroups.query((queryInfo = {}), (groups) => {
		console.log(groups);
	});
};

// "_execute_action": {
//   "suggested_key": {
//     "default": "Ctrl+Q",
//     "mac": "MacCtrl+Q"
//   },
//   "description": "Opens hello.html"
// },
