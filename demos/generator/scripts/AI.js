Blockly.defineBlocksWithJsonArray([
  // Block for colour picker.
  {
    "type": "sequential",
    "message0": "sequential",
	"previousStatement": null,
    "nextStatement": null,
    "colour": 355
  },
  
  {
  "type": "dense",
  "message0": "add dense layer %1 set Activation %2",
  "args0": [
    {
      "type": "input_value",
      "name": "dense"
    },
    {
      "type": "field_dropdown",
      "name": "act",
      "options": [
        [
          "relu",
          "relu"
        ],
        [
          "softmax",
          "softmax"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "flatten",
  "message0": "add flatten layer",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "conv1d",
  "message0": "conv1D layer , no.of feature(s) %1",
  "args0": [
    {
      "type": "input_value",
      "name": "input shape :",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "summary",
  "message0": "get model summary",
  "inputsInline": false,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "drop",
  "message0": "add drop layer, rate %1",
  "args0": [
    {
      "type": "input_value",
      "name": "rate",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "complie",
  "message0": "complie model, optimizer %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "optimizer",
      "options": [
        [
          "sgd",
          "sgd"
        ],
        [
          "rmsprop",
          "rmsprop"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "preset_model",
  "message0": "create preset model, no.of feature(s) %1  , quality %2",
  "args0": [
    {
      "type": "input_value",
      "name": "feature",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "quailty",
      "options": [
        ["low","32"],
        ["medium","64"],
        ["high","256"],
        ["ultra high","2048"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
},


{
  "type": "fit_vsplit",
  "lastDummyAlign0": "RIGHT",
  "message0": "fit data to train model %1 data list %2 label list %3 no.of epoch %4 %5 validation size %6 %7 batch size %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "epoch",
      "value": 10,
      "min": 0
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "split",
      "value": 0.2,
      "min": 0,
      "max": 1,
      "precision": 0.01
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "batch",
      "value": 1,
      "min": 0
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
}
,

{
  "type": "to_tensor",
  "message0": "to tensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
,

{
  "type": "reshape_tensor",
  "message0": "reshape tensor %1 into shape of : %2 , %3 , %4",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
      "type": "field_number",
      "name": "x",
      "value": 1,
      "min": 0
    },
    {
      "type": "field_number",
      "name": "y",
      "value": 1,
      "min": 0
    },
    {
      "type": "field_number",
      "name": "z",
      "value": 1,
      "min": 0
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},


{
  "type": "predict",
  "message0": "predict data %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "save_model",
  "message0": "save model %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
,
{
  "type": "evaluate",
  "message0": "Evaluate model, data %1 label %2",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "tensorToArray",
  "message0": "get class from prediction %1",
  "args0": [
    {
      "type": "input_value",
      "name": "tensor"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "max_pos_index",
  "message0": "get the max value position %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
,
{
  "type": "max_pos_index_list",
  "message0": "get result list from prediction %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
,
{
  "type": "save_model_local",
  "message0": "save model ,model name %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
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

Blockly.JavaScript['sequential'] = function() {
  return 'model = tf.sequential();\n';
};

Blockly.JavaScript['dense'] = function(block) {
  var value_dense = Blockly.JavaScript.valueToCode(block, 'dense', Blockly.JavaScript.ORDER_ATOMIC);
  dropdown_act = block.getFieldValue('act');
  var code = 'model.add(tf.layers.dense({units: '+ value_dense + ' , activation: \''+ dropdown_act +'\'}));\n';
  
  return code;
};

Blockly.JavaScript['flatten'] = function(block) {
  var code = 'model.add(tf.layers.flatten({}));\n';
  return code;
};

Blockly.JavaScript['conv1d'] = function(block) {
  var value_input_shape__ = Blockly.JavaScript.valueToCode(block, 'input shape :', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'model.add(tf.layers.conv1d({\n';
  code += 'inputShape: ['+ value_input_shape__ +',1], \n';
  code += 'kernelSize: 1, \n';
  code += 'filters: 512, \n';
  code += 'activation: \'relu\', \n';
  code += '}));\n';
  return code;
};

Blockly.JavaScript['summary'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'model.summary()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['drop'] = function(block) {
  var value_rate = Blockly.JavaScript.valueToCode(block, 'rate', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'model.add(tf.layers.dropout({rate :' +value_rate+ '}));\n';
  return code;
};

Blockly.JavaScript['complie'] = function(block) {
  var dropdown_optimizer = block.getFieldValue('optimizer');
  var code = 'model.compile({optimizer :\''+ dropdown_optimizer +'\',loss: \'categoricalCrossentropy\',metrics: [\'accuracy\'],});\n';
  return code;
};

Blockly.JavaScript['preset_model'] = function(block) {
  var value_feature = Blockly.JavaScript.valueToCode(block, 'feature', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_quailty = block.getFieldValue('quailty');
  // TODO: Assemble JavaScript into code variable.
  var code = 'model = tf.sequential();\n';
  code += 'model.add(tf.layers.conv1d({\n';
  code += 'inputShape: ['+ value_feature +',1], \n';
  code += 'kernelSize: 1, \n';
  code += 'filters: 512 \n';
  code += '}));\n';
  code += 'model.add(tf.layers.activation({activation: \'relu\'}));\n';
  code += 'model.add(tf.layers.flatten({}));\n';
  code += 'model.add(tf.layers.dense({units: '+ dropdown_quailty + ' , activation: \'relu\'}));\n';
  code += 'model.add(tf.layers.dense({units: '+ (dropdown_quailty/2) + ' , activation: \'relu\'}));\n';
  code += 'model.add(tf.layers.dense({units: '+ 3+ '}));\n';
  code += 'model.add(tf.layers.activation({activation: \'softmax\'}));\n';
  code += 'model.compile({optimizer :\'sgd\',loss: \'categoricalCrossentropy\',metrics: [\'accuracy\'],});\n';
  
  return code;
};


Blockly.JavaScript['fit_vsplit'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var number_epoch = block.getFieldValue('epoch');
  var number_split = block.getFieldValue('split');
  var number_batch = block.getFieldValue('batch');
  // TODO: Assemble JavaScript into code variable.
  
  //var code = 'model.fit('+value_x+','+value_y+','+'{validationSplit:'+number_split+', batchSize:'+number_batch+', epochs:'+number_epoch+'});\n';
  var code = 'fit_vsplit('+value_x+','+value_y+','+number_split+','+number_batch+','+number_epoch+');\n';
  return code;
};

async function fit_vsplit(x,y,number_split,batchsize,epoch){
	
	const surface = { name: 'show.fitCallbacks', tab: 'Training' };	
	
	await model.fit(x,y, {
	validationSplit: number_split,
	epochs: epoch,
	batchSize: batchsize,
	callbacks: tfvis.show.fitCallbacks(surface, ['loss', 'acc'])
	});
	
	}


Blockly.JavaScript['to_tensor'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tf.tensor('+value_name+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['reshape_tensor'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name+'.reshape(['+number_x+','+number_y+','+number_z+'])';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['predict'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'model.predict('+value_data+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['save_model'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'model.save(\'downloads://my-model-1\');\n';
  return code;
};


Blockly.JavaScript['evaluate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'model.evaluate('+value_x+','+value_y +')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tensorToArray'] = function(block) {
  var value_tensor = Blockly.JavaScript.valueToCode(block, 'tensor', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'tensorToArray('+value_tensor+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['max_pos_index'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'max_in_array('+value_data+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['max_pos_index_list'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'one_hot_to_class_list ('+value_data+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


function tensorToArray(tensor){ // more precise is tensor to multi dim array
	return tensor.arraySync();	
}

function max_in_array(data){
	// return the the pos of the highest value
	var max = data[0];	
	for (var i = 0 ; i < data.length ; i++){
		if( max < data[i]){
			max = data[i];
		}
	}
	return data.indexOf(max);
}

function one_hot_to_class_list (tensor){
	
	var array2d = tensorToArray(tensor);
	var result = [];
	
	for(var i = 0; i < array2d.length;i++){
		result.push(max_in_array(array2d[i]));
	}
	
	return result;
}

Blockly.JavaScript['save_model_local'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'save_model_local('+value_name+');\n';
  return code;
};

async function save_model_local (name){
	await model.save('indexeddb://my-model-1');
	console.log('model '+name +' saved to localstorage');
}


