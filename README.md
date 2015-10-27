# angular-app-project-setup

You can use this repo if you are wanting to start a new Angular app but don't want the hassle of installing and
setting up all your dependencies and you don't want to waste your time creating folders etc...

## Here you will find:

The following tools up and running ready for you to build on top of;
- Angular
- SASS
- BrowserSync
- Gulp

## What do I need to do?

All the hard work has been done for you, just clone the repo and presuming you have NODE modules installed on your
machine just open up terminal / command line (or whatever you use!!) and type 'gulp serve' to serve the app

## What else does it do?

There are a couple of gulp tasks set up which all run constantly once 'gulp serve' has been run and the app is up and
running.

### watch task
When you edit and save any .scss file in the sass folder the 'watch' task is run and as part of this task another task
called 'sass' is run

### sass task
When a .scss file is changed and saved the 'sass' task converted the changed file into a .css file and the output is
put into a file inside the 'generated' folder

### browserSync task
This does exactly what is says on the tin, when any changes to any css / js / html files are detected browserSync
refreshes the browser(s) automatically to show your changes

### jshint
Runs jshint against all JS files inside app/scripts and gives report in console
Can be run by itself using gulp lint or will run as part of watch task while app is running

## Gulp tasks

- 'gulp serve' - serves the application
- 'gulp lint' - runs jshint against all JS in scripts folder


## Still to add

- karma
