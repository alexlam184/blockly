Blockly.defineBlocksWithJsonArray([
{
  "type": "get_standard_score",
  "message0": "get standard score from  %1 mean %2 SD %3",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "mean",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "sd",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
}
,
{
  "type": "get_statistic",
  "message0": "get statistic  %1 from %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "Standard Score",
          "getStandardScore"
        ],
        [
          "SD",
          "getSDArray"
        ],
        [
          "mean",
          "getMeanArray"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
}
,
{
  "type": "set_mean",
  "message0": "set mean array %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "set_sd",
  "message0": "set SD array %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}
]);



Blockly.JavaScript['get_statistic'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var code = dropdown_type+ '('+value_array+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['get_standard_score'] = function(block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mean = Blockly.JavaScript.valueToCode(block, 'mean', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sd = Blockly.JavaScript.valueToCode(block, 'sd', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'getStandardScore('+value_data+','+value_mean+','+ value_sd+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_mean'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'model_mean = '+ value_name+';\n';
  return code;
};
Blockly.JavaScript['set_sd'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'model_sd = '+value_name+';\n';
  return code;
};

function getStandardScore (data ,mean, sd){
	
	var result = [];
	document.getElementById('output').value +="HERE !!! /n";
	console.log("mean");
	console.log(mean);
	console.log("SD");
	console.log(sd);
	
	
	for (var i = 0 ; i < data.length ; i++){
		var  cur_list = [];
		for (var j = 0 ;  j < data[0].length ; j++){
			cur_list.push((data[i][j]-mean[j])/sd[j]);
		}
		result.push(cur_list);
	}
	return result;
		
}

function getMeanArray (data){

	var result = []; 
	for (var i = 0; i < data[0].length ;i++){ // span horizonal
	  var sum = 0;
	  for( var j = 0 ; j < data.length ; j++){ // span vertical
		  sum += data[j][i]; 
	  }
	  result.push(sum/data.length);
	}

	return result;
}


function getSDArray (data){
	
	var result =[];
	var mean = getMeanArray(data);
	
	for (var i = 0; i < data[0].length ; i++ ){
		var sum = 0 ;
		for (var j = 0 ; j < data.length ; j++){
			sum += Math.pow(((data[j][i]) - mean[i]),2);
		}
		result.push(Math.sqrt(sum/data.length));
	}		
	return result;
}

function getStandardScore (data){
	
	var result = [];
	var mean = getMeanArray(data);
	var SD = getSDArray(data);
	
	for (var i = 0 ; i < data.length ; i++){
		var  cur_list = [];
		for (var j = 0 ;  j < data[0].length ; j++){
			cur_list.push((data[i][j]-mean[j])/SD[j]);
		}
		result.push(cur_list);
	}
	return result;
}


