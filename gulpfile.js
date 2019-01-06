var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rigger      = require('gulp-rigger');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
	return gulp.src("app/js/**/*")
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('fonts', function(){
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task("html", function () {
    return gulp.src("app/**/*.html")
    	.pipe(rigger())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "img", 'js', 'fonts', 'html'], function () {
    browserSync.init({
        server: "./dist",
        notify: false,
        ui: {
            port: 3000
        }
    });
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/img/**/*', ['img']);
    gulp.watch('app/js/**/*', ['js']);
    gulp.watch('app/fonts/**/*,'['fonts']);
    gulp.watch('app/**/*.html' , ['html']);
});
