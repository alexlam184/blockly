Blockly.defineBlocksWithJsonArray([

{
  "type": "http_request",
  "message0": "send http resqust to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "request",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);


Blockly.JavaScript['http_request'] = function(block) {
   var value_request = Blockly.JavaScript.valueToCode(block, 'request', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open('+value_request+');\n';
  return code;
};