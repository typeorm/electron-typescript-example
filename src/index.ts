import {createConnection} from "typeorm";

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
    setTimeout(() => {
        console.log("You can also get posts from the second process:");
        createConnection().then(async connection => {
            const posts = await connection.getRepository("Post").find();
            console.log("posts:", posts);
        });
    }, 5000);
});