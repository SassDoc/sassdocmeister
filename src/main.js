var Parser = require('sassdoc').Parser;
var CodeMirror = require('codemirror');
require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');

var parser = new Parser();

var sassNode = document.querySelector('#sass');
var jsonNode = document.querySelector('#json');

var convert = function () {
  JSONCodeMirror.setValue(
    JSON.stringify(
      parser.parse(
        sassCodeMirror.getValue()
      ),
      null,
      2
    )
  );
};

var sassCodeMirror = CodeMirror.fromTextArea(sassNode, {
  lineNumbers: true,
  mode: 'text/x-scss',
  tabSize: 2,
  autofocus: true,
  theme: "monokai"
});

var JSONCodeMirror = CodeMirror.fromTextArea(jsonNode, {
  lineNumbers: true,
  mode: { name: "javascript", json: true }, 
  tabSize: 2,
  readOnly: true,
  theme: "monokai"
});

convert();

sassCodeMirror.on('change', convert);
