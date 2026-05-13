Blockly.defineBlocksWithJsonArray([{
  "type": "wait_seconds",
  "message0": " wait %1 seconds",
  "args0": [{
    "type": "field_number",
    "name": "SECONDS",
    "min": 0,
    "max": 86400,
    "value": 1
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
}]);

Blockly.JavaScript['wait_seconds'] = function(block) {
  var code = 'setTimeout(() => {console.log("hahaha");}, SECONDS * 1000);\n';
  return code;
}
