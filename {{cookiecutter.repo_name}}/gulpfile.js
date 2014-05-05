// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var less = require('gulp-less');
var karma = require('gulp-karma');

// Compile the Less files
gulp.task('less', function() {
    return gulp.src('{{cookiecutter.repo_name}}/static/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('{{cookiecutter.repo_name}}/static/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('{{cookiecutter.repo_name}}/static/css/*.less', ['less']);
});

// Default Task
gulp.task('default', ['less', 'watch']);