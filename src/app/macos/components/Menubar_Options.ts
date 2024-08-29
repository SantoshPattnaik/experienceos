interface Menubar_Options {
    id: number;
    text: string;
    separator: boolean;
    gray: boolean;
}

const apple_logo: Menubar_Options[] = [
    { id: 1, text: "About This Mac", separator: true, gray: false },
    { id: 2, text: "System Preferences...", separator: true, gray: false },
    { id: 3, text: "App Store...", separator: true, gray: false },
    { id: 4, text: "Recent Items", separator: false, gray: false },
    { id: 5, text: "Force Quit", separator: false, gray: false },
    { id: 6, text: "Sleep", separator: false, gray: false },
    { id: 7, text: "Restart", separator: false, gray: false },
    { id: 8, text: "Shutdown", separator: true, gray: false },
    { id: 9, text: "Lock Screen", separator: false, gray: false },
    { id: 10, text: "Log Out User...", separator: false, gray: false },
];

const finder: Menubar_Options[] = [
    { id: 1, text: "About Finder", separator: true, gray: false },
    { id: 2, text: "Preferences", separator: true, gray: false },
    { id: 3, text: "Empty Trash", separator: true, gray: false },
    { id: 4, text: "Hide Finder", separator: false, gray: false },
    { id: 5, text: "Hide Others", separator: false, gray: false },
    { id: 6, text: "Show All", separator: false, gray: true },
];
const file: Menubar_Options[] = [
    { id: 1, text: "New Finder Window", separator: true, gray: false },
    { id: 2, text: "New Folder", separator: true, gray: false },
    { id: 3, text: "New Folder With Selection", separator: true, gray: true },
    { id: 4, text: "New Smart Folder", separator: false, gray: false },
    { id: 5, text: "New Tab", separator: false, gray: false },
    { id: 6, text: "Open", separator: false, gray: true },
    { id: 7, text: "Open With", separator: false, gray: true },
    { id: 8, text: "Print", separator: false, gray: true },
    { id: 9, text: "Close Window", separator: true, gray: true },
    { id: 10, text: "Get Info", separator: false, gray: false },
    { id: 11, text: "Rename", separator: true, gray: true },
    { id: 12, text: "Compress", separator: true, gray: true },
    { id: 13, text: "Duplicate", separator: false, gray: true },
    { id: 14, text: "Make Alias", separator: false, gray: true },
    { id: 15, text: "Quick Look", separator: false, gray: true },
    { id: 16, text: "Show Original", separator: false, gray: true },
    { id: 17, text: "Add to Sidebar", separator: true, gray: true },
    { id: 18, text: "Move to Trash", separator: false, gray: true },
    { id: 19, text: "Eject", separator: true, gray: true },
    { id: 20, text: "Find", separator: true, gray: false },
    { id: 21, text: "Tag", separator: false, gray: true },
];
const edit: Menubar_Options[] = [
    { id: 1, text: "Undo", separator: false, gray: true },
    { id: 2, text: "Redo", separator: false, gray: true },
    { id: 3, text: "Cut", separator: false, gray: true },
    { id: 4, text: "Copy", separator: false, gray: true },
    { id: 5, text: "Paste", separator: false, gray: true },
    { id: 6, text: "Select All", separator: true, gray: true },
    { id: 7, text: "Show Clipboard", separator: true, gray: false },
    { id: 8, text: "Start Dictation...", separator: false, gray: false },
    { id: 9, text: "Emoji and Symbols", separator: false, gray: false },
];
const view: Menubar_Options[] = [
    { id: 1, text: "As Icons", separator: false, gray: true },
    { id: 2, text: "As List", separator: false, gray: true },
    { id: 3, text: "As Columns", separator: false, gray: true },
    { id: 4, text: "As Gallery", separator: true, gray: true },
    { id: 5, text: "Use Stacks", separator: false, gray: false },
    { id: 6, text: "Sort By", separator: false, gray: false },
    { id: 7, text: "Clean Up", separator: true, gray: true },
    { id: 8, text: "Clean Up By", separator: false, gray: true },
    { id: 9, text: "Hide Sidebar", separator: false, gray: true },
    { id: 10, text: "Show Preview", separator: true, gray: true },
    { id: 11, text: "Hide Toolbar", separator: false, gray: true },
    { id: 12, text: "Show All Tabs", separator: false, gray: true },
    { id: 13, text: "Show Tab Bar", separator: false, gray: true },
    { id: 14, text: "Show Path Bar", separator: false, gray: true },
    { id: 15, text: "Show Status Bar", separator: true, gray: true },
    { id: 16, text: "Customize Toolbar", separator: true, gray: true },
    { id: 17, text: "Show View Options", separator: false, gray: false },
    { id: 18, text: "Show Preview Options", separator: false, gray: false },
];
const go: Menubar_Options[] = [
    { id: 1, text: "Back", separator: false, gray: true },
    { id: 2, text: "Forward", separator: false, gray: true },
    { id: 3, text: "Enclosing Folder", separator: true, gray: false },
    { id: 4, text: "Recents", separator: false, gray: false },
    { id: 5, text: "Documents", separator: false, gray: false },
    { id: 6, text: "Desktop", separator: false, gray: false },
    { id: 7, text: "Downloads", separator: false, gray: false },
    { id: 8, text: "Home", separator: false, gray: false },
    { id: 9, text: "Computer", separator: false, gray: false },
    { id: 10, text: "Airdrop", separator: false, gray: false },
    { id: 11, text: "Network", separator: false, gray: false },
    { id: 12, text: "iCloud Drive", separator: false, gray: false },
    { id: 13, text: "Applications", separator: false, gray: false },
    { id: 14, text: "Utilities", separator: true, gray: false },
    { id: 15, text: "Go To Folder", separator: false, gray: false },
    { id: 16, text: "Connect To Server", separator: false, gray: false },
];
const window: Menubar_Options[] = [
    { id: 1, text: "Minimize", separator: false, gray: true },
    { id: 2, text: "Zoom", separator: false, gray: true },
    {
        id: 3,
        text: "Move Window to Left Side of Screen",
        separator: false,
        gray: true,
    },
    {
        id: 4,
        text: "Move Window to Right Side of Screen",
        separator: false,
        gray: true,
    },
    { id: 5, text: "Cycle Through Windows", separator: true, gray: false },
    { id: 6, text: "Show Previous Tab", separator: false, gray: true },
    { id: 7, text: "Show Next Tab", separator: false, gray: true },
    { id: 8, text: "Move Tab to New Window", separator: false, gray: true },
    { id: 9, text: "Merge All Windows", separator: true, gray: true },
    { id: 10, text: "Bring All to Front", separator: false, gray: false },
];
const help: Menubar_Options[] = [
    { id: 1, text: "Send Finder Feedback", separator: false, gray: true },
    { id: 2, text: "macOS", separator: false, gray: true },
];

export { apple_logo, finder, file, edit, view, go, window, help };