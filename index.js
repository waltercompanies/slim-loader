'use strict';

var loaderUtils = require("loader-utils");
var slm = require("slm");
var markdown = require("slm-markdown");

markdown.register(slm.template);

module.exports = function(source) {
  this.cacheable && this.cacheable(true);

  var options = loaderUtils.getOptions(this) || {};
  options.filename = this.resourcePath;
  var tmplFunc = slm.compile(source, options);

  // watch for changes in every referenced file
  Object.keys(slm.template.VM.prototype._cache).forEach(function(dep) {
    this.addDependency(dep);
  }, this);

  // purge cache after each run to force rebuild on changes
  Object.keys(slm.template.VM.prototype._cache).forEach(function(dep) {
    delete slm.template.VM.prototype._cache[dep];
  });

  return tmplFunc();
};
