const CREATE_NEW_GROUP = "create_new_group_with_current_tab";
const ADD_TO_GROUP = "add_to_group";
// PageDown is right
const MOVE_TAB_TO_RIGHT = "move_tab_to_right";
// PageUp is left
const MOVE_TAB_TO_LEFT = "move_tab_to_left";

// chrome.runtime.onInstalled.addListener(() =>
// 	console.log("installed extension")
// );

// chrome.tabs.onCreated.addListener(tab => {
// 	console.log(tab);
// })

// TabGroups shortcuts
chrome.commands.onCommand.addListener((command) => {
	if (command === CREATE_NEW_GROUP) {
		createNewGroup();
	} else if (command === ADD_TO_GROUP) {
		addToGroup();
	} else if (command == MOVE_TAB_TO_RIGHT) {
		console.log(`${command} recvd`);
		moveCurrentTab(command);
	} else if (command == MOVE_TAB_TO_LEFT) {
		console.log(`${command} recvd`);
		moveCurrentTab(command);
	}
});

const createNewGroup = () => {
	console.log("creating new group...");
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		console.log(tabs);
		const { id } = tabs[0];
		// create new group and add active-tab-in-current-window to it
		chrome.tabs.group({ tabIds: id }, (groupId) =>
			console.log(`tab was added to group: ${groupId}`)
		);
	});
};

const addToGroup = () => {
	console.log("get groups");
	// get all tab groups
	chrome.tabGroups.query({ windowId: -2 }, (groups) => {
		console.log(groups);
	});
};

const moveCurrentTab = (command) => {
	//* get num of tabs
	chrome.tabs.query({ currentWindow: true }, (tabs) => {
		let numTabs = tabs.length;
		console.log(`num of tabs: ${numTabs}`);

		let direction = command == MOVE_TAB_TO_LEFT ? -1 : 1;

		//* get id and index of active tab in current window
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const { id, index } = tabs[0];
			// move the tab in specified direction
			let newIndex = index + direction;
			if (newIndex < 0) {
				newIndex = numTabs - 1;
			} else if (newIndex > numTabs - 1) {
				newIndex = 0;
			}
			// console.log(`current idx: ${index}, after move: ${newIndex}`);
			chrome.tabs.move(
				(tabIds = id),
				(moveProperties = { index: newIndex }),
				(tabs) => {
					console.log(`moved tab to ${direction == -1 ? "right" : "left"}`);
				}
			);
		});
	});
};

// "_execute_action": {
//   "suggested_key": {
//     "default": "Ctrl+Q",
//     "mac": "MacCtrl+Q"
//   },
//   "description": "Opens hello.html"
// },
