const gulp = require('gulp');
const less = require('gulp-less');
const livereload = require('gulp-livereload');
//const cleanCSS = require('gulp-clean-css');

gulp.task('less-css', ()=>{
	gulp.src('./src/*/*.less')
		.pipe(less())
		.pipe(gulp.dest('./src/*/'))
		.pipe(livereload());
})

gulp.task('watch', () =>{
	const server = livereload({ start: true });
	gulp.watch(['./src/**/*.less'], ['less-css']);
})

gulp.task('default', ['less-css', 'watch'])