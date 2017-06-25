import fs from 'fs';
import gulp from 'gulp';
import help from 'gulp-help';
import cfg from './../config';
import pkg from './../../package.json';

global.gulp = help(gulp, { hideEmpty: true, hideDepsMessage: true });
global.cfg = Object.assign(cfg, pkg.directories);
global.pkg = pkg;

let tasks = fs.readdirSync('./gulp/tasks/');
tasks.forEach(function(task) {
  if (task !== 'index.js') {
    require(`./${task}`);
  }
});
