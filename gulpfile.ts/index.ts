import gulp from "gulp";
import fs from 'fs';
import paths from "./gulp.path";
import scripts from "./scripts";
import template from "./template";
import electron from "./electron";
import styles from "./styles";

function clean() {
  if (fs.existsSync(paths.output.baseDir))
    fs.rmSync(paths.output.baseDir, {recursive: true});

  return Promise.resolve();
}

function set(nodeEnv: string) {
  return () => {
    process.env.NODE_ENV = nodeEnv;
    return Promise.resolve();
  };
}

const prepare = gulp.series(
  clean,
  template,
  scripts.main.compile,
  scripts.renderer.compile,
  styles
)

export const dev = gulp.series(set("development"), prepare, electron);