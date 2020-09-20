# rex / REquest ajaX
REquest ajaX client get and post for connecting to the API/Web Service Host

### Installing
nodejs via npm
```bash
npm install rex-requestajax
```

html via vanilla js
```bash
clone/download

add /mod/frontend/vanilla/rex.js to your html script 
```


### How To Use
#### 0. Require
nodejs
```bash
const rex = require('rex-requestajax');
```
html
```bash
//add in your html head tag
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> //need jquery for running rex.js
<script src="./mod/frontend/vanilla/rex.js"></script>

//see sample.html for implementation
```

#### 1. Must define API/Web Service Host
Create Instance API/Web Service Host
```bash
const request = new rex("API/Web Service Host");
//const request = new rex("https://randomuser.me/api/")
```

#### 2. You can set arguments for Prerequisite API/Web Service Host and set context for 'this' object after get result 
```bash
const context = this; //'this' is default object you can change with another object;
cons argument = {a:"sdf"};

const request = new rex("API/Web Service Host")
                .setContext(context)
                .setArgs(argument);

```

#### 3. Define request type .get (for get data) or .post (for transaction data)

GET
```bash
cons argument = {a:"sdf"};
const request = new rex("API/Web Service Host");

request.get();

//you also can add argument in .get chain method                
request.get(argument);
```
POST

```bash
cons argument = {a:"sdf"};
const request = new rex("API/Web Service Host");

request.post();

//you also can add argument in .post chain method                
request.post(argument);
```

#### 4. Handle result data with define .done() / .fail() / .final()
.done handle for successfull request
```bash
.done(function(ret){				
    console.log(ret);
    
})
```
.fail handle for fail request
```bash
.fail(function(ret){				
    console.log(ret);
    
})
```

.final handle is always run after successfull request or fail request
```bash
.done(function(ret){				
    console.log(ret);
    
})
.fail(function(ret){				
    console.log(ret);
    
})
.final(function(ret){				
    console.log(ret);
    
})
```

#### More API/Web Service Host
You can change the request API/Web Service Host
```bash
request.setWebhost("new API/Web Service Host");
```
Or You can create new Instance again and follow point 1 is up to you
then follow back point 2/3/4
