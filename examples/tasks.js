#!/usr/bin/env node

var sys  = require("sys")
var task = require("../task")

// this task run if no CLI arguments are specified
task.define("default", function() {
  task.sh("ls")
})

// ./tasks.js setup
task.define("setup", function() {})

// ./tasks.js greet Jakub
task.define("greet", "Greet an user", function(name) {
  sys.puts(arguments.length)
  sys.puts("Hello " + sys.inspect(arguments) + "!")
})

// ./tasks.js setup
task.define("greet", ["setup"], function(name) {
  sys.puts(arguments.length)
  sys.puts("Hello " + sys.inspect(arguments) + "!")
})

// ./tasks.js setup
task.define("greet", "Greet an user", ["setup"], function(name) {
  sys.puts(arguments.length)
  sys.puts("Hello " + sys.inspect(arguments) + "!")
})

// ./tasks.js release:tag
task.define("release:tag", function() {
  sys.puts("Releasing")
})

// parse CLI and execute task
task.run()
