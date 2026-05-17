Blockly.defineBlocksWithJsonArray([{
  "type": "pause",
  "message0": "pause %1 milliseconds",
  "args0": [{
    "type": "field_number",
    "name": "pausetime",
    "min": 0,
    "max": 86400000,
    "value": 1
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
}]);

Blockly.JavaScript['pause'] = function(block) {
  var code = 'setTimeout(' + pausetime + ');\n';
  return code;
}
