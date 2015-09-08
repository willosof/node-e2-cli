debug = require("debug")('e2-cli');
e2 = require("../node-e2");

debug('info', "E2 CLI Starting");

var con = new e2();

con.connect({

  success: function() {
    debug("con.connect","success");
  },

  error: function(errno) {
    debug("con.connect","error");
  }

});

function keepalive() {
  setTimeout("keepalive()",10000);
}
