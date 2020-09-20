function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var rex = /*#__PURE__*/function () {
  function rex(webservice) {
    _classCallCheck(this, rex);

    this.webservice = webservice;
    this.args;
    this.request;
    this.context;
    this.webhost;
    return this;
  }

  _createClass(rex, [{
    key: "setWebhost",
    value: function setWebhost(webServiceHost) {
      this.webservice = webServiceHost;
      this.args = null;
      return this;
    }
  }, {
    key: "setContext",
    value: function setContext(context) {
      this.context = context;
      return this;
    }
  }, {
    key: "setArgs",
    value: function setArgs(args) {
      this.args = args;
      return this;
    }
  }, {
    key: "post",
    value: function post(args) {
      args && this.setArgs(args);
      this.request = $.post(this.webservice, this.args);
      return this;
    }
  }, {
    key: "get",
    value: function get(args) {
      args && this.setArgs(args);
      this.request = $.get(this.webservice, this.args);
      return this;
    }
  }, {
    key: "done",
    value: function done(fnSuccess) {
      this.checkRequired();
      var fn = fnSuccess.bind(this.context);
      this.request.done(fn);
      return this;
    }
  }, {
    key: "fail",
    value: function fail(fnFail) {
      this.checkRequired();
      var fn = fnFail.bind(this.context);
      this.request.fail(fn);
      return this;
    }
  }, {
    key: "final",
    value: function final(fnFinal) {
      this.checkRequired();
      var fn = fnFinal.bind(this.context);
      this.request.always(fn);
    }
  }, {
    key: "checkRequired",
    value: function checkRequired() {
      if (!this.webservice) throw "webServiceHost is required";
    }
  }, {
    key: "show",
    value: function show() {
      return this.webservice;
    }
  }]);

  return rex;
}(); //module.exports = rex;