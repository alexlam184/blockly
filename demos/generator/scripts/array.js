Blockly.defineBlocksWithJsonArray([
{
  "type": "array",
  "message0": "array",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "array_push",
  "message0": "array %1 add %2",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "data"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "object_getkey",
  "message0": "get key from %1",
  "args0": [
    {
      "type": "input_value",
      "name": "obj",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "object_getvalue",
  "message0": "get value from %1",
  "args0": [
    {
      "type": "input_value",
      "name": "obj",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "str_to_intarray",
  "message0": "convert  %1 to integer array",
  "args0": [
    {
      "type": "input_value",
      "name": "string",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "col_to_intarray",
  "message0": "convert col %1 from %2 to %3",
  "args0": [
    {
      "type": "input_value",
      "name": "col",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "data"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "number array",
          "1"
        ],
        [
          "string array",
          "2"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "get_classes",
  "message0": "get classes from %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "get_label",
  "message0": "convert  %1 to label, reference class %2",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "class",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "get_onehotcode",
  "message0": "convert list to one hot code %1 ,no of class %2",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "class",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "shape",
  "message0": "shape of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
}




  ]);
  
  Blockly.JavaScript['array'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '[]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
  
  Blockly.JavaScript['array_push'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_array+ '.push('+value_data+');\n';
  return code;
};

  Blockly.JavaScript['object_getkey'] = function(block) {
  var value_obj = Blockly.JavaScript.valueToCode(block, 'obj', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Object.keys('+value_obj+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['object_getvalue'] = function(block) {
  var value_obj = Blockly.JavaScript.valueToCode(block, 'obj', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Object.values('+value_obj+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['str_to_intarray'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  var code = 'strToIntArray('+value_string+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['col_to_intarray'] = function(block) {
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'colToArray('+value_data+','+value_col+','+dropdown_type+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_classes'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'getClasses('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_label'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_class = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'getLabel('+value_data+','+value_class+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_onehotcode'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_class = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tf.oneHot('+value_data+','+value_class+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['shape'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tf.shape('+value_name+')';
   return [code, Blockly.JavaScript.ORDER_NONE];
};

function getLabel(data,classes){
	var label_list =[];
	
	console.log(data.length);
	
	for (var i = 0; i< data.length;i++){
		label_list.push(classes.indexOf(data[i]));
		}
	return label_list;	
}

function getClasses(data){
	
	var data_list = [];
	for (var i =0 ; i < data.length;i++){
		if (data_list.indexOf(data[i])<0){  // if data is not found push it into the list
			data_list.push(data[i]);
		}
	}
	return data_list;
	
}


function colToArray(data,col,type) {
  
  var data_list = [];
  for( var i = 0 ; i < data.length ; i++){  
	  if(type =="1"){
	  data_list.push(strToIntArray(Object.values(data[i])[col]));
	  }
	  else if(type =="2"){
	  data_list.push(Object.values(data[i])[col]);
	  }
	  
  }
  
   console.log(data_list);

  return data_list; 
}



function strToIntArray(data) {
  var data_list = [];
  var x =  data.split(",");
  for(var i = 0 ; i < x.length ; i++){
	  data_list.push(Number(x[i]));
  }
  return data_list; 
}




