// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var less = require('gulp-less');
var karma = require('gulp-karma');

// Include files to test with karma
var testFiles = [
  '{{cookiecutter.repo_name}}/static/bower_components/angular/angular.js',
  '{{cookiecutter.repo_name}}/static/bower_components/angular-route/angular-route.js',
  '{{cookiecutter.repo_name}}/static/bower_components/angular-mocks/angular-mocks.js',
  '{{cookiecutter.repo_name}}/static/js/app/**/*.js',
  '{{cookiecutter.repo_name}}/static/js/app/controllers/**/*.js',
  '{{cookiecutter.repo_name}}/static/js/test/unit/**/*.js'
];

// Compile the Less files
gulp.task('less', function() {
    return gulp.src('{{cookiecutter.repo_name}}/static/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('{{cookiecutter.repo_name}}/static/css'));
});

// Unit testing with karma
gulp.task('karma', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: '{{cookiecutter.repo_name}}/static/js/test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

// Unit testing with karma and watching for changes
gulp.task('karma:watch', function () {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }))
    .on('error', function(e) {throw e});
});

// Tests
gulp.task('test', ['karma']);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('{{cookiecutter.repo_name}}/static/css/*.less', ['less']);
    gulp.watch(testFiles, ['test']);
});

// Default Task
gulp.task('default', ['less', 'watch', 'test']);