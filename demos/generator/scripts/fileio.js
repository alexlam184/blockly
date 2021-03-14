Blockly.defineBlocksWithJsonArray([
  // Block for colour picker.
  
  {
  "type": "file_input",
  "message0": "File input",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "get_textdata",
  "message0": "get text data from file input",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
  
},
{
  "type": "get_objdatalist",
  "message0": "get object data list",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}


  
  ]);
  
  
  Blockly.JavaScript['file_input'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'var x = document.createElement("INPUT");\n';
  code += 'x.setAttribute("type", "file");\n';
  code += 'x.setAttribute("onchange", \'openFile(event)\');\n';
  code += 'document.getElementById(\'fileio\').appendChild(x);\n';
  return code;
};


Blockly.JavaScript['get_textdata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'textdata';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_objdatalist'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
   var code = 'jsondata';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


