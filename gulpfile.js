var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
gulp.task('browserSync', () => {
  browserSync.init({
    open: false,
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', () => {
  return gulp.src('app/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('images', () => {
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg|mp4|webm|xml|ico|json|pdf)')
    .pipe(gulp.dest('docs/img'))
    
});

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('useref', () => {
  return gulp.src(['app/**/*.html'])
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulpIf("app/*.html", htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true
    })))
    .pipe(gulp.dest('docs/'))
});

gulp.task('movejs', function () {
  gulp.src("app/js/*")
    .pipe(gulp.dest("docs/js/"))
  setTimeout(function () {
      del.sync(["./js", "./css"])
  }, 3000)
})
gulp.task('scripts', () => {
  return gulp.src(['docs/js/script.min.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest('docs/js/script.min.js'));
})

gulp.task('minifyhtml', () => {
  return gulp.src('docs/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true
    }))
    .pipe(gulp.dest('docs/'));
});

gulp.task('prefixer', () =>
  gulp.src('app/css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('docs/css'))
);

gulp.task('clean:docs', () => {
  return del.sync('docs');
})

gulp.task('default', function (callback) {
  runSequence(['watch', 'sass', 'browserSync'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:docs', ['sass', 'images'], 'prefixer',  'useref', 'minifyhtml', 'movejs',
    callback)
})

gulp.task('minbuild', function (callback) {
  runSequence('clean:docs', ['sass', 'images'], "useref", "movejs", callback)
})