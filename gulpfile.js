const gulp        	= require('gulp');
const browserSync 	= require('browser-sync').create();
const sass        	= require('gulp-sass');
const autoprefixer 	= require('gulp-autoprefixer');
const pug 			= require('gulp-pug');
const uglify 		= require('gulp-uglify');
const cleanCSS 		= require('gulp-clean-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js' ,'pug'], () => {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("./_sass/**/*.sass", ['sass','pug']);
    gulp.watch('./_js/*.js', ['js', 'pug']);
    gulp.watch('./**/*.pug', ['pug']);

    gulp.watch("./app/**/*.html").on('change', browserSync.reload);
    gulp.watch("./app/**/*.css").on('change', browserSync.reload);
    gulp.watch("./app/**/*.js").on('change', browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src("./_sass/**/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({
	        browsers: ['last 15 versions'],
	        cascade: false
	      }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./app/css"))
});

gulp.task('pug', ['sass', 'js'], () =>{
  return gulp.src(['./**/*.pug', '!./node_modules/**/*.pug', '!./_pugIncludes/**/*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('./app'))
});

gulp.task('js', function(){
    return gulp.src("./_js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./app/js'))
});

gulp.task('default', ['serve']);