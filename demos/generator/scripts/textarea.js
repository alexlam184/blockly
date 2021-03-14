Blockly.defineBlocksWithJsonArray([

{
  "type": "clear_textarea",
  "message0": "clear text area",
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "print_textarea",
  "message0": "print to text area %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "print_to_console",
  "message0": "print to console %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
}


  ]);
  
  
Blockly.JavaScript['clear_textarea'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.getElementById(\'output\').value = "";\n';
  return code;
};

Blockly.JavaScript['print_textarea'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.getElementById(\'output\').value += '+ value_text +'+"\\r\\n";\n';
  return code;
};

Blockly.JavaScript['print_to_console'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log('+value_data+');\n';
  return code;
};

