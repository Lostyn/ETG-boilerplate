import { app, BrowserWindow } from 'electron';
import path from "path";
import url from "url";
import createWindow from './windows';

class Main {
    isDev: boolean;
    mainWindow: BrowserWindow | undefined;

    constructor() {
        this.isDev = process.env.NODE_ENV === 'development';

        if (!app.requestSingleInstanceLock())
            app.exit();
    }

    start(): void {
        try {
			this.startup();
		} catch (error) {
			app.exit(1);
		}
    }

    private startup() {
        app.on('ready', async () => {
            this.mainWindow = createWindow(
                'mainWindow',
                {
                    width: 800,
                    height: 210,
                    webPreferences: {
                        nodeIntegration: true,
                        contextIsolation: false
                    },
                    frame: true,
                    resizable: true,
                    show: false
                }    
            );

            this.mainWindow.loadURL(url.format({
                pathname: path.join(__dirname, '../renderer/index.html'),
                protocol: 'file:',
                slashes: true
            }));

            const mainReadyToShow = new Promise(resolve => this.mainWindow?.once('ready-to-show', resolve));
            await mainReadyToShow;
            this.mainWindow.show();

            if (this.isDev) {
                this.connectElectronClient();
            }

            this.registerWindowListener();
        })

        app.on('window-all-closed', () => {
            app.quit();
        })
    }

    connectElectronClient() {
        var { client } = require('electron-connect');
        client.create(this.mainWindow, {port: 30030});
        this.mainWindow?.webContents.openDevTools();
    }

    registerWindowListener() {
        this.mainWindow?.on('closed', () => {
            this.mainWindow = undefined;
        })
    }
}

const main = new Main();
main.start();