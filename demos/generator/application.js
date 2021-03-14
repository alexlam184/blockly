var input_json,input_bin;
var button;

let serial;
let latestData = "waiting for data"; 

let text_ble="Not connected", text_serial="Not connected";

let myCharacteristic;
var serviceUuid = "19b10000-e8f2-537e-4f6c-d104768a1214";
let myBLE;
let isConnected = false;
let prev_time;  
const serialLEDController = new SerialLEDController();
var isSerialConnect = false;

let ReadFromDevice = 0;
var streamDataset = [];

function setup() {
  // Create a p5ble class
  createCanvas(500, 500);
  background(0);
  myBLE = new p5ble();
  textSize(20);
  
  prev_time = millis();
  
  

  bt_connectBLE = new Clickable();     //Create button
  bt_connectBLE.locate(400, 20);        //Position Button
  bt_connectBLE.text = "Connect BLE";
  bt_connectBLE.onPress = function(){  //When myButton is pressed
  connectToBle();            
  };

  bt_disconnectBLE = new Clickable();     //Create button
  bt_disconnectBLE.locate(400, 80);        //Position Button
  bt_disconnectBLE.text = "Disconnect BLE";
  bt_disconnectBLE.onPress = function(){  //When myButton is pressed
  disconnectToBle();            
  };
  
  bt_sent1 = new Clickable();     //Create button
  bt_sent1.locate(400, 180);        //Position Button
  bt_sent1.text = "Start streaming";
  bt_sent1.onPress = function(){  //When myButton is pressed
  //myBLE.write(myCharacteristic, "1");
  sequence();
  };
  
  bt_sent2= new Clickable();     //Create button
  bt_sent2.locate(400, 280);        //Position Button
  bt_sent2.text = "Stop streaming";
  bt_sent2.onPress = function(){  //When myButton is pressed
  myBLE.write(myCharacteristic, "2");
  };
  
  bt_model_summary= new Clickable();     //Create button
  bt_model_summary.locate(400, 380);        //Position Button
  bt_model_summary.text = "model summary";
  bt_model_summary.onPress = function(){  //When myButton is pressed
  model.summary();
  };
  
  
  bt_serial_init= new Clickable();     //Create button
  bt_serial_init.locate(300, 20);        //Position Button
  bt_serial_init.text = "serial init";
  bt_serial_init.onPress = function(){  //When myButton is pressed
  //serialLEDController.init();
  serial = new p5.SerialPort();
  serial.open("COM3",{baudRate: 115200});
  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
  
  
  isSerialConnect = true;
  

  
  
  };
  
  
  bt_serial_read= new Clickable();     //Create button
  bt_serial_read.locate(300, 80);        //Position Button
  bt_serial_read.text = "serial read";
  bt_serial_read.onPress = function(){  //When myButton is pressed
  
	serial.close();	
	isSerialConnect = false;
   
  };


}


function p5_getStandardScore (data ,mean, sd){
	
	var result = [];
	for (var i = 0 ; i < data.length ; i++){
		var  cur_list = [];
		for (var j = 0 ;  j < data[0].length ; j++){
			cur_list.push((data[i][j]-mean[j])/sd[j]);
		}
		result.push(cur_list);
	}
	return result;
		
}



async function p5_prediction (data){
	// step 1 trim and vaildate the data to perfect 500
	document.getElementById('output').value += "Enter";
	let trimmed_data = []
	for( let i =0 ; i < 500 ; i++){
		let temp_datalist = data[i].split(",");
		if(temp_datalist.length == 8){
		// if is proper push to the list, pos 1 is the EMG CH1 raw data
		trimmed_data.push(parseInt(temp_datalist[1]));
		}
		else{
		console.log("Rejected, invalid data detected")
		return;
		}
	}
	let data_list = [];
	
	
	//let xx = [1620,1585,1478,1395,1414,1507,1606,1613,1534,1427,1396,1446,1566,1622,1587,1479,1395,1416,1509,1608,1614,1538,1427,1397,1452,1568,1626,1589,1479,1395,1411,1506,1611,1615,1538,1425,1394,1450,1568,1625,1585,1476,1394,1414,1507,1606,1613,1540,1424,1392,1450,1573,1623,1588,1480,1396,1418,1507,1609,1617,1543,1432,1392,1448,1565,1625,1589,1481,1393,1410,1504,1607,1614,1539,1424,1392,1446,1562,1620,1590,1483,1399,1408,1500,1603,1611,1539,1425,1385,1441,1563,1622,1587,1483,1400,1414,1501,1599,1618,1551,1431,1391,1444,1559,1622,1593,1486,1400,1409,1499,1602,1612,1545,1433,1389,1440,1556,1619,1588,1482,1395,1409,1491,1594,1610,1543,1428,1390,1441,1551,1618,1588,1483,1395,1410,1497,1603,1614,1546,1434,1393,1442,1557,1620,1591,1486,1398,1407,1495,1606,1617,1548,1437,1390,1440,1557,1621,1588,1488,1400,1405,1491,1598,1615,1544,1433,1390,1442,1551,1619,1590,1486,1398,1410,1493,1598,1612,1544,1427,1385,1438,1552,1621,1589,1486,1398,1404,1488,1595,1612,1545,1433,1388,1434,1549,1617,1592,1489,1403,1407,1493,1596,1619,1549,1433,1392,1438,1549,1618,1590,1486,1398,1404,1486,1590,1613,1549,1430,1388,1434,1546,1615,1593,1489,1399,1401,1483,1591,1611,1543,1432,1384,1432,1547,1616,1591,1493,1397,1399,1487,1592,1614,1549,1436,1386,1432,1545,1615,1590,1489,1400,1403,1487,1593,1611,1548,1432,1387,1429,1542,1614,1595,1491,1403,1404,1484,1595,1613,1552,1437,1387,1430,1544,1616,1595,1492,1399,1401,1482,1591,1612,1552,1435,1385,1426,1537,1611,1589,1492,1398,1400,1480,1587,1613,1548,1438,1387,1427,1535,1611,1594,1496,1399,1394,1478,1592,1616,1551,1436,1386,1427,1539,1612,1587,1491,1403,1397,1475,1583,1611,1551,1435,1384,1424,1536,1609,1589,1491,1397,1400,1473,1587,1611,1550,1439,1386,1427,1534,1607,1588,1492,1397,1394,1470,1586,1611,1549,1433,1384,1423,1526,1607,1585,1489,1399,1390,1471,1582,1608,1552,1434,1381,1421,1530,1607,1585,1492,1397,1395,1472,1580,1613,1554,1441,1381,1420,1532,1611,1590,1491,1396,1389,1468,1583,1608,1550,1435,1378,1417,1525,1607,1587,1494,1398,1387,1469,1580,1608,1553,1435,1380,1419,1528,1607,1591,1497,1396,1389,1466,1579,1609,1553,1442,1380,1415,1526,1606,1588,1498,1401,1393,1466,1582,1611,1558,1437,1378,1418,1527,1607,1592,1499,1403,1390,1464,1577,1612,1560,1442,1383,1418,1526,1610,1593,1498,1401,1395,1467,1579,1612,1556,1445,1380,1414,1520,1605,1590,1498,1397,1386,1464,1582,1615,1559,1443,1385,1416,1522,1607,1593,1502,1405,1386,1462,1578,1614,1558,1444,1383,1415,1522,1605,1589,1502,1403,1386,1458,1572,1609,1556,1445,1381,1414,1521,1611,1597,1504,1401,1387,1461];
	//data_list.push(xx);
	//let yy = [1500,1520,1506,1489,1477,1478,1502,1512,1515,1501,1486,1484,1491,1506,1511,1512,1497,1480,1478,1495,1501,1516,1507,1487,1477,1482,1491,1503,1517,1504,1488,1475,1480,1497,1512,1514,1497,1481,1477,1482,1501,1518,1508,1486,1472,1477,1497,1508,1505,1501,1483,1472,1475,1496,1504,1511,1501,1493,1475,1472,1496,1509,1518,1492,1473,1466,1483,1497,1506,1502,1483,1472,1486,1493,1504,1511,1501,1478,1471,1474,1490,1500,1516,1494,1473,1465,1478,1503,1507,1505,1480,1469,1473,1481,1493,1503,1486,1491,1474,1480,1486,1493,1508,1488,1475,1468,1477,1488,1505,1502,1486,1466,1480,1473,1486,1498,1500,1483,1466,1461,1478,1497,1517,1499,1477,1452,1472,1497,1496,1507,1504,1501,1511,1468,1472,1494,1543,1524,1443,1491,1454,1466,1554,1604,1422,1451,1501,1466,1420,1540,1529,1434,1486,1480,1323,1565,1623,1619,1625,1391,1167,1355,1439,1705,1820,1352,1208,1495,1362,1387,1721,1537,1216,1365,1382,1491,1465,1470,1504,1616,1466,1517,1465,1538,1539,1626,1464,1462,1527,1568,1427,1821,1375,1157,1503,1719,1515,1254,1183,1536,1421,1717,1388,1416,1456,1639,1438,1583,1330,1494,1476,1331,1721,1455,1418,1520,1144,1605,1489,1280,1479,1714,1501,1332,1374,1604,1527,1480,1613,1581,1450,1415,1646,1612,1231,1301,1289,1433,1523,1438,1498,1620,1627,1619,1470,1462,1557,1484,1378,1327,1455,1450,1626,1690,1289,1318,1507,1529,1444,1411,1610,1583,1464,1641,1550,1239,1527,1387,1567,1520,1698,1565,1535,1517,1572,1714,1934,1224,1150,1348,1505,1519,1537,1664,1573,1379,1474,1535,1460,1532,1622,1640,1336,1512,1530,1284,1644,1337,1493,1373,1550,1440,1465,1503,1319,1511,1691,1242,1474,1568,1331,1566,1453,1498,1412,1472,1488,1522,1563,1630,1814,1525,1533,1346,1219,1468,1376,1469,1482,1544,1516,1632,1529,1426,1487,1494,1476,1500,1531,1547,1516,1606,1760,1325,1390,1482,1414,1465,1442,1514,1523,1504,1524,1523,1532,1519,1539,1503,1518,1520,1485,1479,1478,1517,1511,1550,1537,1541,1540,1521,1566,1543,1542,1529,1526,1549,1543,1514,1545,1589,1586,1569,1605,1497,1483,1496,1521,1568,1492,1463,1434,1498,1521,1517,1569,1594,1667,1706,1648,1601,1565,1594,1563,1533,1587,1610,1613,1578,1545,1545,1561,1574,1576,1545,1525,1502,1515,1518,1524,1538,1499,1455,1448,1470,1477,1496,1474,1471,1440,1450,1452,1479,1482,1464,1456,1441,1430,1453,1461,1460,1454,1445,1437,1442,1442,1455,1452,1475,1448,1443,1458,1470,1484,1465,1463,1451,1466,1470,1475,1495,1484,1476,1470,1462,1480,1495,1496,1490,1478,1466,1486,1503,1511,1507,1501,1483,1468,1492,1500,1509,1496,1478,1465,1463,1488,1517,1497,1488,1471,1465,1487,1487,1506,1501,1483,1485,1474,1492,1495,1506];
	//data_list.push(yy);
	data_list.push(trimmed_data);	
	// step 2 pass to standardscore which return array with 1 length
	let data_score = p5_getStandardScore(data_list,model_mean, model_sd);
	//let data_score = getMeanArray(data_list);
	// step 3 xx = tf.tensor( value).reshpae([1,500,1])
	console.log(data_score);
	document.getElementById('output').value += model.predict(tf.tensor(data_score[0]).reshape([1,500,1]));
	
	document.getElementById('output').value += one_hot_to_class_list(model.predict(tf.tensor(data_score[0]).reshape([1,500,1]))) + "\n";
	
	myBLE.write(myCharacteristic,one_hot_to_class_list(model.predict(tf.tensor(data_score[0]).reshape([1,500,1]))));
	
	//return model.predict(tf.tensor(data_score[0]).reshpae([1,500,1]));
	
	// step 4 model.predict
	// return a int of class
}

function connectToBle() {
  // Connect to a device by passing the service UUID
  myBLE.connect(serviceUuid, gotCharacteristics);
}

function disconnectToBle() {
  // Disonnect to the device
  myBLE.disconnect();
  // Check if myBLE is connected
  isConnected = myBLE.isConnected();
}

function onDisconnected() {
  console.log('Device got disconnected.');
  isConnected = false;
}

// A function that will be called once got characteristics
function gotCharacteristics(error, characteristics) {
  if (error) {console.log('error: ', error);}
  console.log('characteristics: ', characteristics);
  myCharacteristic = characteristics[0];

  // Check if myBLE is connected
  isConnected = myBLE.isConnected();

  // Add a event handler when the device is disconnected
  myBLE.onDisconnected(onDisconnected);
}

function draw() {
  

  
  background(0);
  if (isConnected) {
    fill(0,255,0);
    text('BLE: Connected!', 100, 100);
  } else {
    fill(255,0,0);
    text('BLE: Disconnected', 100, 100);
  }
  
    if (isSerialConnect) {
    fill(0,255,0);
    text('Serial: Connected!', 100, 150);
	text(latestData, 100, 200);
	
	//document.getElementById('output').value += latestData + "\n";
	
  } else {
    fill(255,0,0);
    text('Serial: Disconnected', 100, 150);
  }
  
  text(streamDataset.length, 100, 250);
  if(streamDataset.length >= 500){
	 isSerialConnect = false;
	 //document.getElementById('output').value += p5_prediction (streamDataset);
	 p5_prediction(streamDataset);
	 console.log(streamDataset);
	 streamDataset=[];
	 
  }
  
     
     bt_connectBLE.draw();
     bt_disconnectBLE.draw();
     bt_sent1.draw();
     bt_sent2.draw();
     bt_model_summary.draw();
     bt_serial_init.draw();
     bt_serial_read.draw();
  
  
}

// busy waiting must removed in actual program
function busywaiting(time){
  while (millis()-prev_time<time){}
  prev_time = millis();
}


function sequence(){
  
   myBLE.write(myCharacteristic, "1");
   busywaiting(10000);
   myBLE.write(myCharacteristic, "2");
   busywaiting(100);
   myBLE.write(myCharacteristic, "1");
   busywaiting(800);
   myBLE.write(myCharacteristic, "2");
   busywaiting(300);
   myBLE.write(myCharacteristic, "1");
   busywaiting(500);
   myBLE.write(myCharacteristic, "2");
   busywaiting(2000);
   myBLE.write(myCharacteristic, "1");
   busywaiting(300);
   myBLE.write(myCharacteristic, "2");
   busywaiting(1000);
   myBLE.write(myCharacteristic, "1");
   busywaiting(3000);
   myBLE.write(myCharacteristic, "3");
   busywaiting(300);
   myBLE.write(myCharacteristic, "1");
   busywaiting(1000);
   myBLE.write(myCharacteristic, "3");
   busywaiting(1500);
   myBLE.write(myCharacteristic, "1");
   busywaiting(50);
   myBLE.write(myCharacteristic, "3");
   busywaiting(50);
   myBLE.write(myCharacteristic, "1");
   busywaiting(100);
   myBLE.write(myCharacteristic, "3");
   busywaiting(1000);
   myBLE.write(myCharacteristic, "1");
  
  
}



function handleFile() {
  
 // model = tf.loadLayersModel('indexeddb://my-model-1');
}

// Serial function part

function serverConnected() {
  print("Connected to Server");
}

// Got the list of ports
function gotList(thelist) {
  print("List of Serial Ports:");
  // theList is an array of their names
  for (let i = 0; i < thelist.length; i++) {
    // Display in the console
    print(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  print("Serial Port is Open");
}

function gotClose(){
    print("Serial Port is Closed");
    latestData = "Serial Port is Closed";
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  print(theerror);
}

// There is data available to work with from the serial port
function gotData() {
  let currentString = serial.readLine();  // read the incoming string
  trim(currentString);                    // remove any trailing whitespace
  if (!currentString) return;             // if the string is empty, do no more
  //console.log(currentString);             // print the string
  latestData = currentString;            // save it for the draw method
  streamDataset.push(latestData);

}

// We got raw from the serial port
function gotRawData(thedata) {
  print("gotRawData" + thedata);
}