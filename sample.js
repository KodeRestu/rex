const rex = require('./index.js'); 
//install to your nodejs app with "npm i rex-requestajax" then require('rex-requestajax');


const request = new rex("https://randomuser.me/api/")
					//.setContext(context)
					//.setArgs({a:"sdf"});

request.get()
.done(function(ret){				
    console.log(ret.results[0]);
    
})
.fail(function(ret){	
    
})
.final(function(ret){	
    
})
