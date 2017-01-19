"use strict";

const browserify      = require("browserify"),
      concatFileNames = require("gulp-concat-filenames"),
      execute         = require("child_process").exec,
      gulp            = require("gulp"),
      source          = require("vinyl-source-stream"),
      tsify           = require("tsify");

gulp.task("build_test", function()
{
  return browserify({
      // "debug"   : true
    })
    .add("test/node.ts")
    .plugin(tsify)
    .transform("babelify", {
      "presets" : ["es2015", "stage-0"],
      // "sourceMaps"  : true
    })
    .bundle()
    .pipe(source("node.js"))
    .pipe(gulp.dest("test"));
});

gulp.task("lib", function()
{
  // TODO Get rid of ".ts"
  return gulp.src("src/lib/**/*.ts")
    .pipe(concatFileNames("lib.js", {
        "append"  : ";",
        // "newline" : "",
        "prepend" : "export * from ",
        "root"    : "./"
    }))
    .pipe(gulp.dest("./"));
});

gulp.task("prototype", function()
{
  return browserify({
      // "debug"   : true,
      "entries": ["src/prototype/api/object_usage.ts"]
    })
    .plugin("tsify")
    .transform("babelify", {
      "presets" : ["es2015"],
      // "sourceMaps"  : true
    })
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest("./"));
});

gulp.task("retest", [
    "build_test"
  ],
  function(callback)
  {
    // TODO Figure out how to handle stderr?
    execute("node " + __dirname + "/test/node.js", function(error, stdout, stderr)
    {
      if (stderr)
      {
        let newError = new Error("\b\b\b\b\b\b\bTest Results:\n\n" + stderr);
        newError.showStack = false;

        callback(newError);
      }
      else
      {
        // TODO Check if this starts with "Test Results:\n\n"
        console.log(stdout);
      }
    });
  }
);

gulp.task("test", function(callback)
{
  // TODO Figure out how to handle stderr?
  execute("node " + __dirname + "/test/node.js", function(error, stdout, stderr)
  {
    if (stderr)
    {
      let newError = new Error("\b\b\b\b\b\b\bTest Results:\n\n" + stderr);
      newError.showStack = false;

      callback(newError);
    }
    else
    {
      // TODO Check if this starts with "Test Results:\n\n"
      console.log(stdout);
    }
  });
});
