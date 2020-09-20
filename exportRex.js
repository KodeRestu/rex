const pathClass = './mod/frontend/rex.js';

const fs = require("fs");

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

module.exports = function() {
  var data = fs.readFileSync(pathClass,'utf8');
  var clsStr = `(      
       ${data}
       )`      

  return eval(clsStr);
}();