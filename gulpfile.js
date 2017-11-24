var gulp = require('gulp');
var include = require('gulp-include');
var ts = require('gulp-typescript');
concat = require('gulp-concat');

gulp.task('default', function(){
  return gulp.src(['visualization/**/*.ts', 'node_modules/chart.js/Chart.min.js'])
    .pipe(include())
    .pipe(ts(
      {
        allowJs: true,
        noImplicitAny: true,
        module:"amd",
        target:"es5",
        typeRoots:["./node_modules/"],
        types: ["chart.js"],
        outFile:'omnitrack-vis-core.js'
      }
    ))
    .pipe(
      gulp.dest('built/')
    )
})