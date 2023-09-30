console.log("Gambol: Main process running!");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({
    height: 800,
    width: 900,
    minHeight: 800,
    minWidth: 900,
    autoHideMenuBar: true,
    icon: path.join(__dirname, `/dist/gambol.ui/assets/logo.ico`),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.maximize();

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/gambol.ui/index.html`),
      protocol: "file",
      slashes: true,
    })
  );

  win.on("close", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
