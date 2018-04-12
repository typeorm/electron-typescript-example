var electron = require("electron");
var url = require("url");

electron.app.on("ready", () => {
    var mainWindow = new electron.BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: __dirname + "/index.html",
        protocol: "file:",
        slashes: true
    }));
    mainWindow.toggleDevTools();
});