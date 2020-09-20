const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

module.exports = class rex{
    constructor(webservice){
        this.webservice = webservice;
        this.args;
        this.request;
        this.context;
        this.webhost;

        return this;
    }

    setWebhost(webServiceHost){
        this.webservice = webServiceHost;
        this.args = null;

        return this;
    }

    setContext(context){
        this.context = context;
        return this;
	}

    setArgs(args){
        this.args = args;
        return this;
    }

    post(args){        
        args && this.setArgs(args);
        this.request = $.post( 
            this.webservice
            , this.args
        );

        return this;
    }

    get(){     
        args && this.setArgs(args);   
        this.request = $.get( 
            this.webservice
            , this.args
        );

        return this;
    }

    done(fnSuccess){
        this.checkRequired();
        var fn = fnSuccess.bind(this.context);
        this.request.done(fn);
        return this;
    }

    fail(fnFail){
        this.checkRequired();
        var fn = fnFail.bind(this.context);
        this.request.fail(fn);
        return this;
    }

    final(fnFinal){
        this.checkRequired();
        var fn = fnFinal.bind(this.context);
        this.request.always(fn);
    }

    checkRequired(){
        if(!this.webservice) throw("webServiceHost is required");
    }

    show(){
        return this.webservice;
    }

}

