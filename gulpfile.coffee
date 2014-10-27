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

wiredep
  directory: "bower_components"
  bowerJson: require("./bower.json")
  src: "index.html"

paths =
  sass: ["scss/*.scss"]
  css: ["css/*.css"]
  coffee: ["coffee/*.coffee"]
  slim: ["views/*.slim"]

gulp.task "default", ["serve"]
gulp.task "sass", (done) ->
  gulp.src("./scss/*.scss").pipe(sass()).pipe(gulp.dest("./css/")).pipe(minifyCss(keepSpecialComments: 0)).pipe(rename(extname: ".css")).pipe(gulp.dest("./css/")).on "end", done
  null

gulp.task "coffee", (done) ->
  gulp.src("./coffee/*.coffee").pipe(coffee(bare: true)).pipe(gulp.dest("./js/")).on "end", done
  return

gulp.task "slim", (done) ->
  gulp.src("./views/*.slim").pipe(slim(pretty: true)).pipe(gulp.dest("./views/")).on "end", done
  return

gulp.task "watch", ->

  gulp.watch(["index.html", "gulpfile.coffee"]).on "change", (e) ->
    gulp.src(e.path).pipe(connect.reload())
    return

  gulp.watch(paths.sass).on "change", (e) ->
    gulp.src(e.path).pipe(sass({
      "onError": (err)->
        console.log err
        return
    })).pipe(gulp.dest("./css/")).pipe(connect.reload()).on("error", gutil.log)
    return

  gulp.watch(paths.coffee).on "change", (e) ->
    dest = e.path.replace /\/[^\/]+$/, ''
    gulp.src(e.path).pipe(coffee(bare: true).on("error", (err) ->
      console.log err
      return
    )).pipe(gulp.dest('./js/')).pipe connect.reload()
    return

  gulp.watch(paths.slim).on "change", (e) ->
    gulp.src(e.path).pipe(slim(pretty: true).on("error", (err) ->
      console.log err
      return
    )).pipe(gulp.dest("./views/")).pipe connect.reload()
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
