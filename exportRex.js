const localPath = 'mod/frontend/rex.js';

const fs = require("fs");

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

function expRex() {
  let data = "";
  let path = `./${localPath}`;


  if(!fs.existsSync(path)) {
    path = `./node_modules/rex-requestajax/${localPath}`;
  }

  data = fs.readFileSync(path,'utf8');
  
  var clsStr = `(      
       ${data}
       )`      

  return eval(clsStr);
}

const rex = expRex();

module.exports = rex;