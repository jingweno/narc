var exec = require('child_process').exec;

var GitAdapter = function(repositoryUrl, branch, workingDir) {
  this.repositoryUrl = repositoryUrl;
  this.workingDir = workingDir;
  this.branch = branch;
};

GitAdapter.prototype.setup = function(callback) {
  var cloneCmd = 'git clone -b ' + this.branch + ' ' + this.repositoryUrl + ' ' + this.workingDir;
  console.log(cloneCmd);
  exec(cloneCmd, function(error, stdout, stderr) {
    callback(error);
  });
};

module.exports = GitAdapter;
