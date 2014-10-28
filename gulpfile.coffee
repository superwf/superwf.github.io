gulp = require("gulp")
gutil = require("gulp-util")
bower = require("bower")
concat = require("gulp-concat")
connect = require("gulp-connect")
slim = require("gulp-slim")
coffee = require("gulp-coffee")
sass = require("gulp-sass")
minifyCss = require("gulp-minify-css")
rename = require("gulp-rename")
sh = require("shelljs")
wiredep = require("wiredep")
mainBowerFiles = require('main-bower-files')

wiredep
  directory: "dev/bower_components"
  bowerJson: require("./bower.json")
  src: "index.html"

paths =
  sass: ["scss/*.scss"]
  coffee: ["coffee/*.coffee"]
  slim: ["slim/*.slim"]

gulp.task "default", ["serve"]
gulp.task "sass", (done) ->
  gulp.src("./scss/*.scss").pipe(sass()).pipe(gulp.dest("./dev/css/")).pipe(minifyCss(keepSpecialComments: 0)).pipe(rename(extname: ".css")).pipe(gulp.dest("./css/")).on "end", done
  null

gulp.task "coffee", (done) ->
  gulp.src("./coffee/*.coffee").pipe(coffee(bare: true)).pipe(gulp.dest("./dev/js/")).on "end", done
  return

gulp.task "slim", (done) ->
  gulp.src(paths.slim).pipe(slim(pretty: true)).pipe(gulp.dest("./dev/views/")).on "end", done
  return

gulp.task "watch", ->

  gulp.watch(["dev/index.html", "gulpfile.coffee"]).on "change", (e) ->
    gulp.src(e.path).pipe(connect.reload())
    return

  gulp.watch(paths.sass).on "change", (e) ->
    gulp.src(e.path).pipe(sass({
      "onError": (err)->
        console.log err
        return
    })).pipe(gulp.dest("./dev/css/")).pipe(connect.reload()).on("error", gutil.log)
    return

  gulp.watch(paths.coffee).on "change", (e) ->
    dest = e.path.replace /\/[^\/]+$/, ''
    gulp.src(e.path).pipe(coffee(bare: true).on("error", (err) ->
      console.log err
      return
    )).pipe(gulp.dest('./dev/js/')).pipe connect.reload()
    return

  gulp.watch(paths.slim).on "change", (e) ->
    gulp.src(e.path).pipe(slim(pretty: true).on("error", (err) ->
      console.log err
      return
    )).pipe(gulp.dest("./dev/views/")).pipe connect.reload()
    return

  return

gulp.task "install", ["git-check"], ->
  bower.commands.install().on "log", (data) ->
    gutil.log "bower", gutil.colors.cyan(data.id), data.message
    return


gulp.task "git-check", (done) ->
  unless sh.which("git")
    console.log "  " + gutil.colors.red("Git is not installed."), "\n  Git, the version control system, is required to download Ionic.", "\n  Download git here:", gutil.colors.cyan("http://git-scm.com/downloads") + ".", "\n  Once git is installed, run '" + gutil.colors.cyan("gulp install") + "' again."
    process.exit 1
  done()
  return

gulp.task "serve", ["slim", "coffee", "sass", "watch"], ->
  connect.server
    livereload: {port: 35728}
    port: 9000
    root: ["./"]
  return

gulp.task "pre-build", ['slim', 'coffee', 'sass'], ->
  #gulp.src('./dev/bower_components/jsplumb/dist/js/jquery.jsPlumb-1.6.4.js').pipe(gulp.dest('./dev/js/'))
  #gulp.src(mainBowerFiles()).pipe(gulp.dest('./dev/js/'))
  gulp.src('./dev/views/*').pipe(gulp.dest('./views/'))
  return

gulp.task 'concat', ['pre-build'], ->
  files = mainBowerFiles()
  files.push './dev/bower_components/jsplumb/dist/js/jquery.jsPlumb-1.6.4.js'
  files.push './dev/js/*.js'
  gulp.src(files).pipe(concat('script.js')).pipe(gulp.dest('./js'))
  return

gulp.task 'build', ['concat']
