Blockly.defineBlocksWithJsonArray([{
  "type": "pause",
  "message0": "pause for %1 milliseconds",
  "args0": [{
    "type": "field_number",
    "name": "mseconds",
    "min": 0,
    "max": 86400,
    "value": 1
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
}]);

Blockly.JavaScript['pause'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'mseconds', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setTimeout(() => (' + value_time + '));\n';
  return code;
};
