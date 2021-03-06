
const script = "**/*.{js,ts}";
const style = "**/*.{sass,scss}";
const font = "**/*.{eot,svg,ttf,woff,woff2}";

export interface IPath {
    input: {
        html: string,
        styles: string,
        fonts: string,
        scripts: {[key:string]: string},
    },
    output: {
        baseDir: string,
        html: string,
        style: string,
        fonts: string,
        release: string,
        script: {[key:string]: string}
    }
}

const paths: IPath = {
    input: {
        html: 'src/renderer/index.html',
        styles: `src/${style}`,
        fonts: `src/renderer/res/fonts/${font}`,
        scripts: {
            main: `src/main/${script}`,
            renderer: `src/renderer/${script}`
        }
    },
    output: {
        baseDir: "./dist",
        html: 'dist/renderer',
        style: 'index.css',
        fonts: 'dist/renderer/fonts',
        script: {
            main: 'dist/main',
            renderer: 'dist/renderer'
        },
        release: 'release'
    }
}

export default paths;