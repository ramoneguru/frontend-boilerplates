import browserify from 'browserify';
import connect from 'gulp-connect';
import del from 'del';
import globby from 'globby';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import source from 'vinyl-source-stream';
import yargs from 'yargs';

const ARGV = yargs.argv;
const SRC_DIR = ARGV.source || 'vanilla';
const DEV_DIR = 'dev';


const CLEAN_GLOB = [
  `${DEV_DIR}/**/*`,
  `!${DEV_DIR}/vendor/**`
];

const SCRIPTS_GLOB = [
  `${SRC_DIR}/src/**/*.+(js|jsx|es6)`
];

const COPY_GLOB = [
  `${SRC_DIR}/src/**/*.*`,
  `!${SRC_DIR}/src/**/*.+(js|es6)`
];


// Transpiles, bundles, and copies scripts to DEV_DIR as app.js.
gulp.task('scripts', () =>
  globby(SCRIPTS_GLOB).then(entries =>
    browserify({
      entries: entries,
      extensions: ['.jsx']
    })
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(DEV_DIR))));


// Copies all other files to DEV_DIR.
gulp.task('copy', () => gulp.src(COPY_GLOB).pipe(gulp.dest(DEV_DIR)));


// Clears all non-vendor files from DEV_DIR.
gulp.task('clean', (done) => {
  del(CLEAN_GLOB).then(() => done());
});


// Starts a webserver.
gulp.task('connect', () => {
  connect.server({
    root: DEV_DIR,
    livereload: true,
    port: 8080
  });
});


gulp.task('watch', () => {
  // Trigger rebuilds when source files are changed.
  gulp.watch(SCRIPTS_GLOB, ['scripts']);
  gulp.watch(COPY_GLOB, ['copy']);

  // Reload when DEV_DIR is changed.
  gulp.watch([`${DEV_DIR}/**/*`], () => gulp.src(`${DEV_DIR}/**/*`).pipe(connect.reload()));
});


gulp.task('default', () => {
  runSequence('clean', ['copy', 'scripts', 'connect'], 'watch');
});
