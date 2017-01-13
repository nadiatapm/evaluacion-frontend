 var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngcrush = require('pngcrush');



gulp.task('script', function(cb){
	// tarea script
	gulp.src('src/js/*.js')
		// verificar errores de JS
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		// unir todos los archivos
		.pipe(concat('script.min.js'))
		// enfearlo (minimizarlo)
		.pipe(uglify())
		// dejarlo en carpeta dist/js
		.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function() {
	// tarea style
	gulp.src('src/sass/main.scss')
		// transformar los sass
		.pipe(sass().on('error', sass.logError))
		// minimizarlo
		.pipe(minifyCSS())
		// dejarlo en archivo de destino
		.pipe(concat('style.min.css'))
		//Mensaje gracias al plugin `gulp-notify`
		.pipe(notify("Tarea sass terminada!"))
		// dejarlo en carpeta dist/css
		.pipe(gulp.dest('dist/css'));
});

gulp.task('images', function() {
	// tarea images
	//Tarea para comprimir imagenes
  gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('style', function(){
	// aca va la tarea
	gulp.src('src/sass/main.scss')
		// transformar los sass
		.pipe(sass().on('error', sass.logError))
		// minimizarlo
		.pipe(minifyCSS())
		// dejarlo en archivo de destino
		.pipe(concat('style.min.css'))
		// dejarlo en carpeta dist/css
		.pipe(gulp.dest('dist/css'));
});
//esta tarea es para actualizar solo una vez gulp
 gulp.task('watch,'function(){
 	gulp.watch('')
 })

gulp.task('fonts', function(){
	gulp.src('src/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});


gulp.task('default', ['images', 'style', 'script','fonts']);

